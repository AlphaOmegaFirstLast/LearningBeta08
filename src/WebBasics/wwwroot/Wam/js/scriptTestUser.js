//----------------- document onReady --------------------
$(document).ready(function ()
{
  $('#dvHeader').load('layoutprototype/_Header.html');
  $('#dvMainMenu').load('layoutprototype/_MainMenu.html');
  $('#dvFooter').load('layoutprototype/_Footer.html');

  runMenuItem();
});
//-------------------------------------------------------
function runMenuItem(itemSelected)
{
  initVars();
  var menuItem = itemSelected;
  if (itemSelected == null)
  {
    menuItem = getUrlParam('menu');
  }
  switch (menuItem)
  {
    case 'addUser':
      menuAddUser();
      break;
    case 'editUser':
      menuEditUser();
      break;
    case 'deleteUser':
      menuDeleteUser();
      break;
    case 'displayUser':
      menuDisplayUser();
      break;
    case 'listUser':
      menuListUser();
      break;
    case 'reportUserAll':
      menuReportUserAll();
      break;
    case 'reportUserByIdRange':
      menuReportUserByIdRange();
      break;
    case 'reportUserFilteredByCountry':
      menuReportUserFilteredByCountry();
      break;
    case 'reportUserGroupedByCountry':
      menuReportUserGroupedByCountry();
      break;
    case 'reportUserGenerator':
      menuReportUserGenerator();
      break;

    case 'printUserAll':
      menuPrintUserAll();
      break;
    case 'printUserByIdRange':
      menuPrintUserByIdRange();
      break;
    case 'printUserFilteredByCountry':
      menuPrintUserFilteredByCountry();
      break;
    case 'printUserGroupedByCountry':
      menuPrintUserGroupedByCountry();
      break;

    case 'printUserGenerator':
      menuPrintUserGenerator();
      break;

    case 'displayCategory':
      menuDisplayCategory();
      break;
    case 'listCategory':
      menuListCategory();
      break;

    default :
      break;
  }

}
//----------------------------------- Menu functions -------------------------------------
function menuAddUser()
{
  $('#dvTitle').text('Add User');
  $('#dvContent').load('user/_insert.html');
}

function menuEditUser()
{
  $('#dvTitle').text('Edit User');
  $('#dvContent').load('user/_edit.html');
  ajaxGet('user/getAll', '', populateSelectUser, displayErrorMessage);
}

function menuDeleteUser()
{
  $('#dvTitle').text('Delete User');
  $('#dvContent').load('user/_delete.html');
  ajaxGet('user/getAll', '', populateSelectUser, displayErrorMessage);
}

function menuDisplayUser()
{
  $('#dvTitle').text('Display User');
  $('#dvContent').load('user/_display.html');
  var id = getUrlParam('id');
  if (id == null)
  {
    id = 8;//for demo purposes
  }
  ajaxGet('user/getById?id=' + id, '', displayUser, displayErrorMessage);
}

function menuListUser()
{
  $('#dvTitle').text('List Users');
  $('#dvContent').load('user/_list.html');
  ajaxGet('user/getPaginatedList?page=0&count=' + recordsPerPage, '', paginatedListUsers, displayErrorMessage);
}

function menuReportUserAll()
{
  $('#dvTitle').text('Report: All Users');
  $('#dvContent').load('user/_reportAll.html');
}

function menuReportUserByIdRange()
{
  $('#dvTitle').text('Report: Users by Id range');
  $('#dvContent').load('user/_reportByIdRange.html');
}

function menuReportUserFilteredByCountry()
{
  $('#dvTitle').text('Report: Users filtered by country');
  $('#dvContent').load('user/_reportFilteredByCountry.html');
}

