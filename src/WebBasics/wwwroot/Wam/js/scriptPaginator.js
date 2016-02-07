function displayPaginator (wsResponse, app)
{
  var funcOnSuccess = "paginatedList";
  var funcOnError = "displayErrorMessage";  
  var ajaxCall = '' ;   // pageNumber & jasonCriteria just  place holders that will be replaced using string functions 
  currentApp.pageNo = wsResponse.pagination.currentPage ; 

  //-------------------build ajax calls as strings for paginator buttons -------------------
  if (app.mode == "search" || app.mode == "report" )
  {   
    ajaxCall = ajaxCall + "ajaxReport(" ;
    ajaxCall = ajaxCall +       "'" + app.reportMethod + "'" ;
    ajaxCall = ajaxCall + "," + "'" + app.reportModel + "'" ;
    ajaxCall = ajaxCall + "," + "'jsonCriteria'" ;                        // jsonCriteria is a place holder will be replaced
    ajaxCall = ajaxCall + "," + "onSuccessReportShow"
    ajaxCall = ajaxCall + "," + funcOnError  ;
    ajaxCall = ajaxCall + ")";
  }
  else if (app.parentApp!=null && app.parentApp.dataRecord.id!=0)
  {
    ajaxCall = ajaxCall + "ajaxList(" ;
    ajaxCall = ajaxCall +       "'" + app.serviceName + "/getPaginatedList?" + "'";
    ajaxCall = ajaxCall + "," + "'" + "method=getByParentId" +"&parentId=" + app.parentApp.dataRecord.id + "&page=pageNumber" + "&count=" + recordsPerPage +"'" ;
    ajaxCall = ajaxCall + "," + funcOnSuccess
    ajaxCall = ajaxCall + "," + funcOnError  ;
     ajaxCall = ajaxCall + ")";
  }
  else
  {
    ajaxCall = ajaxCall + "ajaxList(" ;
    ajaxCall = ajaxCall +       "'" + app.serviceName + "/getPaginatedList?" + "'";
    ajaxCall = ajaxCall + "," + "'" + "method=getAll" + "&page=pageNumber" + "&count=" + recordsPerPage +"'" ;
    ajaxCall = ajaxCall + "," + funcOnSuccess
    ajaxCall = ajaxCall + "," + funcOnError  ;
    ajaxCall = ajaxCall + ")";
  }

  //----------------------------------------------------------------------------------------
  //page index is zero based 
  var firstPage = 0 ;  
  var lastPage = parseInt(wsResponse.pagination.totalPageCount) - 1 ; 
  var previuosPage = parseInt(currentApp.pageNo) - 1  ;
  var nextPage = parseInt(currentApp.pageNo) + 1  ; 
  
  $("#bFirst").removeAttr('disabled');
  $("#bNext").removeAttr('disabled');
  $("#bPreviuos").removeAttr('disabled');
  $("#bLast").removeAttr('disabled');
  
  if (nextPage > lastPage)
  {
    $("#bNext").attr('disabled','disabled');
    $("#bLast").attr('disabled','disabled');
  }
  if (previuosPage < firstPage)
  {
    $("#bFirst").attr('disabled','disabled');
    $("#bPreviuos").attr('disabled','disabled');
  }

  $("#bFirst").attr('onclick', ajaxCall.replace("pageNumber", firstPage));
  $("#bPreviuos").attr('onclick', ajaxCall.replace("pageNumber", previuosPage ));
  $("#bNext").attr('onclick', ajaxCall.replace("pageNumber", nextPage ));
  $("#bLast").attr('onclick', ajaxCall.replace("pageNumber", lastPage )); 
  
  //------------------------ set paginator for search and report --------------------
  // pageNo & count will be passed to backend as part of the criteria in a post request
  if (app.mode == "search" || app.mode == "report" )
  {   
      var criteria = app.criteria ; 
      criteria.pageNo = firstPage ;
      var firstPageCriteria = JSON.stringify(app.criteria);
      
      criteria.pageNo = previuosPage ;
      var previuosPageCriteria = JSON.stringify(app.criteria);
      
      criteria.pageNo = nextPage ;
      var nextPageCriteria = JSON.stringify(app.criteria);
      
      criteria.pageNo = lastPage ;
      var lastPageCriteria = JSON.stringify(app.criteria);
      
      $("#bFirst").attr('onclick', ajaxCall.replace("jsonCriteria", firstPageCriteria));
      $("#bPreviuos").attr('onclick', ajaxCall.replace("jsonCriteria", previuosPageCriteria ));
      $("#bNext").attr('onclick', ajaxCall.replace("jsonCriteria", nextPageCriteria ));
      $("#bLast").attr('onclick', ajaxCall.replace("jsonCriteria", lastPageCriteria )); 
  }
}

//-----------------------------------user Paginator ------------------
function displayPaginatorUser(wsResponse, wsMethod, wsParam, funcOnSuccess, funcOnError)
{
  if (!hasPaginatorDisplayed)
  {
    hasPaginatorDisplayed = true;
    var pageCount = wsResponse.pagination.totalPageCount;

    for (var i = 1;i <= pageCount;i++)
    {
      var ajaxCall = "ajaxGet('" + wsMethod + (i - 1) + "'," + wsParam + "," + funcOnSuccess + "," + funcOnError + ")";
      $('#ulPaginator').append($('<li>').append($('<a>').attr('href', '#').attr('onclick', ajaxCall).append(" " + i + " ")));
    }
  }
}
