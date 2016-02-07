//---------------------------------------------------------------------------------------------------------
function CriteriaGenerator(app)
{ 
  var reportFields       = app.reportFields ; 
  var CriteriaPanelWidth = app.criteriaPanelWidth ;
  if (app.mode == "report")
  {
    $("#tblSearchButtons").hide() ;
  }
  if (app.mode == "search")
  {
    $("#tblReportButtons").hide() ;
    $("#tdGroupByFields").hide() ;
  }
  if (CriteriaPanelWidth!=null)
  {
    var td1 = document.getElementById('tdDisplayFields');
    td1.style.width = CriteriaPanelWidth.displayFields + "px" ;
    var td2 = document.getElementById('tdValueFilterFields');
    td2.style.width = CriteriaPanelWidth.valueFiltersFields + "px" ;
    var td3 = document.getElementById('tdRangeFilterFields');
    td3.style.width = CriteriaPanelWidth.rangeFiltersFields + "px" ;
    var td4 = document.getElementById('tdGroupByFields');
    td4.style.width = CriteriaPanelWidth.groupByFields + "px" ;
    var td5 = document.getElementById('tdOrderByFields');
    td5.style.width = CriteriaPanelWidth.orderByFields + "px" ;
  }
  tblName = "tblDisplayFields"  ;
  var displayCount = reportFields.displayFields.length;
  for (var i = 0; i < displayCount ; i++)
  {
    var row = createCriteriaRow (tblName, i+1 , 2);

    row.cells[0].innerHTML = createCriteriaElement(reportFields.displayFields[i] , "checkbox", "ckDisplay","ckDisplay");
    row.cells[1].innerHTML = reportFields.displayFields[i].caption;
  }
  //---------------------------------------------------------
  tblName = "tblValueFilterFields" ;
  var valueFiltersCount = reportFields.valueFiltersFields.length;
  for (var i = 0; i < valueFiltersCount ; i++)
  {
    var row = createCriteriaRow ( tblName, i+1 , 3);
   
    row.cells[0].innerHTML = createCriteriaElement(reportFields.valueFiltersFields[i] , "checkbox", "ckFilterValue","ckFilter");
    row.cells[1].innerHTML = reportFields.valueFiltersFields[i].caption;
    
    var fieldName =  reportFields.valueFiltersFields[i].dbName ;
    switch (reportFields.valueFiltersFields[i].type)
    {
       case 'select':
          row.cells[2].innerHTML  = '<select  disabled="disabled"  id="select' + fieldName + '"/>';  
          break;
       case 'text':
          row.cells[2].innerHTML  = '<input  disabled="disabled"  type="text" id="txtFilter' + fieldName + '"/>';  
          break;
       default:
          break;
    }
  }
  //---------------------------------------------------------
  tblName = "tblRangeFilterFields";
  var rangeFiltersCount = reportFields.rangeFiltersFields.length;
  var j = 0;
  for (var i = 0; i < rangeFiltersCount ; i++)
  {
    var fieldName = reportFields.rangeFiltersFields[i].dbName;

    j ++
    var row = createCriteriaRow ( tblName, j , 2);
    row.cells[0].innerHTML = createCriteriaElement(reportFields.rangeFiltersFields[i] , "checkbox", "ckFilterRange","ckRange");
    row.cells[1].innerHTML = "From " + reportFields.rangeFiltersFields[i].caption;
 
    j ++
    row = createCriteriaRow ( tblName, j , 2);
    row.cells[1].innerHTML  = '<input type="text" disabled="disabled" id="txtRangeFrom' + fieldName + '"/>';  
 
    j ++
    row = createCriteriaRow ( tblName, j , 2);
    row.cells[1].innerHTML = "To " + reportFields.rangeFiltersFields[i].caption;

    j ++
    row = createCriteriaRow ( tblName, j , 2);
    row.cells[1].innerHTML  = '<input type="text"  disabled="disabled"  id="txtRangeTo' + fieldName + '"/>';  
  }  
  
  //--------- group by set to default -------------
  tblName = "tblGroupByFields";
  var row = createCriteriaRow (tblName , 1 , 2);

  row.cells[0].innerHTML = '<input type="radio"  name="rdGroup" class="rdGroupBy" id="rdGrpdefault" value="default" checked="checked" />';
  row.cells[1].innerHTML = "No grouping";
  //------------------------------------------------
  var groupByCount = reportFields.groupByFields.length;
  for (var i = 0; i < groupByCount ; i++)
  {
    var row = createCriteriaRow (tblName, i+2 , 2);

    var fieldName =  reportFields.groupByFields[i].dbName ;
    row.cells[0].innerHTML = createCriteriaElement(reportFields.groupByFields[i] , "radio", "rdGroupBy","rdGrp" , "rdGroup" , fieldName);
    row.cells[1].innerHTML = reportFields.groupByFields[i].caption;   
  }
  //--------- Summary Options -------------
  tblName = "tblSummaryTypes";
  var row = createCriteriaRow (tblName , 1 , 2);

  row.cells[0].innerHTML = '<input type="radio"  name="rdSummaryType" class="rdSummary" id="rdSummarydefault" value="default" checked="checked" />';
  row.cells[1].innerHTML = "No Summary";
  
  row = createCriteriaRow (tblName , 2 , 2);
  row.cells[0].innerHTML = '<input type="radio"  name="rdSummaryType" class="rdSummary" id="rdSummaryFooterPerGroup" value="FooterPerGroup"  />';
  row.cells[1].innerHTML = "Footer per group";
 
  row = createCriteriaRow (tblName , 3 , 2);
  row.cells[0].innerHTML = '<input type="radio"  name="rdSummaryType" class="rdSummary" id="rdSummaryLinePerGroup" value="LinePerGroup"  />';
  row.cells[1].innerHTML = "Line per group";
 
  //--------- order by set to default -------------
  tblName = "tblOrderByFields" ;
  var row = createCriteriaRow ( tblName, 1 , 2);
  
  row.cells[0].innerHTML = '<input type="radio"  name="rdOrder" class="rdOrderBy" value="default" checked="checked" />';
  row.cells[1].innerHTML = "Default";
  //------------------------------------------------
  var orderByCount = reportFields.orderByFields.length;
  for (var i = 0; i < orderByCount ; i++)
  {
    var row = createCriteriaRow (tblName , i+2 , 2);

    var fieldName =  reportFields.orderByFields[i].dbName ;
    row.cells[0].innerHTML = createCriteriaElement(reportFields.orderByFields[i] , "radio", "rdOrderBy", "rdOrder" , "rdOrder" , fieldName);
    row.cells[1].innerHTML = reportFields.orderByFields[i].caption;    
  }
}
//---------------------------------------------------------------------------------------------------------
function registerEventsCriteriaGenerator()
{
  $(".rdSummary").attr("disabled", "disabled");

  $(".ckFilterRange").click(function ()
  {
    var selectedFilterRange = $(this).prop("id");
    var fieldName = selectedFilterRange.replace('ckRange', '') ;
    
    if ($(this).prop("checked")=='1')
    {
      $('#txtRangeFrom' + fieldName).removeAttr("disabled");
      $('#txtRangeTo' + fieldName).removeAttr("disabled");
    }
    else
    {
      $('#txtRangeFrom' + fieldName).attr("disabled", "disabled");
      $('#txtRangeTo' + fieldName).attr("disabled", "disabled");
    }
  });
  $(".ckFilterValue").click(function ()
  {
    var selectedFilterValue = $(this).prop("id");
    var fieldName = selectedFilterValue.replace('ckFilter', '') ;
    var selectFilter = document.getElementById('select' + fieldName);
    var isSelectFilter = true ;
    if (selectFilter == null || selectFilter == "undefined")
    {
      isSelectFilter = false ;
    }
    
    if ($(this).prop("checked")=='1')
    {
      if (isSelectFilter)
      {
        $('#ckDisplay' + fieldName).prop("checked", 0);
        $('#ckDisplay' + fieldName).attr("disabled", "disabled");
      }
      $('#select' + fieldName).removeAttr("disabled");
      $('#txtFilter' + fieldName).removeAttr("disabled");
      
      var groupValue = $('input[name="rdGroup"]:checked').val();
      if (groupValue == fieldName)
      {
        $('#rdGrpdefault').prop("checked", 1);
      }
      $('#rdGrp' + fieldName).attr("disabled", "disabled");
      
      var orderValue = $('input[name="rdOrder"]:checked').val();
      if (orderValue == fieldName)
      {
        $('#rdOrderdefault').prop("checked", 1);
      }
      $('#rdOrder' + fieldName).attr("disabled", "disabled");
    }
    else
    {
      $('#ckDisplay' + fieldName).removeAttr("disabled");
      $('#select' + fieldName).attr("disabled", "disabled");
      $('#txtFilter' + fieldName).attr("disabled", "disabled");
      $('#rdGrp' + fieldName).removeAttr("disabled");
      
      var groupValue = $('input[name="rdGroup"]:checked').val();
      if (groupValue != fieldName)  //check for radio group first
      {
        $('#rdOrder' + fieldName).removeAttr("disabled");
      }
    }
  });
  $(".rdGroupBy").click(function ()
  {
    var fieldName = $(this).val();
    $("#ckDisplay" + fieldName).prop("checked", 0);
    $("#ckDisplay" + fieldName).attr("disabled", "disabled");
    var orderValue = $('input[name="rdOrder"]:checked').val();
    if (orderValue == fieldName)
    {
      $('#rdOrderdefault').prop("checked", 1);
      $('#rdOrder' + fieldName).attr("disabled", "disabled");
    }
    else
    {
      if ($('#ckFilter' + fieldName).prop("checked")=='1') //check for valueFilter first
      {
        $('#rdOrder' + fieldName).removeAttr("disabled"); 
      }
    }
    if (fieldName=="default")
    {
      $("#rdSummarydefault").prop("checked", 1);
      $(".rdSummary").attr("disabled", "disabled");    
    }
    else
    {
       $(".rdSummary").removeAttr("disabled"); 
    }
  });
  $(".rdOrderBy").click(function ()
  {
    var fieldName = $(this).val();
    $("#ckDisplay" + fieldName).prop("checked", 1);
  });
}
//------------------------------------------------------------------------------------------------------------------
function createCriteriaElement(obj, typeName , className, idPrefix , name , value )
{
  if (obj["caption"].trim() == '')
  {
    return '</br>';
  }
  var fieldName = obj.dbName;
  var s = '<input type="' + typeName +'"  class="' + className + '"  id="' + idPrefix + fieldName + '" ' ;
  if (name != null)
  {   
    s = s + ' name="' + name + '"' ;   
  }
  if (value != null)
  {   
    s = s + ' value="' + value + '"' ;  
  }
  s = s + setCriteriaField(obj);
  s = s + '/>';
  return s ;
}
//------------------------------------------------------------------------------------------------------------------
function createCriteriaRow(tblName , index , numberOfcells)
{

  var table = document.getElementById(tblName);
  var row = table.insertRow(index);
  for (var i=0; i < numberOfcells ; i++)
  {
    row.insertCell(i) ;
  }
  return row ;
}
//---------------------------------------------------------------------------------------------------------
function populateDropDownFilters(reportFields)
{
  var valueFiltersCount = reportFields.valueFiltersFields.length;

  for (var i = 0;i < valueFiltersCount;i++)
  {
    if (reportFields.valueFiltersFields[i].type == 'select')
    {
      var selectControlId = "select" + reportFields.valueFiltersFields[i].dbName;
      ajaxDropDown(reportFields.valueFiltersFields[i].lookupService, selectControlId);
    }
  }
}
//---------------------------------------------------------------------------------------------------------
function readAttribute(obj,element,attributeName)
{
  if (obj !=null && element!= null)
  {
    var attributeValue = element.getAttribute(attributeName);
    if (attributeValue != null && attributeValue != 'undefined')
    {
       obj[attributeName] = attributeValue ;
    }
  }
  return obj ;   
}
//------------------------------------------------------------------
function validCriteria(reportCriteria)
{ 
  if (reportCriteria.displayFields == null || reportCriteria.displayFields.length==0)
  {
    displayErrorMessage("Error: No display fields are selected.");
    return false ;
  }
  return true ;
}
//---------------------------------------------------------------------------------------------------------
function setCriteriaField(obj)
{
  var s = "" ;
  var fieldName = obj.dbName;
  var lookupFieldName = obj.dbLookup;
  var caption = obj.caption;
  try
  { 
    var summaryOp = obj.summaryOp;
    s = s + ' summaryOp="' + summaryOp + '"' ; 
  }
  catch (e){};
  try
  { 
    var summaryCaption = obj.summaryCaption;
    s = s + ' summaryCaption="' + summaryCaption + '"' ; 
  }
  catch (e){};
  s = s + ' field="' + fieldName + '" lookupField="' + lookupFieldName + '" caption="' + caption + '"' ;
  return s ;
}
//---------------------------------------------------------------------------------------------------------
function getCriteriaField(element)
{
  var obj = {};
  obj = readAttribute(obj , element , "field");     
  obj = readAttribute(obj , element , "lookupField");
  obj = readAttribute(obj , element , "caption");
  obj = readAttribute(obj , element , "summaryOp");
  obj = readAttribute(obj , element , "summaryCaption");

  return obj ;   
}
//---------------------------------------------------------------------------------------------------------
function getReportCriteria()
{
  var reportCriteria = {"title":"", "summaryType":"", "displayFields" : [], "groupBy" : [], "orderBy" : [], "rangeFilters" : [], "valueFilters" : []  };

  // add id as a mandatory display field whether checked or not
  var displayId = {};
  displayId.field = "id";     
  displayId.caption = "id";
  reportCriteria.displayFields.push(displayId);
  
  $(".ckDisplay").each(function (i,element)
  {   
    if (element.checked==true)
    {
      var displayObj = getCriteriaField(element) ;      
      if (displayObj.field != "id")
      {
        reportCriteria.displayFields.push(displayObj);
      }
    }
  });
 //---------------------------------------------------------
  $(".ckFilterValue").each(function (i,element)
  {
    if (element.checked==true)
    {
      var elementId = element["id"];     
      var filterObj = getCriteriaField(element) ;     

      filterObj.value = $(elementId.replace('ckFilter','#txtFilter' )).val();
      if ((filterObj.value)== null || filterObj.value== "undefined")  // drop down filter
      {
         var selectElementId = elementId.replace('ckFilter','select' ) ;
         filterObj.value = $("#"+selectElementId).val();
         var selectElement = document.getElementById(selectElementId);
         var selectedIndex  = selectElement.selectedIndex  ;
         if (selectedIndex == -1)
         {
           filterObj.lookupFieldValue = " no value selected";
         }
         else
         {
           filterObj.lookupFieldValue = selectElement.options[selectedIndex].text;
         }
      }
      else  // text filter
      {
        filterObj.value = paddingforFilterText + filterObj.value + paddingforFilterText;  // #!# place holder to be replaced in the backend
      }
      reportCriteria.valueFilters.push(filterObj);
    }
  });
 //---------------------------------------------------------
  $(".ckFilterRange").each(function (i,element)
  {
    if (element.checked==true)
    {
      var elementId = element["id"];
      var fieldFromValue = $(elementId.replace('ckRange', '#txtRangeFrom')).val();
      var fieldToValue = $(elementId.replace('ckRange', '#txtRangeTo')).val();
       
      var filterObj = getCriteriaField(element) ;     
      filterObj.fromValue = fieldFromValue ;     
      filterObj.toValue = fieldToValue ;     
      reportCriteria.rangeFilters.push(filterObj);
    }
  });
 //---------------------------------------------------------
  var groupValue  = $('input[name="rdGroup"]:checked').val(); 
  if (groupValue != 'null' && groupValue != 'undefined' && groupValue != 'default')
  {
    var element = document.getElementById("rdGrp" + groupValue);
    var groupObj =  getCriteriaField(element) ;    
    reportCriteria.groupBy.push(groupObj);
  }
 //---------------------------------------------------------
  var summaryTypeValue  = $('input[name="rdSummaryType"]:checked').val(); 
  if (summaryTypeValue != 'null' && summaryTypeValue != 'undefined' && summaryTypeValue != 'default')
  {
    reportCriteria.summaryType = summaryTypeValue ;
  }
 //---------------------------------------------------------
  var orderValue  = $('input[name="rdOrder"]:checked').val(); 
  if (orderValue != 'null' && orderValue != 'undefined' && orderValue != 'default')
  {
    var element = document.getElementById("rdOrder" + orderValue);
    var orderObj =  getCriteriaField(element) ; 
    reportCriteria.orderBy.push(orderObj);
  }
 //---------------------------------------------------------  
  return reportCriteria;
}
//---------------------------------------------------------------------------------------------------------
function hasCurrentAppValidCriteria()
{
  var ok = false ;
  var reportCriteria = getReportCriteria();  
  if (validCriteria(reportCriteria))
  {
     ok = true ;
     reportCriteria.title =  currentApp.title ;
     reportCriteria.reportMethod =  currentApp.reportMethod ;
     reportCriteria.reportModel =  currentApp.reportModel ;
     reportCriteria.pageno = 0 ;
     reportCriteria.count = 0 ;
     if (currentApp.mode == "search")
     {
       reportCriteria.count = recordsPerPage ;
     }
     var jsonReportCriteria = JSON.stringify(reportCriteria);  // pass criteria as a string to the new window in window name
     
     currentApp.criteria = reportCriteria ;
     currentApp.jsonCriteria = jsonReportCriteria ;    
   }
  return ok;
}
//--------------------------------------------------------------------------------------------------------------