function menuReportUserGroupedByCountry()
{
  $('#dvTitle').text('Report: Users grouped by country');
  $('#dvContent').load('user/_reportGroupedByCountry.html');
}
//---------------------------------------------------------------------------------------------------------
function menuPrintUserGenerator()
{
//  alert(window.name); // pass criteria as a string to the new window in window name
  
  $('#dvPrintHeader').load('layoutprototype/_printerHeader.html');
  $('#dvPrintContent').load('user/_list.html');

  var reportTitle = "User Reports";
  $('#dvPrintTitle').html(reportTitle);

  var reportCriteria = window.name;
  ajaxReport('user', reportCriteria, printReportGenerator, displayErrorMessage);
}
//---------------------------------------------------------------------------------------------------------
function menuReportUserGenerator()
{
  $('#dvContent').load('user/_reportGenerator.html', function ()
  {
    registerEventsCriteriaGenerator();
  });
  $('#dvTitle').text('User Report Generator');
}
//---------------------------------------------------------------------------------------------------------
function menuPrintUserAll()
{
  $('#dvPrintHeader').load('layoutprototype/_printerHeader.html');
  $('#dvPrintContent').load('user/_list.html');
  $('#dvPrintTitle').text('All Users');
  ajaxGet('user/getAll', '', printUserAll, displayErrorMessage);
}

function menuPrintUserByIdRange()
{
  var fromId = getUrlParam('fromId');
  var toId = getUrlParam('toId');

  $('#dvPrintHeader').load('layoutprototype/_printerHeader.html');
  $('#dvPrintContent').load('user/_list.html');
  $('#dvPrintTitle').html('Users By Id Range <br/> From ' + fromId + " To " + toId);
  ajaxGet('user/getByIdRange?fromId=' + fromId + "&toId=" + toId, '', printUserAll, displayErrorMessage);
}

function menuPrintUserFilteredByCountry()
{
  var country = getUrlParam('country');
  $('#dvPrintHeader').load('layoutprototype/_printerHeader.html');
  $('#dvPrintContent').load('user/_list.html');
  $('#dvPrintTitle').html('Users Filtered By Country <br/>' + country.toUpperCase());
  ajaxGet('user/getByCountry?country=' + country, '', printUserAll, displayErrorMessage);
}

function menuPrintUserGroupedByCountry()
{
  $('#dvPrintHeader').load('layoutprototype/_printerHeader.html');
  $('#dvPrintContent').load('user/_list.html');
  $('#dvPrintTitle').text('Users Grouped By Country');
  ajaxGet('user/getOrderedByCountry', '', printUserGroupedByCountry, displayErrorMessage);
}

//function menuPrintUserGenerator()
//{
//  alert(window.name);
//  
//  $('#dvPrintHeader').load('layoutprototype/_printerHeader.html');
//  $('#dvPrintContent').load('user/_list.html');
//
//  var reportTitle = "User Reports";
//  $('#dvPrintTitle').html(reportTitle);
//
//  var reportCriteria = window.name;
//  ajaxReport('user', reportCriteria, printReportGenerator, displayErrorMessage,false);
//}

//------------------------------------ Event Handlers ------------------------------------
function onSelectUserChange()
{
  var id = $("#selectUser").val();
  ajaxGet('user/getById?id=' + id, '', displayUser, displayErrorMessage);
};
//-------------------------- Ajax Update, Delete Functions ------------------- 
function onDeleteUser()
{
  var id = $("#selectUser").val();
  ajaxGet('user/delete?id=' + id, '', displaySuccessfulDelete, displayErrorMessage);
}

function onInsertUser()
{
  var user = getUserFromUI();
  if (validateUser(user))
  {
    ajaxPost('user/insert', user, displaySuccessfulInsert, displayErrorMessage);
  }
}
function onUpdateUser()
{
  var user = getUserFromUI();
  if (validateUser(user))
  {
    ajaxPost('user/update', user, displaySuccessfulUpdate, displayErrorMessage);
  }
}

