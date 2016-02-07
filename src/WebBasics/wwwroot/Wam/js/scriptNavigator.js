function displayNavigator(app)
{
    switch (app.navigatorType)
    {
      case "master":
        $("#bMaster").hide();
        $("#bDetails").val(app.detailsCaption);
        break;
      case "basic":
        $("#bDetails").hide();
        $("#bMaster").hide();
        break;
      case "details":
        $("#bDetails").hide();
        $("#bMaster").val(app.masterCaption);
        break;
      case "master_details":
        $("#bMaster").val(app.masterCaption);
        $("#bDetails").val(app.detailsCaption);
        break ; 
      case "none":
        $("#tblNavigator").hide();
        break;
      case "masterDetails": 
        $("#bMaster").val(masterButtonName) ;
        $("#bDetails").val(detailsButtonName) ;
        break;
      default :
        break;
    }
    onNew();    //default operation
}
function onNew()
{
  currentApp.mode = 'new' ;
  clearControls();
  enableControls();
  updateNavigator("New");
}

function onEdit()
{
  currentApp.mode = 'edit' ;
  enableControls();
  updateNavigator("Edit");
}

function onDelete()
{
  currentApp.mode = 'delete' ;
  deleteRecord(currentApp);
  clearControls();
  enableControls(false);
  updateNavigator("Delete");
  //------------------------------
  showRecordList(null, currentApp);
}

function onSave()
{
var validOp = true ;
  switch (currentApp.mode)
  {
    case 'new':
      validOp = insertRecord(currentApp);
      break;
    case 'edit':
      validOp = updateRecord(currentApp);
      break;
    default :
      break;
  }
  if (validOp)
  {
    updateNavigator("Select");  
    enableControls(false);    
  }
  else
  {
    enableControls(true); // allow user to correct input
  }
}

function onMaster()
{
    currentApp.mode = 'master' ;
    currentApp = currentApp.parentApp ;
    ScreenGenerator(currentApp) ;  //load parent screen
}
//----------------------------------------------------------------------------------
function onDetails()
{
    currentApp.mode = 'details' ;
    var parentApp =  currentApp ;
    currentApp = currentApp.childApp ;
    currentApp.parentApp = parentApp ;
    currentApp.dataRecord.id = 0 ;        // no default record should show at start up of details screen
    ScreenGenerator(currentApp) ;  //load details screen
}
//------------------------------------------------------------------------------------

function onSearch()
{
  var winSearch = window.open("search.html?menu=" + currentApp.menuItemSearch, "Search " + currentApp.title, 'width = 900, height = 600, scrollbars=yes');
}
//----------------------------------------------------------------------------------
function updateNavigator(navigatorButton)
{
  //disable all navigator button except new
  $("#bNew").removeAttr("disabled");
  $("#bEdit").attr("disabled", "disabled");
  $("#bDelete").attr("disabled", "disabled");
  $("#bSave").attr("disabled", "disabled");
  $("#bDetails").attr("disabled", "disabled");
//  $("#bMaster").attr("disabled", "disabled");  //always enabled as long as it is visible. it works as back to master 

  switch (navigatorButton.toLowerCase())
  {
    case "new":
      $("#bSave").removeAttr("disabled");
      break;
    case "edit":
      $("#bSave").removeAttr("disabled");
      break;
    case "delete":
      break;
    case "save":
      break;
    case "select":
      $("#bEdit").removeAttr("disabled");
      $("#bDelete").removeAttr("disabled");
      $("#bDetails").removeAttr("disabled");
      break;
    default :
      break;
  }
}

function clearControls()
{
  $(':input')
  .not(':button, :submit, :reset, :hidden , [id^="parent"]')  //dont clear button & hidden fields & dont clear parent controls
  .val('')
  .removeAttr('checked')
  .removeAttr('selected');
}

function enableControls(enable)
{
  if (enable == true || enable == null)
  {
    $(':input')
    .not(':button, :submit, :reset, :hidden')
    .removeAttr("disabled");
  }
  else 
  {
    $(':input')
    .not(':button, :submit, :reset, :hidden')   
    .attr("disabled", "disabled");
  }
      
  $(':input[id^="parent"]')        //always disable parent controls
  .attr("disabled", "disabled");
}
