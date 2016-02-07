function ReportGenerator(app) 
{  
  setCurrentApp(app, "report") ;
  //------------------------- Title ----------------------------
  $('#dvMessage').text(app.title);   
  
  //------------------------- Content ------------------------
  $('#dvControls').hide();
  $('#dvList').hide();
  $('#dvCriteria').show();
  $('#dvCriteria').load('layout/_criteriaGenerator.html', function ()
  {
    //----------- create controls for display, filters, group by, order by ----------
    CriteriaGenerator(app);
    registerEventsCriteriaGenerator();
    
    //----------- Fill drop down controls with data ----------
    populateDropDownFilters(app.reportFields);
  });
}
//---------------------------------------------------------------------------------------------------------
/*
 * When Preview Button is clicked: a new html page is loaded "print.html" to show the report sections and data
 *  print.html calls menuReportShow
 */
function onReportPreview()     
{
  if (hasCurrentAppValidCriteria())
  {
     // currentApp with criteria will be pulled by print.html when document ready
     var printWin = window.open('print.html?menu=menuReportShow', "Print Report", 'width = 900, height = 800, scrollbars=yes');
  } 
}
//---------------------------------------------------------------------------------------------------------
/*
 * When Export Button is clicked: a stored procedure executes the criteria and export data to excel file
 *  a link to the excel file should be returned
 */
function onReportExport()     
{
  if (hasCurrentAppValidCriteria())
  {
    ajaxPost("reportGenerator/exportReport", currentApp.criteria ,onSuccessReportExport, displayErrorMessage)
  } 
}
//---------------------------------------------------------------------------------------------------------
function onSuccessReportExport(wsResponse, status, xhr)
{
   if (wsResponse.status.code == 0)
   {
     displayInfoMessage( wsResponse.data['$']);
   }
   else
   {
     displayErrorMessage(wsResponse.status.message);
   }
}
//---------------------------------------------------------------------------------------------------------
/*
 * When Save Button is clicked: report criteria is validated and sent to server to be saved and retrun report url
 */
function onReportSave()
{
  if (hasCurrentAppValidCriteria())
  {
    var systemReport = {} ;
    systemReport.name = currentApp.reportModel;
    systemReport.reportTitle = currentApp.title ;
    systemReport.criteria = currentApp.jsonCriteria ;
    ajaxPost("systemReport/insert", systemReport ,onSuccessReportSave, displayErrorMessage)
  } 
}
//---------------------------------------------------------------------------------------------------------
/*
 * When ajax [save report] success: display report url 
 */
function onSuccessReportSave(wsResponse, status, xhr)
{
   if (wsResponse.status.code == 0)
   {
     var id = wsResponse.data.id ;
     var reportUrl = window.location.href + "?menu=menuReportRestore&id=" + id ;
     displayInfoMessage("Report url = " + reportUrl);
   }
   else
   {
     displayErrorMessage(wsResponse.status.message);
   }
}
//---------------------------------------------------------------------------------------------------------
/*
 * When a report url is located in the browser by the user: do ajax call to restore & show report
 */
function menuReportRestore(reportId)
{
   ajaxGet("systemReport/getById?id=" + reportId, null , onSuccessReportRestore, displayErrorMessage);
}
//---------------------------------------------------------------------------------------------------------
/*
 * When ajax [restore report] success: a new html page is loaded "print.html" to show the report sections and data
 *  print.html calls menuReportShow
 */
function onSuccessReportRestore(wsResponse, status, xhr)
{
   if (wsResponse.status.code == 0)
   {
      var jsonReportCriteria = wsResponse.data.criteria ;
      var reportCriteria = JSON.parse(jsonReportCriteria);
      
      currentApp.title = reportCriteria.title ;
      currentApp.reportMethod = reportCriteria.reportMethod ;
      currentApp.reportModel = reportCriteria.reportModel ;
      currentApp.jsonCriteria = jsonReportCriteria ;
      
    // set controls or print directly
     window.open('print.html?menu=menuReportShow', "Restore Report", 'width = 900, height = 800, scrollbars=yes');
   }
   else
   {
     displayErrorMessage(wsResponse.status.message);
   }
}
//---------------------------------------------------------------------------------------------------------
/*
 * This function is executed on print.html load
 * it gets the report criteria from the variable window.name and makes ajax call to get report data to show
 */
function menuReportShow()
{
  $('#dvPrintHeader').load('layout/_printerHeader.html');
  $('#dvPrintContent').load('layout/_printerList.html');
 
   setCurrentApp( null, "report" ) ;  //get current app from parent win
   $('#dvPrintTitle').html(currentApp.title);
   ajaxReport (currentApp.reportMethod, currentApp.reportModel , currentApp.jsonCriteria, onSuccessReportShow, displayErrorMessage);

}
//---------------------------------------------------------------------------------------------------
function onSuccessReportShow(wsResponse)
{
  CreateReportSections(wsResponse);
}