function validateUser(user)
{
  var validationOk = true;
  if (validationOk==false)
  {
    displayValidationError();
  }
  return validationOk;
}
function getUserFromUI()
{
  var userId = $("#selectUser").val();
  var userName = $("#txtName").val();
  var userCountry = $("#txtCountry").val();
  var user = 
  {
    id : userId, name : userName, country : userCountry
  };
  return user;
}
//-------------------------- Print, Preview  Functions ------------------- 
function onPreviewUserAll()
{
  window.open('print.html?menu=printUserAll', '', 'width = 800, height = 500, scrollbars=yes');
}

function onPreviewUserByIdRange()
{
  var fromId = $("#txtFromId").val();
  var toId = $("#txtToId").val();
  window.open('print.html?menu=printUserByIdRange&fromId=' + fromId + '&toId=' + toId, '', 'width = 800, height = 500, scrollbars=yes');
}

function onPreviewUserFilteredByCountry()
{
  var country = $("#selectCountry").val();
  window.open('print.html?menu=printUserFilteredByCountry&country=' + country, '', 'width = 800, height = 500, scrollbars=yes');
}

function onPreviewUserGroupedByCountry()
{
  window.open('print.html?menu=printUserGroupedByCountry', '', 'width = 800, height = 500, scrollbars=yes');
}

