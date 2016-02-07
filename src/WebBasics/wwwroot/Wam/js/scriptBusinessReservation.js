var ColDef={}; 
var id;
var pageNo;

$(document).ready(function ()
{
  window.onerror = function (msg, url, line, col, error)
  {
    globalErrorHandler(msg, url, line, col, error);
  }; 
  $('#dvHeader').load('layout/_Header.html');
  $('#dvFooter').load('layout/_Footer.html');
   var url = window.location.href;
  if (url.indexOf("reservationServiceMode.html") !=  - 1)
  {
        visualRequestBuilder();
        hideResultTable();
   }
});
//---------------------------------------------------------------------------
function visualRequestBuilder()
{ 
  writeWecomeMsg();
  populateDropDown();
  initVisualRequest();   
  ajaxGetDataRecord('visitType/getAll',"visitType",'',GenerateVisitType, displayErrorMessage);  
  ajaxGetDataRecord('segment/getAll',"segment",'',GenerateSegment, displayErrorMessage);  
} 
//------------------------------------------------------------------------------------------------------------
function writeWecomeMsg(){
  var table=document.getElementById("tblUserName");
  var row = table.insertRow(0);
  var cell = row.insertCell(0);
  cell.innerHTML =  "<span style="+'"'+"font-weight: bold;font-size:30px"+'"'+">"+"Welcome:"+getUrlEncodedParam("login")+"</span>";  
}
//------------------------------------------------------------------------------------------------------------
function getUrlEncodedParam(name, url)
{
  if (!url)
  {
    url = window.location.href;
  }
  var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url);
  if (!results)
  {
    return undefined;
  }
  return window.atob(results[1]) || undefined;
}
//-------------------------------------------------------------------------------------------------------------
function GenerateVisitType(wsResponse)
{
  var recCount =   wsResponse.data.records.length;
     if (recCount != null)
     { 
          var table = document.getElementById("tblVisitType");  
         var row = table.insertRow(0); 
          for (var i = 0;i < wsResponse.data.records.length;i++)
          {
            var name = wsResponse.data.records[i].name.trim() ;                
            var id = wsResponse.data.records[i].id.trim() ; 
            var cell = row.insertCell(i);
            cell.innerHTML =  '<input type="radio" align="center"  name =visitType class = "buttonvisualrequest" value="'+ id +'"/>'+name;
            cell.className =  "buttonvisualrequest" ;
          }
      }
}
//------------------------------------------------------------------------------------------------------------
function GenerateSegment(wsResponse)
{   
     var recCount =   wsResponse.data.records.length;
     if (recCount != null)
     { 
          var table = document.getElementById("tblSegment");  
          var row = table.insertRow(0); 
          for (var i = 0;i < wsResponse.data.records.length;i++)
          {
            var name = wsResponse.data.records[i].name.trim() ;
            var id = wsResponse.data.records[i].id.trim() ;
            var cell = row.insertCell(i);
            cell.innerHTML =  '<input type="radio"  align="center"  name =segment class = "buttonvisualrequest" value="'+ id +'"/>' +name;
            cell.className =  "buttonvisualrequest" ;
          }
      }
}
//----------------------------------------------------------------------------------------------]
function populateDropDown()
{ 
   populateArea(); 
   populateBranch();
   populateService();
   populateSubService();
}
//-----------------------------------------------------------------------------------
function populateArea()
{
    var dropDownArea=document.getElementById("slctx_Area");
    clearDropDown(dropDownArea);
    $('#slctx_Area').append($('<option/>').val(0).text("Select Area"));
    ajaxDropDown("area","slctx_Area");     
}
//--------------------------------------------------------------------------------------
function populateBranch() {
    var dropDownArea=document.getElementById("slctx_Area");
    var dropDownBranch=document.getElementById("slctx_Branch");
    
    clearDropDown(dropDownBranch);
    $('#slctx_Branch').append($('<option/>').val(0).text("Select Branch"));
    ajaxDropDownByParentId("branch","slctx_Branch",dropDownArea.value);
}
//------------------------------------------------------------------------------------------------------------
function populateService()
{
    var dropDownService=document.getElementById("slctx_Service");
    clearDropDown(dropDownService);
    $('#slctx_Service').append($('<option/>').val(0).text("Select Service"));
    ajaxDropDown("service","slctx_Service");     
}
//------------------------------------------------------------------------------------------------------------
function populateSubService() {
    var dropDownService=document.getElementById("slctx_Service");
    var dropDownSubService=document.getElementById("slctx_SubService");
    
    clearDropDown(dropDownSubService);
    $('#slctx_SubService').append($('<option/>').val(0).text("Select SubService"));
    ajaxDropDownByParentId("subService","slctx_SubService",dropDownService.value);
}
//------------------------------------------------------------------------------------------------------------
function clearDropDown(selectbox)//Todo remove to scriptGlobal.js
{
    var i;
    for(i=selectbox.options.length-1;i>=0;i--)
    {
        selectbox.remove(i);
    }     
}
//---------------------------------------------------------------------------------------
function hideResultTable()
{
     var div = document.getElementById( "dvList" );
        if ( div.style.display !== "none" ) {
            div.style.display = "none";
        }
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function gtSearchResult()
{
     ajaxReservationList('ticketLayoutConfig' , resPaginatedList , displayErrorMessage,'basic',0);
  
     var div = document.getElementById( "dvList" );
        if ( div.style.display == "none" ) {
            div.style.display = "block";
        }
}
//--------------------------------------------------------------------------------------------
function resPaginatedList(wsResponse)
{
  //-------- pass functions "list records" and "display record" to setListTable ----
  //-------- set headers & define columns,  Fill table rows by records ------------- 
  
  var listTable = document.getElementById("tblList"); 

  
  setResListHeaders ( listTable ); 
  populateResList ( listTable , wsResponse ) ;         
  
  //---------------- set a click handle for each row ---------
  $("#tblList tr").click(function ()
  {
    //updateNavigator("Select");
    id=$(this).attr("recordid");
    alert(id) ;     
  });  
  //---------------------- set paginator ----------------------
    $('#dvPaginator1').load('layout/_Paginator.html', function ()
    {
      displayResPaginator(wsResponse, wsResponse.serviceInfo.serviceName,'basic' );
    });
}
//----------------------------------------------------------------------------------------------------
function displayResPaginator (wsResponse, serviceName, paginatorType)
{
  var funcOnSuccess = "resPaginatedList";
  var funcOnError = "displayErrorMessage";
  
  var ajaxCall = '' ;   // pageNumber is just a place holder that will be replaced using string functions

  ajaxCall = "ajaxReservationList('" + serviceName + "'," + funcOnSuccess+ "," + funcOnError +",'" + paginatorType + "', pageNumber)";
   
 
  pageNo = wsResponse.pagination.currentPage ; 
  
  //page index is zero based 
  var firstPage = 0 ;  
  var lastPage = parseInt(wsResponse.pagination.totalPageCount) - 1 ; 
  var previuosPage = parseInt(pageNo) - 1  ;
  var nextPage = parseInt(pageNo) + 1  ; 
  
  $("#bFirst").removeAttr('disabled');
  $("#bNext").removeAttr('disabled');
  $("#bPreviuos").removeAttr('disabled');
  $("#bLast").removeAttr('disabled');
  
  if (nextPage > lastPage)
  {
    $("#bNext").attr('disabled','disabled');
    $("#bLast").attr('disabled','disabled');
  }
  if (previuosPage < firstPage)
  {
    $("#bFirst").attr('disabled','disabled');
    $("#bPreviuos").attr('disabled','disabled');
  }

  $("#bFirst").attr('onclick', ajaxCall.replace("pageNumber", firstPage));
  $("#bPreviuos").attr('onclick', ajaxCall.replace("pageNumber", previuosPage ));
  $("#bNext").attr('onclick', ajaxCall.replace("pageNumber", nextPage ));
  $("#bLast").attr('onclick', ajaxCall.replace("pageNumber", lastPage )); 

}
//----------------------------------------------------------------------------------------------------
function setResListHeaders( listTable )
{
  //-------------------- clear table ----------------------
  while (listTable.rows.length)
  {
    listTable.deleteRow(0);
  }
  //-------------------- define headers -------------------
      ColDef = 
      {
        'listFields' : [
        {caption : 'Month' , dbName:'companyNameFont', width:100},
        {caption : 'Day' , dbName:'dateFont', width:100},
        {caption : 'Date' , dbName:'timeFont', width:100},
        {caption : 'From Time' , dbName:'serviceNameFont', width:100},
        {caption : 'To Time' , dbName:'ticketNumberFont', width:100}
        ]
      };

  var columnsDefinition = ColDef ;
  var colCount = columnsDefinition.listFields.length;
  var headerRow = listTable.insertRow(0);

  for (var i = 0;i < colCount;i++)
  {
    var headerCell = headerRow.insertCell(i);
    headerCell.innerHTML = columnsDefinition.listFields[i].caption;
    headerCell.width = columnsDefinition.listFields[i].width + "px";
  } 
}
//------------------------------------------------------------------------------------------------------------
function populateResList ( listTable , wsResponse )
{
  var columnsDefinition = ColDef ;
  var colCount = columnsDefinition.listFields.length;
  
  for (var i = 0;i < wsResponse.data.records.length ; i++)
  {  
    var obj = wsResponse.data.records[i] ;
    
    //------ create new row and add a record-id attribute -----
    
    var row = listTable.insertRow(i+1);
    row.setAttribute("recordid",  wsResponse.data.records[i].id);

    //-------------------- Fill cells with data ---------------  
    for (var j = 0; j < colCount; j++)
    {
      var cell = row.insertCell(j);
      
      var fieldName = columnsDefinition.listFields[j].dbName ;
      if (columnsDefinition.listFields[j].dbLookup !=null)
      {
        fieldName = columnsDefinition.listFields[j].dbLookup ;
      }
      cell.innerHTML = obj[fieldName] ;
    }
  }
}
//--------------------------------------------------------------------------------------------
function resGetRecordFromControls()
{
  var obj = {};
  var dropDownService=document.getElementById("slctx_Service");
  var dropDownSubService=document.getElementById("slctx_SubService");  
  obj["num"]=id;
  obj["customerAccountId"]=getUrlEncodedParam("id");
  obj["standSchId"]=1;
  obj["standSchEntryId"]=1;
  obj["serviceId"]=dropDownService.value;
  obj["subServiceId"]=dropDownSubService.value;
  obj["visitTypeId"]=gtVisitTypeValue();
  obj["segmnetId"]=gtSegmentValue();
  obj["docDate"]=1;
  obj["fromTime"]=1;
  obj["reservationOrder"]=1;
  obj["confirmEmailSentFlag"]=1;
  obj["confirmSmsSentFlag"]=1;
  obj["reminderEmailSentFlag"]=1;
  obj["reminderSmsSentFlag"]=1;
  obj["remarks"]=1;

  return obj;
}
//--------------------------------------------------------------------------------------------
function gtVisitTypeValue() {
//var dvVisitType = document.getElementById("dvVisitType");
var VisitType = document.getElementsByName("visitType");
var valVisitType = "";
var i;
for (i = 0; i < VisitType.length; i++) {
    if (VisitType[i].checked) {
        valVisitType = VisitType[i].value + " ";
    }
}
return valVisitType;
}
//--------------------------------------------------------------------------------------------
function gtSegmentValue() {
var Segment = document.getElementsByName("segment");
var valSegment = "";
var i;
for (i = 0; i < Segment.length; i++) {
    if (Segment[i].checked) {
        valSegment = Segment[i].value + " ";
    }
    
}
return valSegment;
}
//--------------------------------------------------------------------------------------------
function resInsertRecord()
{
  var obj = resGetRecordFromControls();
  var validOp = isValid('insert', 'reservation', obj)
  if (validOp)
  {
    ajaxPost('reservation/insert', obj, confirmMsg() , displayErrorMessage);   
  }
  return validOp;
}
//---------------------------------------------------------------------------------------------
function confirmMsg() {   
    alert('Confirmation Number:'+Math.floor((Math.random() * 1000000000)));
}
//---------------------------------------------------------------------------
 function checkUserInfo() {
    ajaxGetDataRecord('onlineCustmAccount/getAll',"onlineCustmAccount",'', userExist, displayErrorMessage);
}
//------------------------------------------------------------------------------------
function userExist(wsResponse) {
    var txtEmail = document.getElementById("txtEmail");
    var txtPassword = document.getElementById("txtPassword");
    var status;

    for (var i = 0;i < wsResponse.data.records.length;i++) {
        var id = wsResponse.data.records[i].id.trim();
        var name = wsResponse.data.records[i].name.trim();
        var password = wsResponse.data.records[i].password.trim();

        if ((txtEmail.value == name) && (txtPassword.value == password)) {
            status = true;
           var encodedEmail =  window.btoa(txtEmail.value); // encode a string            
           var encodedId = window.btoa(id); // encode a string  
            window.location.href='reservationServiceMode.html?login='+encodedEmail+'&id='+encodedId;
            break;
        }
        else{
            window.location.href="reservationSignInError.html";
        }
    }     
}
//---------------------------------------------------------------------------------------
//----------------------------------------------------------
function resSignUpInsertRecord()
{
  var obj = resSignUpGetRecordFromControls();
  var validOp = isValid('insert', 'onlineCustmAccount', obj)
  if (validOp)
  {
    ajaxPost('onlineCustmAccount/insert', obj, openResrvationPage, displayErrorMessage);   
  }
  return validOp;
}
//--------------------------------------------------------------------------------------------
function resSignUpGetRecordFromControls()
{
  var obj = {};
  var txt_name=document.getElementById("txt_name");
  var txt_tel=document.getElementById("txt_tel");  
  var txt_mobile=document.getElementById("txt_mobile");  
  var txt_email=document.getElementById("txt_email");  
  var txt_password=document.getElementById("txt_password");  

  obj["name"]=txt_name.value;
  obj["tel"]=txt_tel.value;
  obj["mobile"]=txt_mobile.value;
  obj["email"]=txt_email.value;
  obj["password"]=txt_password.value;

  return obj;
}
//--------------------------------------------------------------------------------------------
function openResrvationPage(wsResponse) {
 var encodedName =  window.btoa( wsResponse.data['name'].trim()); // encode a string  
 var encodedId =  window.btoa( wsResponse.data['id'].trim()); // encode a string 
  window.location.href='reservationServiceMode.html?login='+encodedName+'&id='+encodedId;
}