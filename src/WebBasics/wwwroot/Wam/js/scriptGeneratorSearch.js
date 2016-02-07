function SearchGenerator(app)
{
  setCurrentApp(app, "search") ;
  //------------------------- Title ----------------------------
  $('#dvMessage').text(app.title);

  //------------------------- Content ------------------------
  $('#dvCriteria').load('layout/_criteriaGenerator.html', function ()
  {
    //----------- create controls for display, filters, group by, order by ----------
    CriteriaGenerator(app);
    registerEventsCriteriaGenerator();
    
    //----------- Fill drop down controls with data ----------
    populateDropDownFilters(app.reportFields);
  });
  //----------------------------------------------------------
  $('#dvList').load('layout/_paginatedList.html') ;
}
//--------------------------------------------------------------------------------------------------------
function onSearch()     
{
  if (hasCurrentAppValidCriteria())
  {
     // pass the criteria to the backend (reportGenerator service) get data and display in tblList
     ajaxReport(currentApp.reportMethod, currentApp.reportModel , currentApp.jsonCriteria, onSuccessReportShow, displayErrorMessage);  
  } 
}
//---------------------------------------------------------------------------------------------------------
function onPrintSearch()
{
  onReportPreview();
}
//---------------------------------------------------------------------------------------------------------
function onSelectSearch()
{
  passValueToParentWin(currentApp.dataRecord.id);
}
//---------------------------------------------------------------------------------------------------------
function onCancelSearch()
{
  passValueToParentWin(0);
}
//---------------------------------------------------------------------------------------------------------
function passValueToParentWin(recordId)
{
 // alert(recordId);  // used for debugging
  var openerWin = window.opener;
  if (recordId > 0)
  {
    currentApp.mode = "list" ;
    openerWin.currentApp.dataRecord.id = recordId ;
    openerWin.updateNavigator("Select");
    openerWin.enableControls(false);
    openerWin.getRecordById(openerWin.currentApp);
    openerWin.removeRowHighlight("tblList") ;
  }
  window.close();
}
//---------------------------------------------------------------------------------------------------------
