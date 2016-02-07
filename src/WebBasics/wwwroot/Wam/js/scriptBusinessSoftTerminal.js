function SoftTerminalScreen() 
{
   $('#dvContent').load('demo/_softTerminal.html');
 
}
//-------------------------------------------------------------------------------------
function nextTicket() 
{
   ajaxGet('softTerminal/nextTicket', '', displayTicket, displayErrorMessage);
}
//-------------------------------------------------------------------------------------
function displayTicket(wsResponse)
{
  var ticketNo = wsResponse.data.ticketNo;
  var customerName = wsResponse.data.customerName;
  var serviceName = wsResponse.data.serviceName;
  var subServiceName = wsResponse.data.subServiceName;
  var segmentName = wsResponse.data.segmentName;
  var visitTypeName = wsResponse.data.visitTypeName;
  var txtTicketNo = document.getElementById("no");
  var txtCustomerName = document.getElementById("textCustomerName");
  var txtServiceName = document.getElementById("textServiceName");
  var txtSegmentName = document.getElementById("textSegmentName");
  
  var txtVisitName = document.getElementById("textVisitName");
  
  txtTicketNo.value = ticketNo;
  txtCustomerName.value = customerName;
  txtServiceName.value = serviceName;
  txtSegmentName.value = segmentName;
  txtVisitName.value = visitTypeName;
}
/*--------------------------------*/