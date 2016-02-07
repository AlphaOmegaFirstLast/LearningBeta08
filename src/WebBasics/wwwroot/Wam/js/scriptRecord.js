
function getRecordById(app)
{
  if (app.dataRecord.id !=0)
  {
    ajaxAppGet(app, '/getById?id=' + app.dataRecord.id, '', displayRecord, displayErrorMessage);
  }
};
//------------------------------------------------------------------------------------------------------------
function getParentRecordById(parentApp)
{
  if (parentApp.dataRecord.id !=0)
  {
    ajaxAppGet(parentApp, '/getById?id=' + parentApp.dataRecord.id, '', displayParentRecord, displayErrorMessage);
  }
};
//------------------------------------------------------------------------------------------------------------
function insertRecord(app)
{
  var obj = getRecordFromControls();
  var validOp = isValid('insert', app.serviceName, obj)
  if (validOp)
  {
    ajaxAppPost(app, '/insert', obj, showRecordList , displayErrorMessage);   
  }
  return validOp;
}
//------------------------------------------------------------------------------------------------------------

function updateRecord(app)
{
  var obj = getRecordFromControls();
  var validOp = isValid('update', app.serviceName, obj)
  if (validOp)
  {
    ajaxAppPost(app, '/update', obj, showRecordList, displayErrorMessage);
  }
  return validOp;
}
//------------------------------------------------------------------------------------------------------------

function deleteRecord(app)
{
  var obj = getRecordFromControls();
  var validOp = isValid('delete', app.serviceName, obj)
  if (validOp)
  {
    var id = obj.id;
    ajaxAppGet(app, '/delete?id=' + id, '', showRecordList, displayErrorMessage);
  }
  return validOp;
}
//------------------------------------------------------------------------------------------------------------
function showRecordList(WsResponse, app)
{
  var methodName = 'list' ;
  if (WsResponse != null)
  {
    methodName = WsResponse.serviceInfo.methodName;
    try
    {app.recordId = WsResponse.data.id ;}
    catch (e) 
    {;}    
  }
  //------------------------------------
  displaySuccessfulOperation(methodName);
  //------------------------------------    
  
  if (app.paginatorType=='basic')
  {
    if (app.navigatorType == 'details' || app.navigatorType == 'master_details' )
    {
       ajaxAppDetailsList(app , paginatedList , displayErrorMessage);
    }
    else 
    {
       ajaxAppList(app , paginatedList , displayErrorMessage);
    }
  }
}
function displayRecord(wsResponse,app)
{
  clearControls();
  var obj = wsResponse.data;
  for (var property in obj)
  {
    if (obj.hasOwnProperty(property) && property.indexOf("@") != 0)
    {
      $('#'+ prefixForText + property).val(obj[property]);   //thank God
      $('#'+ prefixForSelect + property).val(obj[property]);
      
      if(obj[property]==1)
      {
      $('#'+ prefixForCheckbox + property).prop("checked", true);
      }
      else
      {
      $('#'+ prefixForCheckbox + property).prop("checked", false);
      }
      
      
    }
  }
}
//------------------------------------------------------------------------------------------------------------
function displayParentRecord(wsResponse,app)
{
  var obj = wsResponse.data;
  for (var property in obj)
  {
    if (obj.hasOwnProperty(property) && property.indexOf("@") != 0)
    {
      $('#parent'+ prefixForText + property).val(obj[property]);   
      $('#parent'+ prefixForSelect + property).val(obj[property]);  
      
      if(obj[property]==1)
      {
      $('#parent'+ prefixForCheckbox + property).prop("checked", true);
      }
      else
      {
      $('#parent'+ prefixForCheckbox + property).prop("checked", false);
      }
    }
  }
    enableControls();  //to disable parent fields
}
//------------------------------------------------------------------------------------------------------------

function getRecordFromControls()
{
  var obj = {};
  obj.id = currentApp.dataRecord.id ;
  
  if (currentApp.parentApp !=null)
  {  
    obj.parentId =  currentApp.parentApp.dataRecord.id ;
  }
  
  var txtControls = $( "[id^='" + prefixForText + "']" ) ; //jquery selector: select all elements that the id attribute starts with _txt_ 
  $.each(txtControls,function(i,txtControl)                //jquery iterate through dom elements  >> loop for each object and pass loop index i
  {
    var dbName = txtControl.id.replace ( prefixForText,'') ;  //thank God
    obj[dbName] = txtControl.value;
  }
  );
  var selectControls = $( "[id^='" + prefixForSelect + "']" ) ; //jquery selector: select all elements that the id attribute starts with _select_  
  $.each(selectControls,function(i,selectControl)               //jquery iterate through dom elements  >> loop for each object and pass loop index i
  {
    var dbName = selectControl.id.replace ( prefixForSelect,'') ;  //thank God
    obj[dbName] = selectControl.value;
  }
  );
  
  
  var checkControls = $( "[id^='" + prefixForCheckbox + "']" ) ; //jquery selector: select all elements that the id attribute starts with _select_  
  $.each(checkControls,function(i,checkControl)               //jquery iterate through dom elements  >> loop for each object and pass loop index i
  {
    var dbName = checkControl.id.replace ( prefixForCheckbox,'') ;  //thank God
    if(checkControl.checked == true)
    {
    obj[dbName] = 1;
    }
    else
    {
    obj[dbName] = 0;
    }
  }
  );
  
  

  return obj;
}
//------------------------------------------------------------------------------------------------------------
