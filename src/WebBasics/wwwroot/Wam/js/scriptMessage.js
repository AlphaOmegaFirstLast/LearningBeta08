//--------------------------------- Display messages ----------
function displaySuccessfulOperation(operation)
{
  switch(operation)
  {
    case 'insert':
          $('#dvMessage').text("Record has been successfully inserted.");
          break ;
    case 'update':
          $('#dvMessage').text("Record has been successfully updated.");
          break ;
    case 'delete':
          $('#dvMessage').text("Record has been successfully deleted.");
          break ;
    case 'list':
        //  $('#dvMessage').text("Record has been successfully listed.");
          break ;
    default:
          break;
  }
}
//---------------------------------------------------------------------------------------------------------

function displaySuccessfulInsert()
{
$('#dvMessage').text("Record has been successfully inserted.");
}
//---------------------------------------------------------------------------------------------------------

function displaySuccessfulUpdate()
{
  $('#dvMessage').text("Record has been successfully updated.");
}
//---------------------------------------------------------------------------------------------------------

function displaySuccessfulDelete()
{
  $('#dvMessage').text("Record has been successfully deleted.");
}
//---------------------------------------------------------------------------------------------------------
function displayUnAuthorized()
{
  $('#dvMessage').text("User is not authorized to access this function.");
}
//---------------------------------------------------------------------------------------------------------

function displayErrorMessage(errMsg)
{
  if (!errMsg)
  {
    errMsg = "Something went wrong." ;
  }
  $('#dvMessage').text(errMsg);
}
//---------------------------------------------------------------------------------------------------------
function displayInfoMessage(infoMsg)
{
  if (!infoMsg)
  {
    infoMsg = "Something went wrong." ;
  }
  $('#dvMessage').text(infoMsg);
}
//---------------------------------------------------------------------------------------------------------
