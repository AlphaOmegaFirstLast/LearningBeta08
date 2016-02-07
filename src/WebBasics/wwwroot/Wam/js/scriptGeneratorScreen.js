//------------------------------------------------------------------------------------------------------------
function ScreenGenerator(app)
{
  currentApp = app;

  //------------------------- Title ----------------------------
  $('#dvMessage').text(app.title);

  //------------------------- Navigator ------------------------
  $('#dvNavigator').show();
  $('#dvNavigator').load('layout/_Navigator.html', function ()
  {
    displayNavigator(app);
  });

  //------------------------- Content ------------------------
  var doCreateControls = false;
  if (app.htmlPage == null || app.htmlPage.indexOf("_screenGenerator.html")!= -1)// if there is no static html then create one dynamically
  {
    app.htmlPage = 'layout/_screenGenerator.html';
    doCreateControls = true;
  }
  $('#dvCriteria').hide();
  $('#dvList').show();
  $('#dvControls').show();
  $('#dvControls').load(app.htmlPage, function ()
  {
    //----------- Dynamic Screens: create controls for record fields ----------
    if (doCreateControls)
    {
      createEditControls(app.fieldsDefinition, app.controlsPerColumn);
    }
    //----------- Fill drop down controls with data ----------
    populateDropDownControls(app.fieldsDefinition);

    //----------- Display record data in edit controls  ------------------------
    if (app.dataRecord.id != 0)
    {
      getRecordById(app);
    }
    //----------- Display parent record data if found  ------------------------
    if (app.parentApp != null && app.parentApp.dataRecord.id != 0)
    {
      getParentRecordById(app.parentApp);
    }
    //---------------- create list of columns and populate list ----

    $('#dvList').load("layout/_paginatedList.html", function ()
    {
      showRecordList(null, app);
    });
    
  });
}
//------------------------------------------------------------------------------------------------------------
function paginatedList(wsResponse, app )  //todo not required param
{
  //-------- pass functions "list records" and "display record" to setListTable ----
  //-------- set headers & define columns,  Fill table rows by records ------------- 
  var tbl = document.getElementById("tblList");
  setListHeaders(tbl);
  
  if (wsResponse !=null)
  {
    populateList(tbl, wsResponse);
  
    //---------------- set a click handle for each row ---------
    attachTableRowClickHandle("tblList");

    //---------------------- set paginator ----------------------
    if (app.paginatorType == "basic")
    {
      $('#dvPaginator').load('layout/_Paginator.html', function ()
      {
        displayPaginator(wsResponse, app);
      });
    }
  }
}
//------------------------------------------------------------------------------------------------------------
function populateDropDownControls(fieldsDefinition)
{
  var editFields = fieldsDefinition.editFields;
  var selectControls = $("[id^='" + prefixForSelect + "']");//jquery selector: select all elements that the id attribute starts with _select_  
  $.each(selectControls, function (i, selectControl)//jquery iterate through dom elements  >> loop for each object and pass loop index i
  {
    var dbName = selectControl.id.replace(prefixForSelect, '');
    for (var i = 0;i < editFields.length;i++)
    {
      if (editFields[i].dbName == dbName)
      {
        ajaxDropDown(editFields[i].lookupService, selectControl.id);
      }
    }
  });
}
//------------------------------------------------------------------------------------------------------------
function setListHeaders(listTable)
{
  //-------------------- clear table ----------------------
  while (listTable.rows.length)
  {
    listTable.deleteRow(0);
  }
  //-------------------- define headers -------------------
  var reportFields = currentApp.reportFields;
  var colCount = reportFields.displayFields.length;
  var headerRow = listTable.insertRow(0);

  for (var i = 0;i < colCount;i++)
  {
    var headerCell = headerRow.insertCell(i);
    headerCell.innerHTML = getCaption(reportFields.displayFields[i].caption);
    headerCell.width = reportFields.displayFields[i].width + "px";
  }
}
//------------------------------------------------------------------------------------------------------------
function populateList(listTable, wsResponse)
{
  var reportFields = currentApp.reportFields;
  var colCount = reportFields.displayFields.length;

  for (var i = 0;i < wsResponse.data.records.length;i++)
  {
    var obj = wsResponse.data.records[i];

    //------ create new row and add a record-id attribute -----
    var row = listTable.insertRow(i + 1);
    row.setAttribute("recordid", wsResponse.data.records[i].id);

    //-------------------- Fill cells with data ---------------  
    for (var j = 0;j < colCount;j++)
    {
      var cell = row.insertCell(j);

      var fieldName = reportFields.displayFields[j].dbName;
      if (reportFields.displayFields[j].dbLookup != null)
      {
        fieldName = reportFields.displayFields[j].dbLookup;
      }
      cell.innerHTML = obj[fieldName];
    }
  }
}
//------------------------------------------------------------------------------------------------------------
function createEditControls(fieldsDefinition, controlsPerColumn)
{
  var rowCount = fieldsDefinition.editFields.length;
  var array1 = [];
  var array2 = [];
  var array3 = [];
  var array4 = [];
  var array5 = [];

  var j = 0;
  for (var i = 0;i < rowCount;i++)
  {
    if (i >= 0 && i < controlsPerColumn)
    {
      array1.push(fieldsDefinition.editFields[i]);

    }
    if (i >= controlsPerColumn && i < 2 * controlsPerColumn)
    {
      array2.push(fieldsDefinition.editFields[i]);
    }
    if (i >= 2 * controlsPerColumn && i < 3 * controlsPerColumn)
    {
      array3.push(fieldsDefinition.editFields[i]);
    }
    if (i >= 3 * controlsPerColumn && i < 4 * controlsPerColumn)
    {
      array4.push(fieldsDefinition.editFields[i]);
    }
    if (i >= 4 * controlsPerColumn && i < 5 * controlsPerColumn)
    {
      array5.push(fieldsDefinition.editFields[i]);
    }
  }

  setEditControls(array1, "tblFields1");
  setEditControls(array2, "tblFields2");
  setEditControls(array3, "tblFields3");
  setEditControls(array4, "tblFields4");
  setEditControls(array5, "tblFields5");
}
//------------------------------------------------------------------------------------------------------------
function setEditControls(editFields, tblName)
{
  var table = document.getElementById(tblName);

  var rowCount = editFields.length;

  for (var i = 0;i < rowCount;i++)
  {
    var row = table.insertRow(i);
    var firstCell = row.insertCell(0);
    var secondCell = row.insertCell(1);
    var thirdCell = row.insertCell(2);
    //-------------------- Arabaization ---------------------
    if (systemLanguage == "RightToLeft") 
    {
        // ------- swap cells -----------------------------
        var tempCell  = firstCell;
            firstCell = thirdCell;
            thirdCell = tempCell;
    }
    // ------- pick captions in the right language ------
    var controlCaption = getCaption(editFields[i].caption) ;
    //-------------------------------------------------------
    //" required placeholder="Enter a valid email address"
    var prefixParent = '';
    if (editFields[i].parentField == 'true')
    {
      prefixParent = 'parent';
    }
    //--------------------------
    switch (editFields[i].type)
    {
      case 'text':
        firstCell.innerHTML = controlCaption;
        secondCell.innerHTML = '<input' + languageAttributes + 'type="' + editFields[i].type + '" id="' + prefixParent + prefixForText + editFields[i].dbName + '" required />';
        break;

      case 'number':
      case 'email':
      case 'url':
        firstCell.innerHTML = controlCaption;
        secondCell.innerHTML = '<input' + languageAttributes + 'type="' + editFields[i].type + '" id="' + prefixParent + prefixForText + editFields[i].dbName + '"/>';
        break;

      case 'select':
        firstCell.innerHTML = controlCaption;
        secondCell.innerHTML = '<select' + languageAttributes + 'id="' + prefixParent + prefixForSelect + editFields[i].dbName + '"/>';
        break;

      case 'radio':
        firstCell.innerHTML = '<input' + languageAttributes + 'type="' + editFields[i].type + '" id="' + prefixParent + prefixForRadio + editFields[i].dbName + '"/>';
        firstCell.style.textAlign = "right";
        secondCell.innerHTML = controlCaption;
        break;
      case 'checkbox':
        firstCell.innerHTML = '<input' + languageAttributes + 'type="' + editFields[i].type + '" id="' + prefixParent + prefixForCheckbox + editFields[i].dbName + '"/>';
        firstCell.style.textAlign = "right";
        secondCell.innerHTML = controlCaption;
        break;
      case 'button':
        secondCell.innerHTML = '<input' + languageAttributes + 'type="' + editFields[i].type + '" id="' + prefixParent + prefixForButton + editFields[i].dbName + '" value="' + controlCaption + '"/>';
        break;
      case 'none':
        secondCell.innerHTML = controlCaption;
        break;
      default :
        break;
    }

    switch (editFields[i].additional)
    {
      case 'text':
        thirdCell.innerHTML = '<input' + languageAttributes + 'type="text" id="' + prefixParent + prefixForText + editFields[i].dbName + '"/>';
        break;
      case 'select':
        thirdCell.innerHTML = '<select' + languageAttributes + 'id="' + prefixParent + prefixForSelect + editFields[i].dbName + '"/>';
        break;
      case 'radio':
        thirdCell.innerHTML = '<input type="radio"/>';
        break;
      case 'checkbox':
        thirdCell.innerHTML = '<input type="checkbox"/>';
        break;
      case 'button':
        thirdCell.innerHTML = '<input type="button"/>';
        break;
      case 'next':
      //  firstCell.innerHTML = ;
      //  secondCell.innerHTML = controlCaption;
        thirdCell.innerHTML = '<input' + languageAttributes + 'type="button" value="<"/>' + controlCaption + '<input type="button" value=">"/>';
        break;

      default :
        break;
    }

  }
}
//------------------------------------------------------------------------------------------------------------
function  getCaption(caption) 
{
   if (caption.trim() == '')
   {
    caption = '</br>';
   }

   var CaptionInRightLanguage = caption ;
   if (arrLanguage[caption]!= null && arrLanguage[caption] != 'undefined')
   {
       CaptionInRightLanguage = arrLanguage[caption] ;
   }
   
  return  CaptionInRightLanguage ;
}
//------------------------------------------------------------------------------------------------------------
function loadImage(image)
{
  $('#dvControls').load('demo/_loadImage.html', function ()
  {
    $('#imgScreen').attr("src", "resources/images/" + image);
  });
}
//------------------------------------------------------------------------------------------------------------