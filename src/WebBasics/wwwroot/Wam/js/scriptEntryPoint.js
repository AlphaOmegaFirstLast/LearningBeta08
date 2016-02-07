//----------------- document onReady --------------------
$(document).ready(function ()
{
  window.onerror = function (msg, url, line, col, error)
  {
    globalErrorHandler(msg, url, line, col, error);
  };
  $('#dvHeader').load('layout/_Header.html');
  $('#dvFooter').load('layout/_Footer.html');

  //----------- load the right menu -----------
  var url = window.location.href;
  if (url.indexOf("menuAdmin.html") !=  - 1)
  {
    $('#dvMainMenu').load('layout/_MenuAdmin.html');
  }
  else if (url.indexOf("index.html") !=  - 1)
  {
    $('#dvMainMenu').load('layout/_MenuAdmin.html');
  }

  if (isSecurityEnabled)
  {
    getCurrentUser();// if bfs then bypass security
  }
  runMenuItem(); // for commands in url like >> print.html?menu=menuReportShow  & search.html?menu=searchAgent

});
//-------------------------------------------------------------------------------------
function getCurrentUser()
{
  ajaxGet('security/getUserInfo', '', onSuccessGetCurrentUser, displayErrorMessage);
}
//-------------------------------------------------------------------------------------
function onSuccessGetCurrentUser(wsResponse)
{
  var currentUser = wsResponse.data.name;
  if (currentUser == "bfs")
  {
    isSecurityEnabled = false;
  }
  else 
  {
    getAccessibleItems();
  }
}
//-------------------------------------------------------------------------------------
function getAccessibleItems()
{
  ajaxGetDataRecord('security/getAccessibleItems', "accessibleSysFunc", '', onSuccessGetAccessibleItems, displayErrorMessage);
}
//-------------------------------------------------------------------------------------
function onSuccessGetAccessibleItems(wsResponse)
{
  var recCount = wsResponse.data.records.length;
  if (recCount != null)
  {
    for (var i = 0;i < wsResponse.data.records.length;i++)
    {
      var systemId = wsResponse.data.records[i].systemId;
      if (wsResponse.data.records[i].systemType.trim() == AccessibleTypeFunction)
      {
        accessableMenuItems.push(systemId);
      }
      if (wsResponse.data.records[i].systemType.trim() == AccessibleTypeReport)
      {
        accessableReports.push(systemId);
      }

    }
  }

}
//-------------------------------------------------------------------------------------
function runMenuItem(itemId, itemSelected)
{
  initVars();
  //---------------------------------------------------------
  var menuItem = itemSelected;
  if (itemSelected == null || itemSelected == 'undefined')
  {
    menuItem = getUrlParam('menu');
  }
  var menuItemId = itemId;
  if (menuItemId == null || menuItemId == 'undefined')
  {
    menuItemId = getUrlParam('itemId');
  }
  if (menuItemId == null || menuItemId == 'undefined')
  {
    menuItemId = 0;
  }
  //------------ Security check (authorization)-------------
  var index;
  var isAccessable = false;// to bypass security set it to true
  if (isSecurityEnabled)
  {
    if ((itemId != null) && (itemId != ""))
    {
      for (index = 0;index < accessableMenuItems.length;index++)
      {
        if (accessableMenuItems[index] == itemId)
        {
          isAccessable = true;
          break;
        }
      }
    }
    else 
    {
      isAccessable = true;
    }
  }
  else 
  {
    isAccessable = true;
  }
  if (!isAccessable)
  {
    displayUnAuthorized();
    //------- clear all content divs --------
    document.getElementById("dvControls").innerHTML = "";
    document.getElementById("dvCriteria").innerHTML = "";
    document.getElementById("dvList").innerHTML = "";
    return;
  }
  //----------------------------------------------------------
  var menuItemFound = systemMenu(menuItem);

  if (!menuItemFound)
  {
    menuItemFound = screensMenu(menuItem);// Business-specific scriptDemoMenu.js
  }
  if (!menuItemFound)
  {
    menuItemFound = reportsMenu(menuItem);// Business-specific scriptDemoMenu.js
  }
  if (!menuItemFound)
  {
    menuItemFound = searchesMenu(menuItem);// Business-specific scriptDemoMenu.js
  }

}
//-------------------------------------------------------------------------------------
function systemMenu(menuItem)
{
  var menuItemFound = true;
  switch (menuItem)
  {
    case 'menuReportShow':
    //to print a report
      menuReportShow();
      break;
    case 'menuReportRestore':
    //to restore a report from url
      var id = getUrlParam('id');
      menuReportRestore(id);
      break;
    case 'menuChat':
      chatEntryPoint();
      break;
    default :
      menuItemFound = false;
      break;
  }
  return menuItemFound;
}
//-------------------------------------------------------------------------------------
function setCurrentApp(app, mode)
{
  if (app == null)
  {
    //------ pass currentapp from parent win to another ------ like from  screenGenerator to searchGenerator and reportGenerator
    var openerWin = window.opener;
    if (openerWin != null)
    {
      // alert(openerWin.currentApp.title);
      currentApp = openerWin.currentApp;
    }
  }
  else 
  {
    currentApp = app;
  }
  currentApp.mode = mode;
}