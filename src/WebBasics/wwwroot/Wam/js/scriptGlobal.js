//------------------------------------------------------------
//var apiPath = "http://software-server:8081/wam16092015/jersey/";
var apiPath = "http://localhost:7101/wam/jersey/"; 
var visualRequest = {};
var systemLanguage = "RightToLeft" ;                    // 1- "LeftToRight" 2- "RightToLeft"
var languageAttributes = ' dir="rtl" lang="ar" ' ;                          // 1- ' '           2- ' dir="rtl" lang="ar" '
var currentApp = {} ;
var accessableMenuItems = [] ;
var accessableReports = [] ;

var isSecurityEnabled = false ;

var AccessibleTypeHtml = "html" ;
var AccessibleTypeFunction = "function" ;
var AccessibleTypeReport = "report" ;

var hasPaginatorDisplayed = false;
var recordsPerPage = 3;

var currentNavigatorOperation = 'none';

var prefixForText = "_txt_" ;
var prefixForSelect = "_select_";
var prefixForRadio = "_rd_" ;
var prefixForCheckbox = "_ck_";
var prefixForButton = "_btn_" ;
var paddingforFilterText = "#!#" ;
//-------------------------------------------------------------
function initVars()
{ 
  hasPaginatorDisplayed = false;
  currentNavigatorOperation = 'none'; 

  $('#dvMessage').text("");  
  $('#dvNavigator').hide();
  stopTimerGetLoggedUsers() ;
  stopTimerGetChat() ; 
}
//------------------------------------------------------------------------------------------------------------

function initVisualRequest()
{
  visualRequest.visitTypeId = 0;
  visualRequest.segmentId = 0;
}
//-------------------------------------------------------------
function globalErrorHandler(msg, url, line, col, error) 
{
   // Note that col & error are only in the HTML 5 
   var extra = !col ? '' : '\ncolumn: ' + col + !error ? '' : '\nerror: ' + error;

    $('#dvMessage').text("javascript error: " + msg + "\nurl: " + url + "\nline: " + line + extra);

   // TODO: Report this error via ajax so you can keep track of js issues

   var suppressErrorAlert = true;
   
   // If you return true, then error alerts (like in older versions of Internet Explorer) will be suppressed.
   return suppressErrorAlert;
}
//------------------------------------------------------------------------------------------------------------
function getUrlParam(name, url)
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
  return results[1] || undefined;
}
