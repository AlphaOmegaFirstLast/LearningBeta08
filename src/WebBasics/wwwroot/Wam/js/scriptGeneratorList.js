//---------------------------------------------------------------------------------------------------
function CreateReportSections(wsResponse)
{
  var table = document.getElementById("tblList");
  //-------------------- clear table ----------------------
  while (table.rows.length)
  {
    table.deleteRow(0);
  } 
  //-------------------- set report title & header ----------------------
  setReportHeader(wsResponse);
  
  //-------------- define columns -----------
  var groupColumnIndex = 0 ;
  var colCount = wsResponse.reportCriteria.displayFields.length;
  var headerRow = table.insertRow(0);
  
  //------------- line per group by -----------------------
  if ( getSummaryType(wsResponse) == "LinePerGroup" )
  {
    var groupHeaderCell = headerRow.insertCell(0);
    groupHeaderCell.innerHTML = wsResponse.reportCriteria.groupBy[0].caption;
    groupColumnIndex = 1 ;
    //--------------------------------------------------------
    for (var i = 0;i < colCount;i++)
    {
      headerCell = headerRow.insertCell(groupColumnIndex + i);
      var summaryCaption = wsResponse.reportCriteria.displayFields[i].summaryCaption;
      if (summaryCaption != null)
      {
        headerCell.innerHTML = summaryCaption;
      }
      else
      {
        headerCell.innerHTML = wsResponse.reportCriteria.displayFields[i].caption;
      }
    }
  }
  else
  {
    //--------------------------------------------------------
    for (var i = 0;i < colCount;i++)
    {
      headerCell = headerRow.insertCell(i);
      headerCell.innerHTML = wsResponse.reportCriteria.displayFields[i].caption;
    }
  }
  //--------------------------------------------------
  var rowCount = 1;//header is counted
  var exGroup = {value: ""} ;
  var recCount = wsResponse.data['records'].length;

  //------- loop table columns and display fields -----
  for (var i = 0; i < recCount; i++)
  {
    var dataRecord = wsResponse.data['records'][i];
    
    //-------------------- Group by section --------------------
    rowCount = manageGroupBy(wsResponse , dataRecord , exGroup , table, colCount, rowCount);
      
    //------------------- Display Fields ---------------
    
     var row = table.insertRow(rowCount);
     row.setAttribute("recordid", wsResponse.data.records[i].id);  //make sure that the main table id is returned
    //----------------------------------
    if ( getSummaryType(wsResponse) == "LinePerGroup" ) //add extra column for group by field
    {
      var newcell = row.insertCell(0);
      var groupByValue = dataRecord[wsResponse.reportCriteria.groupBy[0].lookupField];
      newcell.innerHTML = groupByValue;
    }
    //----------------------------------
    for (var j = 0;j < colCount;j++)
    {
      var displayField = wsResponse.reportCriteria.displayFields[j].lookupField ; //priority to display lookup field first
      if (displayField == null || displayField=='')
      {
        displayField = wsResponse.reportCriteria.displayFields[j].field ; 
      }
      var displayValue = dataRecord[displayField];

      var newcell = row.insertCell(groupColumnIndex + j);
      newcell.innerHTML = displayValue;
    }
    rowCount++;
  }
  //-------------------------Display last group footer ------
  rowCount = manageGroupBy(wsResponse , null , exGroup , table, colCount, rowCount);
  
  attachTableRowClickHandle("tblList");
  
  //---------------------- set paginator ----------------------
  if (currentApp.mode=="search")
  {
      if (currentApp.paginatorType == "basic")
      {
         $('#dvPaginator').load('layout/_Paginator.html', function ()
         {
           displayPaginator(wsResponse, currentApp);
         });
       }
  }
}
//---------------------------------------------------------------------------------------------------------
function setReportHeader(wsResponse)
{
  //------------------ Report Title ----------------------- 
  var reportTitle = wsResponse.reportCriteria.title ;

  //------------------ Value Filters  ---------------------
  var valueFiltersCount = wsResponse.reportCriteria.valueFilters.length;
  for (var i = 0;i < valueFiltersCount;i++)
  {
    var filterField = wsResponse.reportCriteria.valueFilters[i].caption;
    var filterValue = wsResponse.reportCriteria.valueFilters[i].lookupFieldValue;
    if (filterValue == null || filterValue=='')
    {
      filterValue = wsResponse.reportCriteria.valueFilters[i].value ; 
    }
    
    reportTitle = reportTitle + '<br/>' + filterField + ": " + filterValue;   
  }
  // replace all occurance of 
  var find = paddingforFilterText;
  var regExp = new RegExp(find, 'g');
  reportTitle = reportTitle.replace(regExp,"");
  //------------------ Range Filters  ---------------------
  var rangeFiltersCount = wsResponse.reportCriteria.rangeFilters.length;
  for (var i = 0;i < rangeFiltersCount;i++)
  {
    var filterField = wsResponse.reportCriteria.rangeFilters[i].caption;
    var filterFromValue = wsResponse.reportCriteria.rangeFilters[i].fromValue;
    var filterToValue = wsResponse.reportCriteria.rangeFilters[i].toValue;
    reportTitle = reportTitle + '<br/>' + filterField + " From: " + filterFromValue + " To: " + filterToValue;
  }
  //------------------ group by  ---------------------
  if (wsResponse.reportCriteria.groupBy.length > 0)
  {
    reportTitle = reportTitle + '<br/>' + " Group by " + wsResponse.reportCriteria.groupBy[0].caption ;
  }
  //------------------ order by  ---------------------
  if (wsResponse.reportCriteria.orderBy.length > 0)
  {
    reportTitle = reportTitle + '<br/>' + " Order by " + wsResponse.reportCriteria.orderBy[0].caption ;
  }
  $('#dvPrintTitle').html(reportTitle);

}
//---------------------------------------------------------------------------------------------------------
function manageGroupBy(wsResponse , dataRecord , exGroup, table ,colCount, rowCount )
{
    if ( getSummaryType(wsResponse) == "FooterPerGroup" || getSummaryType(wsResponse) == "NoSummaryGroup")
    {
      var groupField = wsResponse.reportCriteria.groupBy[0].lookupField; 
      if (groupField == null || groupField=='')
      {
        groupField = wsResponse.reportCriteria.groupBy[0].field ; 
      }
      var groupValue = "" ;
      if (dataRecord!= null)
      {
         if (dataRecord[groupField]!= null)
         {
            groupValue = dataRecord[groupField].toUpperCase(); // dataRecord will be sent null at the end of report to show footer
         }
         else
         {
           groupValue = "Undefined " + wsResponse.reportCriteria.groupBy[0].caption ;
         }
      }
      rowCount = manageGroupSummaryFooter (wsResponse, table ,colCount, rowCount,dataRecord, groupValue, exGroup.value );         
      var newGroupStarted = groupValue != exGroup.value ;
      if (newGroupStarted)
      {
        var groupRow = table.insertRow(rowCount);
        var groupCell = groupRow.insertCell(0);
        groupCell.colSpan = colCount;
        groupCell.className = "groupHeader";
        groupCell.innerHTML = groupValue;
        exGroup.value = groupValue;              
        rowCount++;
      }
    }
  return rowCount ;
}
//---------------------------------------------------------------------------------------------------------
function manageGroupSummaryFooter(wsResponse, table, colCount, rowCount, dataRecord, groupValue, exGroupValue)
{
  //----------- check summary fields found ----------
  if ( getSummaryType(wsResponse) == "FooterPerGroup" )
  {
    var newGroupStarted = groupValue != exGroupValue;
    if (newGroupStarted)
    {
      if (exGroupValue != "")
      {
        //---- end previuos group -----
        rowCount = displayFooterSummary(wsResponse, table, colCount, rowCount);
      }
      //---- start new group -----
      wsResponse = initFooterSummary(wsResponse);
    }
    wsResponse = calculateFooterSummary(wsResponse, dataRecord);
  }
  return rowCount;
}
//---------------------------------------------------------------------------------------------------------
function displayFooterSummary(wsResponse, table ,colCount, rowCount)
{
    var summaryType = wsResponse.reportCriteria.summaryType;
    var row = table.insertRow(rowCount);
    for (var j = 0;j < colCount;j++)
    {
      var newcell = row.insertCell(j);
      newcell.className = "groupFooter";

      var summaryOp = wsResponse.reportCriteria.displayFields[j].summaryOp ;
      if (summaryOp != null )
      {     
        var summaryValue = wsResponse.reportCriteria.displayFields[j].summaryValue ; 
        if (summaryOp == "avg")
        {
           summaryValue = (summaryValue / wsResponse.reportCriteria.summaryCount).toFixed(2) ;        
        }
        var summaryCaption =  wsResponse.reportCriteria.displayFields[j].summaryCaption ;
        newcell.innerHTML = summaryCaption + " = " + summaryValue;
      }
    }
    rowCount++;
    return  rowCount ;
}
//---------------------------------------------------------------------------------------------------------
function initFooterSummary(wsResponse)
{
    var summaryType = wsResponse.reportCriteria.summaryType;
    var colCount = wsResponse.reportCriteria.displayFields.length;
    for (var j = 0;j < colCount;j++)
    {
      var summaryOp = wsResponse.reportCriteria.displayFields[j].summaryOp;
      if (summaryOp!=null)
      {
        wsResponse.reportCriteria.displayFields[j].summaryValue = 0 ;
      }
    }
    wsResponse.reportCriteria.summaryCount = 0 ; // this var will be used to calc average   
  return wsResponse ;
}
//---------------------------------------------------------------------------------------------------------
function calculateFooterSummary(wsResponse, dataRecord)
{
    var summaryType = wsResponse.reportCriteria.summaryType;
    wsResponse.reportCriteria.summaryCount = wsResponse.reportCriteria.summaryCount + 1 ;
    var colCount = wsResponse.reportCriteria.displayFields.length;
    for (var j = 0;j < colCount;j++)
    {
       var summaryOp = wsResponse.reportCriteria.displayFields[j].summaryOp;
      if (summaryOp != null)
      {
         var fieldValue = 0 ;
         try
         {
           var fieldName = wsResponse.reportCriteria.displayFields[j].field ; 
           fieldValue = parseInt( dataRecord[fieldName]);
         }
         catch (e)
         {};
         var summaryValue = 0 ; 
         if (wsResponse.reportCriteria.displayFields[j].summaryValue!=null)
         {
           summaryValue = parseInt( wsResponse.reportCriteria.displayFields[j].summaryValue) ; 
         }
        switch (summaryOp)
        {
         case "count":
           wsResponse.reportCriteria.displayFields[j].summaryValue = summaryValue + 1 ;
           break;
         case "avg":
         case "sum":
           wsResponse.reportCriteria.displayFields[j].summaryValue = summaryValue + fieldValue ;
           break;
         case "max":
           if ( summaryValue < fieldValue )
           {
             wsResponse.reportCriteria.displayFields[j].summaryValue = fieldValue ;
           }
           break;
         case "min":
           if ( summaryValue > fieldValue || summaryValue== 0)
           {
             wsResponse.reportCriteria.displayFields[j].summaryValue = fieldValue ;
           }
           break;
         default:
           break;
        }
      }
    }
       
  return wsResponse ;
}
//---------------------------------------------------------------------------------------------------
function getSummaryType(wsResponse)
{
  var summaryType = wsResponse.reportCriteria.summaryType;
  var isGroupFound = (wsResponse.reportCriteria.groupBy.length > 0 && wsResponse.reportCriteria.groupBy[0].field != null);
  if (isGroupFound)
  {
    if (summaryType != null)
    {
      switch (summaryType)
      {
        case "LinePerGroup":
          return summaryType;

        case "FooterPerGroup":
          return summaryType;

        default :
          return "NoSummaryGroup";

      }
      return "NoSummaryGroup";     
    }
  }
  return "none";
}
//------------------------------------------------------------------------------------------------------------
function attachTableRowClickHandle(tblName)
{
  $("#" + tblName + " tr").click(function ()
  {
    currentApp.dataRecord.id = $(this).attr("recordid");//this refers here to the tr object
    if (currentApp.mode != "search")//if the current window not a search window
    {
      updateNavigator("Select");
      enableControls(false);
      getRecordById(currentApp);
    }
    // highlight selected row
    removeRowHighlight(tblName) ;
    $(this).addClass('highlightRow');//add highlight to the row was clicked
  });
}
//------------------------------------------------------------------------------------------------------------
function removeRowHighlight(tblName)
{
    $("#" + tblName + " tbody  > tr").each(function ()
    {
      $(this).removeClass('highlightRow');//remove highlight from all rows
    });
}