function VisualRequestBuilder()
{ 
  initVisualRequest();
  ajaxGetDataRecord('service/getAll',"service",'',GenerateService, displayErrorMessage); 
 
}
//------------------------------------------------------------------------------------------------------------

function GenerateService(wsResponse)
{
   $('#dvContent').load('demo/_vrService.html', function ()
   {
      
     var recCount =   wsResponse.data.records.length;
     if (recCount != null)
     { 
          var table = document.getElementById("tblService");  
          for (var i = 0;i < wsResponse.data.records.length;i++)
          {
            var name = wsResponse.data.records[i].name.trim() ;
            var serviceId = wsResponse.data.records[i].id ;
            var row = table.insertRow(i);
            var cell = row.insertCell(0);
            cell.innerHTML =  '<input type="button"  class = "buttonvisualrequest" value="'+ name +'" onclick="GetSubService(' + serviceId + ')" />';
            cell.className =  "buttonvisualrequest" ;
          }
      }

  });
  
}
/*--------------------------------*/
function GetSubService(serviceId)
{
  visualRequest.serviceId = serviceId ;
  ajaxGetByParentId('subService/getByParentId',serviceId,"subService", '', GenerateSubService, displayErrorMessage)  
}
/*--------------------------------*/
function GenerateSubService(wsResponse,serviceId)
{
   $('#dvContent').load('demo/_vrSubService.html', function ()
   {
      
     var recCount =   wsResponse.data.records.length;
     if (recCount != null)
     { 
          var table = document.getElementById("tblSubService");  
          for (var i = 0;i < wsResponse.data.records.length;i++)
          {
            var name = wsResponse.data.records[i].name.trim() ;
            var subserviceId = wsResponse.data.records[i].id ;
            var row = table.insertRow(i);
            var cell = row.insertCell(0);
            //cell.innerHTML =  '<input type="button" value="'+ name +'"/>';
            cell.innerHTML =  '<input type="button" class = "buttonvisualrequest" value="'+ name +'" onclick="GetVisitType(' + serviceId + ' ,' + subserviceId + ')"/>';
            cell.className =  "buttonvisualrequest" ;
          }
      }

  });
  
}
/*--------------------------------*/
function OnBack()
{
  VisualRequestBuilder() ;
}
/*--------------------------------*/
function GetVisitType(serviceId,subServiceId)
{
  visualRequest.subServiceId = subServiceId ;
  ajaxGetDataRecord('visitType/getAll',"visitType",'',GenerateVisitType, displayErrorMessage); 
}
/*--------------------------------*/
function GenerateVisitType(wsResponse)
{
   $('#dvContent').load('demo/_vrVisitType.html', function ()
   {
      
     var recCount =   wsResponse.data.records.length;
     if (recCount != null)
     { 
          var table = document.getElementById("tblVisitType");  
          for (var i = 0;i < wsResponse.data.records.length;i++)
          {
            var name = wsResponse.data.records[i].name.trim() ;
            var visitTypeId = wsResponse.data.records[i].id ;
            var row = table.insertRow(i);
            var cell = row.insertCell(0);
            cell.innerHTML =  '<input type="button" class = "buttonvisualrequest" value="'+ name +'"/>';
            cell.className =  "buttonvisualrequest" ;
          }
      }

  });
  
}
/*--------------------------------*/