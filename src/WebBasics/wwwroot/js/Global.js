
var apiPath = "http://localhost:49732/api/TestApi/";

//----------------- document onReady --------------------
$(document).ready(function () {
 
    window.onerror = function (msg, url, line, col, error) {
        globalErrorHandler(msg, url, line, col, error);
    };
});
//-------------------------------------------------------------
function globalErrorHandler(msg, url, line, col, error) {

    // Note that col & error are only in the HTML 5 
    var extra = (!col ? '' : '\ncolumn: ' + col) + (!error ? '' : '\nerror: ' + error);

    $('#dvMessage').text("javascript error: " + msg + "\nurl: " + url + "\nline: " + line + extra);

    // TODO: Report this error via ajax so you can keep track of js issues

    var suppressErrorAlert = true;

    // If you return true, then error alerts (like in older versions of Internet Explorer) will be suppressed.
    return suppressErrorAlert;
}
//-------------------------------------------------------------
function httpErrorHandler(response) {

    $('#dvMessage').text("http error: " + JSON.stringify(response, null, 3));

    // TODO: Log this error via ajax so you can keep track of js issues

    var suppressErrorAlert = true;

    // If you return true, then error alerts (like in older versions of Internet Explorer) will be suppressed.
    return suppressErrorAlert;
}
//-------------------------------------------------------------
function ShowInfo(msg , obj) {
    var info = $('#dvMessage').html();
    $('#dvMessage').html(info + " <br/> " + "Info: " + msg + JSON.stringify(obj, null, 3));

    // TODO: Log this error via ajax so you can keep track of js issues

    var suppressErrorAlert = true;

    // If you return true, then error alerts (like in older versions of Internet Explorer) will be suppressed.
    return suppressErrorAlert;
}
//------------------------------------------------------------------------------------------------------------
function CriteriaField(field, caption) {
    var objField = {};
    objField.field = field;
    objField.caption = caption;

    objField.isDisplay = true;
    objField.isValueFilter = true;
    objField.isRangeFilter = true;
    objField.isGroupBy = true;
    objField.isOrderBy = true;

    objField.isDisplayChecked = false;
    objField.isDisplayDisabled = false;

    objField.isFilterChecked = false;
    objField.isFilterDisabled = false;

    objField.filterControlType = "text";

    objField.filterControlDisabled = false;
    objField.filterControlValue = "";

    objField.filterControlFromDisabled = false;
    objField.filterControlFromValue = "";

    objField.filterControlToDisabled = false;
    objField.filterControlToValue = "";

    objField.isGroupChecked = false;            //to keep track of control behaviuor
    objField.isGroupDisabled = false;

    objField.isOrderChecked = false;            //to keep track of control behaviuor
    objField.isOrderDisabled = false;
    return objField;
};