//---------------------------- Print Functions ----------------------
//---------------------------------------------------------------------------------------------------------
function onPreviewUserGenerator()
{
  var reportCriteria = getReportCriteria();
  reportCriteria.title = "Report Generator test";
  var jsonReportCriteria = JSON.stringify(reportCriteria);  // pass criteria as a string to the new window in window name
  window.open('print.html?menu=printUserGenerator', jsonReportCriteria, 'width = 800, height = 500, scrollbars=yes');
}
function printUserAll(wsResponse)
{
  listUsers(wsResponse, false);
  $('#dvPrintFooter').text('Total number of records = ' + wsResponse.data.user.length);
}
//-------------------------------------------------------------------
function printUserGroupedByCountry(wsResponse)
{
  var table = document.getElementById("tblList");

  //-------------------- clear table ----------------------
  while (table.rows.length)
  {
    table.deleteRow(0);
  }

  //-------------- set headers & define columns -----------
  var headerRow = table.insertRow(0);
  var headerCell0 = headerRow.insertCell(0);
  headerCell0.innerHTML = "Id";
  var headerCell1 = headerRow.insertCell(1);
  headerCell1.innerHTML = "Name";

  //--------------------- display data ---------------------
  var exCountry = "";
  var rowCount = 1;
  var groupCount = 0;
  var recCount = wsResponse.data.user.length;
  if (recCount != null)
  {

    //------ loop records if data is more than 1 record ----
    for (var i = 0;i < recCount;i++)
    {
      var id = wsResponse.data.user[i].id;
      var name = wsResponse.data.user[i].name;
      var country = wsResponse.data.user[i].country;
      country = country.toUpperCase();
      //--------------------------------------------------
      if (country != exCountry)
      {
        var groupRow = table.insertRow(rowCount + groupCount + i);
        var groupCell = groupRow.insertCell(0);
        groupCell.colSpan = 2;
        groupCell.className = "groupHeader";
        groupCell.innerHTML = country;
        exCountry = country;
        groupCount++;
      }
      //------- loop table columns and display fields -----
      var row = table.insertRow(rowCount + groupCount + i);
      var colCount = table.rows[0].cells.length;

      for (var j = 0;j < colCount;j++)
      {
        var newcell = row.insertCell(j);
        switch (j)
        {
          case 0:
            newcell.innerHTML = id;
            break;
          case 1:
            newcell.innerHTML = name;
            break;
          default :
            break;
        }

      }
    }
  }
  else 
  {
    var id = wsResponse.data.user.id;
    var name = wsResponse.data.user.name;
    var country = wsResponse.data.user.country;

    var row = table.insertRow(1);
    var colCount = table.rows[0].cells.length;
    for (var j = 0;j < colCount;j++)
    {
      var newcell = row.insertCell(j);
      switch (j)
      {
        case 0:
          newcell.innerHTML = id;
          break;
        case 1:
          newcell.innerHTML = name;
          break;

        default :
          break;
      }
    }
  }

}
//---------------------------- List Functions ----------------------
function displayUser(wsResponse)
{
  var id = wsResponse.data.id;
  var name = wsResponse.data.name;
  var country = wsResponse.data.country;
  var txtName = document.getElementById("txtName");
  var txtCountry = document.getElementById("txtCountry");
  txtName.value = name;
  txtCountry.value = country;
}
/*--------------------------------*/
function paginatedListUsers(wsResponse)
{
  listUsers(wsResponse, true);

  var wsMethod = "user/getPaginatedList?count=3&page=";//put page the last paramter as it will be assigned a value in func displayPaginator
  var wsParam = "''";//empty param
  var funcOnSuccess = "listUsers";
  var funcOnError = "displayErrorMessage";

  displayPaginatorUser(wsResponse, wsMethod, wsParam, funcOnSuccess, funcOnError);
}
/*--------------------------------*/
function populateSelectUser(wsResponse)
{
  var recCount = wsResponse.data.user.length;
  if (recCount != null)
  {
    for (var i = 0;i < recCount;i++)
    {
      var id = wsResponse.data.user[i].id;
      var name = wsResponse.data.user[i].name;
      var country = wsResponse.data.user[i].country;
      $("#selectUser").append(new Option(name, id));
    }
  }
}
/*--------------------------------*/
function listUsers(wsResponse, onScreen)
{
  var table = document.getElementById("tblList");
  while (table.rows.length)
  {
    table.deleteRow(0);
  }
  var headerRow = table.insertRow(0);
  var headerCell0 = headerRow.insertCell(0);
  headerCell0.innerHTML = "Id";
  var headerCell1 = headerRow.insertCell(1);
  headerCell1.innerHTML = "Name";
  var headerCell2 = headerRow.insertCell(2);
  headerCell2.innerHTML = "Country";
  if (onScreen)
  {
    var headerCell3 = headerRow.insertCell(3);
    headerCell3.innerHTML = "Edit";
    var headerCell4 = headerRow.insertCell(4);
    headerCell4.innerHTML = "Delete";
  }
  var rowCount = 1;

  var recCount = wsResponse.data.user.length;
  if (recCount != null)
  {
    for (var i = 0;i < recCount;i++)
    {
      var id = wsResponse.data.user[i].id;
      var name = wsResponse.data.user[i].name;
      var country = wsResponse.data.user[i].country;

      var row = table.insertRow(rowCount + i);
      var colCount = table.rows[0].cells.length;
      for (var j = 0;j < colCount;j++)
      {
        var newcell = row.insertCell(j);
        switch (j)
        {
          case 0:
            newcell.innerHTML = id;
            break;
          case 1:
            newcell.innerHTML = name;
            break;
          case 2:
            newcell.innerHTML = country;
            break;
          case 3:
            newcell.innerHTML = "<a href='main.html?menu=displayUser&id=" + id + "'>edit</a>";
            break;
          case 4:
            newcell.innerHTML = "<a href='main.html?menu=deleteUser&id=" + id + "'>delete</a>";
            break;
          default :
            break;
        }

      }
    }
  }
  else 
  {
    var id = wsResponse.data.user.id;
    var name = wsResponse.data.user.name;
    var country = wsResponse.data.user.country;

    var row = table.insertRow(1);
    var colCount = table.rows[0].cells.length;
    for (var j = 0;j < colCount;j++)
    {
      var newcell = row.insertCell(j);
      switch (j)
      {
        case 0:
          newcell.innerHTML = id;
          break;
        case 1:
          newcell.innerHTML = name;
          break;
        case 2:
          newcell.innerHTML = country;
          break;
        default :
          break;
      }
    }
  }

}