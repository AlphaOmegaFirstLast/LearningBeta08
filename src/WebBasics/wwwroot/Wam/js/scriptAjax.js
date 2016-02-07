
//---------------------------------------------------------------------------------------------------------
function ajaxGet(methodName, methodParam, successFunc, errorFunc)
{
  $.ajax(
  {
    url : apiPath + methodName, 
    type : "GET", 
    data : methodParam, 
    datatype : "json", //type of data accepted "accept" 
    contentType : "application/json; charset=utf-8", //type of data sent
    success : function (data, status, xhr)
    {
      var wsResponse = data;
      if (wsResponse.status.code == 0)
      {
        successFunc(wsResponse, status, xhr);
      }
      else 
      {
        errorFunc("error code= " + wsResponse.status.code +" " + wsResponse.status.message +" " +wsResponse.status.moreInfo  );
      }    
    },
    error : function (xhr, status, err)
    {
      if (errorFunc != null)
      {
        errorFunc("ajax error: " + err + ". "+ methodName  );
      }
    }
  });
}
//---------------------------------------------------------------------------------------------------------
function ajaxPost(methodName, methodParam, successFunc, errorFunc,stringfy)
{
  var dataToPost = methodParam ;
  if (stringfy==null || stringfy==true )
  {
    dataToPost = JSON.stringify(methodParam) ;
  }  
  $.ajax(
  {
    url : apiPath + methodName, 
    type : "POST", 
    data : dataToPost , 
    datatype : "json",           //type of data accepted "accept" 
    contentType : "application/json; charset=utf-8", //type of data sent
    success : function (data, status, xhr)
    {
      var wsResponse = data;
      if (wsResponse.status.code == 0)
      {
        successFunc(wsResponse, status, xhr);
      }
      else 
      {
        errorFunc("error code= " + wsResponse.status.code +" " + wsResponse.status.message +" " +wsResponse.status.moreInfo  );
      }    
    },
    error : function (xhr, status, err)
    {
      if (errorFunc != null)
      {
        errorFunc("ajax error: " + err + ". "+ methodName  );
      }
    }
  });
}
//---------------------------------------------------------------------------------------------------------
function ajaxAppGet(app,methodName, methodParam, successFunc, errorFunc)
{
  methodName = app.serviceName + methodName ;
  $.ajax(
  {
    url : apiPath + methodName, 
    type : "GET", 
    data : methodParam, 
    datatype : "json", //type of data accepted "accept" 
    contentType : "application/json; charset=utf-8", //type of data sent
    success : function (data, status, xhr)
    {
      var wsResponse = data;
      if (wsResponse.status.code == 0)
      {
        successFunc(wsResponse, app);
      }
      else 
      {
        errorFunc("error code= " + wsResponse.status.code +" " + wsResponse.status.message +" " +wsResponse.status.moreInfo  );
      }    
    },
    error : function (xhr, status, err)
    {
      if (errorFunc != null)
      {
        errorFunc("ajax error: " + err + ". "+ methodName  );
      }
    }
  });
}
//---------------------------------------------------------------------------------------------------------
function ajaxAppPost(app,methodName, methodParam, successFunc, errorFunc,stringfy)
{
  methodName = app.serviceName + methodName ;
  var dataToPost = methodParam ;
  if (stringfy==null || stringfy==true )
  {
    dataToPost = JSON.stringify(methodParam) ;
  }
  
  $.ajax(
  {
    url : apiPath + methodName, 
    type : "POST", 
    data : dataToPost , 
    datatype : "json",           //type of data accepted "accept" 
    contentType : "application/json; charset=utf-8", //type of data sent
    success : function (data, status, xhr)
    {
      var wsResponse = data;
      if (wsResponse.status.code == 0)
      {
        successFunc(wsResponse, app);
      }
      else 
      {
        errorFunc("error code= " + wsResponse.status.code +" " + wsResponse.status.message +" " +wsResponse.status.moreInfo  );
      }    
    },
    error : function (xhr, status, err)
    {
      if (errorFunc != null)
      {
        errorFunc("ajax error: " + err + ". "+ methodName  );
      }
    }
  });
}
//---------------------------------------------------------------------------------------------------------
function ajaxAppList (app , successFunc , errorFunc)
{
  var methodName  = app.serviceName + '/getPaginatedList?method=getAll&page=' + app.pageNo + '&count=' + recordsPerPage ;
  var methodParam = '' ;
  $.ajax(
  {
    url : apiPath + methodName, 
    type : "GET", 
    data : methodParam, 
    datatype : "json", //type of data accepted "accept" 
    contentType : "application/json; charset=utf-8", //type of data sent
    success : function (data, status, xhr)
    {
      var wsResponse = data;
      if (wsResponse.status.code == 0)
      {
         var modifiedWsResponse = modifyWsResponse(wsResponse , app.serviceName) ;          // to overcome jersy bug in serializing arrays of one element
         successFunc(modifiedWsResponse, app);
      }
      else 
      {
        errorFunc("error code= " + wsResponse.status.code +" " + wsResponse.status.message +" " +wsResponse.status.moreInfo  );
      }    
    },
    error : function (xhr, status, err)
    {
      if (errorFunc != null)
      {
        errorFunc("ajax error: " + err + ". "+ methodName  );
      }
    }
  });
}
//---------------------------------------------------------------------------------------------------------
function ajaxAppDetailsList(app, successFunc, errorFunc)
{
  var methodName  = app.serviceName + '/getPaginatedList?method=getByParentId&parentId='+ app.parentApp.dataRecord.id +'&page=' + app.pageNo + '&count=' + recordsPerPage ;
  var methodParam = '' ;
  $.ajax(
  {
    url : apiPath + methodName, 
    type : "GET", 
    data : methodParam, 
    datatype : "json", //type of data accepted "accept" 
    contentType : "application/json; charset=utf-8", //type of data sent
    success : function (data, status, xhr)
    {
      var wsResponse = data;
      if (wsResponse.status.code == 0)
      {
         var modifiedWsResponse = modifyWsResponse(wsResponse , app.serviceName) ;          // to overcome jersy bug in serializing arrays of one element
         successFunc(modifiedWsResponse, app);
      }
      else 
      {
        errorFunc("error code= " + wsResponse.status.code +" " + wsResponse.status.message +" " +wsResponse.status.moreInfo  );
      }    
    },
    error : function (xhr, status, err)
    {
      if (errorFunc != null)
      {
        errorFunc("ajax error: " + err + ". "+ methodName  );
      }
    }
  });
}
//---------------------------------------------------------------------------------------------------------
function ajaxList(method, param , successFunc, errorFunc)
{
  var methodName  = method + param ;
  var methodParam = '' ;
  $.ajax(
  {
    url : apiPath + methodName , 
    type : "GET", 
    data : methodParam, 
    datatype : "json", //type of data accepted "accept" 
    contentType : "application/json; charset=utf-8", //type of data sent
    success : function (data, status, xhr)
    {
      var wsResponse = data;
      if (wsResponse.status.code == 0)
      {
         var modifiedWsResponse = modifyWsResponse(wsResponse , currentApp.serviceName) ;          // to overcome jersy bug in serializing arrays of one element
         successFunc(modifiedWsResponse, currentApp );
      }
      else 
      {
        errorFunc("error code= " + wsResponse.status.code +" " + wsResponse.status.message +" " +wsResponse.status.moreInfo  );
      }    
    },
    error : function (xhr, status, err)
    {
      if (errorFunc != null)
      {
        errorFunc("ajax error: " + err + ". "+ methodName  );
      }
    }
  });
}
//---------------------------------------------------------------------------------------------------------
function ajaxReservationList(serviceName, successFunc, errorFunc, paginatorType, pageNo)
{
  var methodName  = serviceName + '/getPaginatedList?page=' + pageNo + '&count=' + recordsPerPage ;
  var methodParam = '' ;
  $.ajax(
  {
    url : apiPath + methodName, 
    type : "GET", 
    data : methodParam, 
    datatype : "json", //type of data accepted "accept" 
    contentType : "application/json; charset=utf-8", //type of data sent
    success : function (data, status, xhr)
    {
      var wsResponse = data;
      if (wsResponse.status.code == 0)
      {
         var modifiedWsResponse = modifyWsResponse(wsResponse , serviceName) ;          // to overcome jersy bug in serializing arrays of one element
         successFunc(modifiedWsResponse, serviceName, paginatorType );
      }
      else 
      {
        errorFunc("error code= " + wsResponse.status.code +" " + wsResponse.status.message +" " +wsResponse.status.moreInfo  );
      }    
    },
    error : function (xhr, status, err)
    {
      if (errorFunc != null)
      {
        errorFunc("ajax error: " + err + ". "+ methodName  );
      }
    }
  });
}
//---------------------------------------------------------------------------------------------------------
function ajaxDropDown(serviceName, controlId)
{
  var methodName  = serviceName + '/getAll' ;
  var methodParam = '' ;
  $.ajax(
  {
    url : apiPath + methodName, 
    type : "GET", 
    data : methodParam, 
    datatype : "json", //type of data accepted "accept" 
    contentType : "application/json; charset=utf-8", //type of data sent
    success : function (data, status, xhr)
    {
      var wsResponse = data;
      if (wsResponse.status.code == 0)
      {
         var modifiedWsResponse = modifyWsResponse(wsResponse , serviceName) ;          // to overcome jersy bug in serializing arrays of one element
        for (var i = 0;i < modifiedWsResponse.data.records.length;i++)
        {
          var id = modifiedWsResponse.data.records[i].id;
          var name = modifiedWsResponse.data.records[i].name;
          $('#' + controlId).append($('<option/>').val(id).text(name));
        }      
      }
      else 
      {
        displayErrorMessage("error code= " + wsResponse.status.code +" " + wsResponse.status.message +" " +wsResponse.status.moreInfo  );
      }    
    },
    error : function (xhr, status, err)
    {
        displayErrorMessage("ajax error: " + err + ". "+ methodName  );      
    }
  });
}
//---------------------------------------------------------------------------------------------------------
function ajaxReport(method,modelName, methodParam, successFunc, errorFunc)
{
  var serviceName = "reportGenerator";
  var methodName  = serviceName + '/' + method ;
  var dataToPost = methodParam ;

  $.ajax(
  {
    url : apiPath + methodName, 
    type : "POST", 
    data : dataToPost , 
    datatype : "json",           //type of data accepted "accept" 
    contentType : "application/json; charset=utf-8", //type of data sent
    success : function (data, status, xhr)
    {
      var wsResponse = data;
      if (wsResponse.status.code == 0)
      {
         var modifiedWsResponse = modifyWsResponse(wsResponse , modelName) ;          // to overcome jersy bug in serializing arrays of one element
         successFunc(modifiedWsResponse );
      }
      else 
      {
        errorFunc("error code= " + wsResponse.status.code +" " + wsResponse.status.message +" " +wsResponse.status.moreInfo  );
      }    
    },
    error : function (xhr, status, err)
    {
      if (errorFunc != null)
      {
        errorFunc("ajax error: " + err + ". "+ methodName  );
      }
    }
  });
}
//---------------------------------------------------------------------------------------------------------
function modifyWsResponse(wsResponse, serviceName)  // to skip a serialization issue in java web services
{
  //-------------- modify data field -------------------
  if (wsResponse.data[serviceName] == null)  //if no objects at all
  {
    wsResponse.data['records'] = [];
  }
  else 
  {
    var recCount = wsResponse.data[serviceName].length;
    if (recCount != null)  // if array of objects
    {
      wsResponse.data['records'] = wsResponse.data[serviceName];
    }
    else   // if only one object then create an array and push the object
    {
      wsResponse.data['records'] = [];//thank God
      wsResponse.data['records'].push(wsResponse.data[serviceName]);
    }
  }
  //------------ modify pagination -----------------------
   if (wsResponse.pagination == null)//if no objects at all
   {
       wsResponse.pagination = {"currentPage": "0", "totalCount": "0", "totalPageCount": "0" } ;
   }
  //------------ modify report criteria field -------------  //thank God
  if (wsResponse.reportCriteria == null)//if no objects at all
  {
    wsResponse.reportCriteria = 
    {
      "displayFields" : [], "groupBy" : [], "orderBy" : [], "rangeFilters" : [], "valueFilters" : []
    };
  }
  else 
  {
    //------- modify reportCriteria.displayFields -------
    if (wsResponse.reportCriteria.displayFields != null)
    {
      if (wsResponse.reportCriteria.displayFields.length != null)// if array of objects
      {
        // do nothing
      }
      else // if only one object then create an array and push the object
      {
        var temp = wsResponse.reportCriteria.displayFields;
        wsResponse.reportCriteria.displayFields = [];
        wsResponse.reportCriteria.displayFields.push(temp);
      }
    }
    else
    {
      wsResponse.reportCriteria.displayFields = [] ;
    }
    //------- modify reportCriteria.groupBy -------
    if (wsResponse.reportCriteria.groupBy != null)
    {
      if (wsResponse.reportCriteria.groupBy.length != null)// if array of objects
      {
        // do nothing
      }
      else // if only one object then create an array and push the object
      {
        var temp = wsResponse.reportCriteria.groupBy;
        wsResponse.reportCriteria.groupBy = [];
        wsResponse.reportCriteria.groupBy.push(temp);
      }
    }
    else
    {
      wsResponse.reportCriteria.groupBy = [] ;
    }
    //------- modify reportCriteria.orderBy -------
    if (wsResponse.reportCriteria.orderBy != null)
    {
      if (wsResponse.reportCriteria.orderBy.length != null)// if array of objects
      {
        // do nothing
      }
      else // if only one object then create an array and push the object
      {
        var temp = wsResponse.reportCriteria.orderBy;
        wsResponse.reportCriteria.orderBy = [];
        wsResponse.reportCriteria.orderBy.push(temp);
      }
    }
    else
    {
      wsResponse.reportCriteria.orderBy = [] ;
    }
    //------- modify reportCriteria.rangeFilters -------
    if (wsResponse.reportCriteria.rangeFilters != null)
    {
      if (wsResponse.reportCriteria.rangeFilters.length != null)// if array of objects
      {
        // do nothing
      }
      else // if only one object then create an array and push the object
      {
        var temp = wsResponse.reportCriteria.rangeFilters;
        wsResponse.reportCriteria.rangeFilters = [];
        wsResponse.reportCriteria.rangeFilters.push(temp);
      }
    }
    else
    {
      wsResponse.reportCriteria.rangeFilters = [] ;
    }
    //------- modify reportCriteria.rangeFilters -------
    if (wsResponse.reportCriteria.valueFilters != null)
    {
      if (wsResponse.reportCriteria.valueFilters.length != null)// if array of objects
      {
        // do nothing
      }
      else // if only one object then create an array and push the object
      {
        var temp = wsResponse.reportCriteria.valueFilters;
        wsResponse.reportCriteria.valueFilters = [];
        wsResponse.reportCriteria.valueFilters.push(temp);
      }
    }
    else
    {
      wsResponse.reportCriteria.valueFilters = [] ;
    }

    
  }  
  return wsResponse;
}
//-------------------------------------------------------
function ajaxGetDataRecord(methodName,modelName, methodParam, successFunc, errorFunc)
{
 $.ajax(
 {
   url : apiPath + methodName, 
   type : "GET", 
   data : methodParam, 
   datatype : "json", //type of data accepted "accept" 
   contentType : "application/json; charset=utf-8", //type of data sent
   success : function (data, status, xhr)
   {
     var wsResponse = data;
     if (wsResponse.status.code == 0)
     {
       var modifiedWsResponse = modifyWsResponse(wsResponse , modelName) ;      
       successFunc(modifiedWsResponse, status, xhr);
     }
     else 
     {
       errorFunc("error code= " + wsResponse.status.code +" " + wsResponse.status.message +" " +wsResponse.status.moreInfo  );
     }    
   },
   error : function (xhr, status, err)
   {
     if (errorFunc != null)
     {
       errorFunc("ajax error: " + err + ". "+ methodName  );
     }
   }
 });
}
//---------------------------------------------------------------------------------------------------------
function ajaxDropDownByParentId(serviceName, controlId,parentId)
{
  var methodName  = serviceName + '/getByParentId?parentId='+parentId;
  var methodParam = '' ;
  $.ajax(
  {
    url : apiPath + methodName, 
    type : "GET", 
    data : methodParam, 
    datatype : "json", //type of data accepted "accept" 
    contentType : "application/json; charset=utf-8", //type of data sent
    success : function (data, status, xhr)
    {
      var wsResponse = data;
      if (wsResponse.status.code == 0)
      {
         var modifiedWsResponse = modifyWsResponse(wsResponse , serviceName) ;          // to overcome jersy bug in serializing arrays of one element
        for (var i = 0;i < modifiedWsResponse.data.records.length;i++)
        {
          var id = modifiedWsResponse.data.records[i].id;
          var name = modifiedWsResponse.data.records[i].name;
          $('#' + controlId).append($('<option/>').val(id).text(name));
        }      
      }
      else 
      {
        displayErrorMessage("error code= " + wsResponse.status.code +" " + wsResponse.status.message +" " +wsResponse.status.moreInfo  );
      }    
    },
    error : function (xhr, status, err)
    {
        displayErrorMessage("ajax error: " + err + ". "+ methodName  );      
    }
  });
}
function ajaxGetByParentId(methodName,parentId,modelName, methodParam, successFunc, errorFunc)
{
  methodName  = methodName + '?'+ 'parentId='+parentId ;
  $.ajax(
  {
    url : apiPath + methodName, 
    type : "GET", 
    data : methodParam, 
    datatype : "json", //type of data accepted "accept" 
    contentType : "application/json; charset=utf-8", //type of data sent
    success : function (data, status, xhr)
    {
      var wsResponse = data;
      if (wsResponse.status.code == 0)
      {
         var modifiedWsResponse = modifyWsResponse(wsResponse , modelName) ;          // to overcome jersy bug in serializing arrays of one element
         successFunc(modifiedWsResponse,parentId);
      }
      else 
      {
        errorFunc("error code= " + wsResponse.status.code +" " + wsResponse.status.message +" " +wsResponse.status.moreInfo  );
      }    
    },
    error : function (xhr, status, err)
    {
      if (errorFunc != null)
      {
        errorFunc("ajax error: " + err + ". "+ methodName  );
      }
    }
  });
}
//---------------------------------------------------------------------------------------------------------


