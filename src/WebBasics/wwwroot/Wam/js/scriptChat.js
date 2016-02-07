var timerGetLoggedUsers ;
var timerGetChat = [];

var loggedUsers = [];

var myId = 0 ;
var prefixForDivChat = "dvChat" ;
var prefixChatButton = "btnChat" ;
var prefixForDivChatOutput = "dvChatOutput" ;
var prefixForTxtChatInput = "txtChatInput" ;
//-------------------------------------------------------------------
function chatEntryPoint()
{
  $('#dvCriteria').hide();
  $('#dvList').hide();
  $('#dvControls').show();
  $('#dvControls').load('layout/_chat.html');
}
//-------------------------------------------------------------------- 
function startTimerGetChat()
{
  timerGetChat = setInterval(getChat, 1000); //set timer to pull data
}
//-------------------------------------------------------------------- 
function stopTimerGetChat()
{
  clearInterval(timerGetChat); //stop timer to pull data
}
//-------------------------------------------------------------------- 
function startTimerGetLoggedUsers()
{
  timerGetLoggedUsers = setInterval(getLoggedUsers, 3000); //set timer to pull data
}
//-------------------------------------------------------------------- 
function stopTimerGetLoggedUsers()
{
  clearInterval(timerGetLoggedUsers); //stop timer to pull data
}
//-------------------------------------------------------------------- 
function getLoggedUsers()
{
  ajaxGet("chat/getLoggedUsers", '', onSuccessGetLoggedUsers, displayErrorMessage) ;
}
//-------------------------------------------------------------------- 
function onSuccessGetLoggedUsers(wsResponse)
{
  loggedUsers = [] ;
   var modifiedWsResponse = modifyWsResponse(wsResponse , "userInfo") ; 
  for (var i=0; i< modifiedWsResponse.data['records'].length ; i++)
  {
    loggedUsers.push(modifiedWsResponse.data['records'][i]);  
  }
  displayLoggedUsers();
}
//-------------------------------------------------------------------- 
function getChat()
{
  ajaxGet("chat/getChat?chatUserId=" + myId,"", onSuccessGetChat, displayErrorMessage) ;
}
//-------------------------------------------------------------------- 
function onSuccessGetChat(wsResponse)
{
   var modifiedWsResponse = modifyWsResponse(wsResponse , "chatInfo") ;          // to overcome jersy bug in serializing arrays of one element

  if (modifiedWsResponse.data['records'] != null && modifiedWsResponse.data['records'] != 'undefined')
  {
    for (var i = 0;i < modifiedWsResponse.data['records'].length;i++)
    {
      var senderId = wsResponse.data['records'][i].senderId;
      if (senderId != myId)
      {
         $("#" + prefixChatButton + senderId).addClass("chatAlert");   //aletr user for incoming messages
      }
      displayChatMessage(wsResponse.data['records'][i]) ;
    }
  }

}
//-------------------------------------------------------------------- 
function sendChat(receiverId)
{
  var d = new Date();

  var objChatInfo = {} ;
  objChatInfo.senderId = myId;
  objChatInfo.receiverId = receiverId ;
  objChatInfo.messageTime = d.getHours()+ ":" + d.getMinutes() + ":" + d.getSeconds() ;
  objChatInfo.messageId =  d.getTime() ;
  objChatInfo.message = document.getElementById(prefixForTxtChatInput + receiverId).value ;
  objChatInfo.deliveredToReceiverId = false;
  
  ajaxPost("chat/sendChat",objChatInfo, onSuccessSendChat, displayErrorMessage,true) ;
  var txtInput = document.getElementById(prefixForTxtChatInput+ receiverId);
  txtInput.value = "" ;
}
//-------------------------------------------------------------------- 
function onSuccessSendChat(wsResponse)
{
  var modifiedWsResponse = modifyWsResponse(wsResponse , "chatInfo") ;          // to overcome jersy bug in serializing arrays of one element

  if (modifiedWsResponse.data['records'] != null && modifiedWsResponse.data['records'] != 'undefined')
  {
    for (var i = 0;i < modifiedWsResponse.data['records'].length;i++)
    {
      var senderId = wsResponse.data['records'][i].senderId;
      if (senderId != myId)
      {
         $("#" + prefixChatButton + senderId).addClass("chatAlert");   //aletr user for incoming messages
      }
      displayChatMessage(wsResponse.data['records'][i]) ;
    }
  }

}
//-------------------------------------------------------------------- 
function displayLoggedUsers(wsResponse)
{
  var table = document.getElementById("tblLoggedUsers");
  //-------------------- clear table ----------------------
  while (table.rows.length)
  {
    table.deleteRow(0);
  }
  //----------------------------------------
  var j=0 ;
  for (var i = 0;i < loggedUsers.length; i++)
  {
    if ( loggedUsers[i].currentUser =="true")
    {
      myId =  loggedUsers[i].id ;
      btnCurrentUser.value = loggedUsers[i].name  ;
    }
    else
    {
      var row = table.insertRow(j);
      var firstCell = row.insertCell(0);
      firstCell.innerHTML = '<input' + languageAttributes 
      + ' type="button" '
      + ' id= "' + prefixChatButton + loggedUsers[i].id + '"'
      + ' onclick="switchToUserChat(' +  loggedUsers[i].id  + ')"' 
      + ' value="' + loggedUsers[i].name + '" />' ;
      
      j++ ;
    }
  }
 
}
//-------------------------------------------------------------------- 
function switchToUserChat(userId)
{  
  var dvChats = document.getElementById("dvUsersChats").childNodes ;
  for (var i=0; i< dvChats.length; i++)
  {
    dvChats[i].style.display = "none" ;
  }
  var dvChat = getChatElement (userId) ;
  dvChat.style.display = "block" ;
  
  $("#" + prefixChatButton + userId).removeClass("chatAlert");
  $("#" + prefixChatButton + userId).addClass = ("chatOn") ;

}
//-------------------------------------------------------------------- 
function getChatElement (userId)
{  
  var dvChatId = prefixForDivChat + userId ;
  var dvChat = document.getElementById(dvChatId) ;
  if (dvChat == null)
  {
    dvChat = CreateChatElement(userId) ;
  }
  return dvChat ;
}
//-------------------------------------------------------------------- 
function CreateChatElement(userId)
{
    var dvChatId = prefixForDivChat + userId ;
    var dvChatNew =  document.createElement("Div");
    dvChatNew.id = dvChatId ;
    dvChatNew.style.diplay = "block" ;
    document.getElementById("dvUsersChats").appendChild(dvChatNew);
    dvChatNew.innerHTML = 
      '<table id="tblChat' + userId + '">'
    + '<tr><td> ' +  getUserNameById( userId ) + '<\/td><\/tr>'  
    + '<tr><td>  <div id="' + prefixForDivChatOutput + userId + '" class="dvChatOutput"><\/div><\/td><\/tr>'
    + '<tr><td>  <input type="button" id="bChatSend' + userId + '" onclick="sendChat('+ userId +');" value="Send"\/><\/td><\/tr>'
    + '<tr><td>  <input type="text" id="' + prefixForTxtChatInput+ userId + '"  class="dvChatInput" ><\/input><\/td><\/tr>'
    + '<\/table>'   ;
    
    dvChatNew.style.display = "none" ;
    return dvChatNew ;
}
//-------------------------------------------------------------------- 
function getUserNameById(id)
{
 for (var i = 0;i < loggedUsers.length; i++)
  {
    if (loggedUsers[i].id == id)
    {
      return loggedUsers[i].name ; 
    }
  }
  return "" ;
}
//-------------------------------------------------------------------- 
function getUserId(button)
{
  var dvChat = button.parentElement.parentElement.parentElement.parentElement.parentElement ; //td > tr> tbody > table > div
  userId = dvChat.id.replace(prefixForDivChat,"") ;
  return userId ;
}
//-------------------------------------------------------------------- 
function displayChatMessage(chatInfo)
{
  if (chatInfo.senderId != myId )
  {
    var dvChat = getChatElement(chatInfo.senderId) ; //create if not exists
    var dvOutput = document.getElementById( prefixForDivChatOutput + chatInfo.senderId);
    dvOutput.innerHTML = dvOutput.innerHTML + "<br/><p class='pChatGuest' > " + getUserNameById(chatInfo.senderId) + " [" + chatInfo.messageTime + "]: " + chatInfo.message + "<\/p>";
  }
  else
  {
    var dvChat = getChatElement(chatInfo.receiverId) ; //create if not exists
    var dvOutput = document.getElementById( prefixForDivChatOutput+ chatInfo.receiverId);
    dvOutput.innerHTML = dvOutput.innerHTML + "<br/><p class='pChatOwner' > " + getUserNameById(chatInfo.senderId) + " [" +  chatInfo.messageTime + "]: " + chatInfo.message + "<\/p>";
  }
  dvOutput.scrollTop = 200;
}
//-------------------------------------------------------------------- 
function setLoggedUsers(currentId)
{
  ajaxGet("chat/setLoggedUsers?currentUserId=" + currentId ,"", onSuccessSendChat, displayErrorMessage) ;
}



