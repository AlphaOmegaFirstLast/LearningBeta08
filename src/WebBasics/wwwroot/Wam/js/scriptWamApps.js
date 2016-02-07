function getAgents()   
{
  var app = {};
      app.title = "Agents" ;
      app.serviceName = "agent" ;
      app.detailsCaption = "Agent Services";
      
      app.menuItemSearch = "searchAgent" ;             //related menuItem for search 
      app.menuItemReport = "reportAgent" ;             //related menuItem for report
      
      app.reportMethod = "getAgentReports" ;           //used for search & report   
      app.reportModel = "agent" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      
      app.navigatorType = "master" ;
      app.paginatorType = "basic" ;
      
      app.controlsPerColumn = 100 ;
      app.htmlPage = null ;                                // for static content pages
      app.pageNo = 0 ;                                     // page index is zero based
      app.dataRecord = {id:0} ;             // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;                // basic screen will have this parameter passed as null
      app.childApp = null ;                 // basic screen will have this parameter passed as null
      
      app.fieldsDefinition = 
      {
        'editFields' : [
         {caption : 'Type', type : 'select', dbName:'agentTypeId', lookupService:'agentType'}
        ,{caption : 'Name', type : 'text', dbName:'name'}
        ,{caption : 'Login Name', type : 'text', dbName:'loginName'}
        ,{caption : 'Password', type : 'text', dbName:'password'}
        ,{caption : 'Email', type : 'text', dbName:'email'}
        ,{caption : 'Mobile', type : 'text', dbName:'mobile'}
        ]
      };
      app.reportFields = 
      {
        'displayFields' : [
                 {caption : 'Agent type' , dbName:'agentTypeId', dbLookup:'lookup_AgentType_Name', width:100}
                ,{caption : 'Name' , dbName:'name' , width:100}
                ,{caption : 'Login Name' , dbName:'loginName', width:100}
                ,{caption : 'Password', dbName:'password' , width:100}
                ,{caption : 'Email' , dbName:'email', width:100}
                ,{caption : 'Mobile', dbName:'mobile' , width:100}
        ]
        ,
        'valueFiltersFields' : [
                 {caption : 'Agent Type',  type : 'select', dbName:'agentTypeId', lookupService:'agentType' , dbLookup:'lookup_AgentType_Name'}
                ,{caption: 'Name', type : 'text', dbName:'name' }
        ]
        ,
        'rangeFiltersFields' : [
        ]
        ,
        'groupByFields' : [
                          {caption : 'Agent Type', dbName:'agentTypeId', dbLookup:'lookup_AgentType_Name'}
        ]
        ,
        'orderByFields' : [
                {caption : 'Name', dbName:'name'}
                ,{caption : 'Agent Type', dbName:'agentTypeId', dbLookup:'lookup_AgentType_Name'}
        ]
      };
  return app ;
}
//----------------------------------------------------------------------------

function getSegments()
{
  var app = {};
      app.title = "Segmentation" ;
      app.serviceName = "segment" ;
      app.detailsCaption = "Segment Services";
      
      app.menuItemSearch = "searchSegment" ;             //related menuItem for search 
      app.menuItemReport = "reportSegment" ;             //related menuItem for report
      
      app.reportMethod = "getSegmentReports" ;           //used for search & report   
      app.reportModel = "segment" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
      
      app.navigatorType = "basic" ;
      app.paginatorType = "basic" ;
      
      app.controlsPerColumn = 100 ;
      app.htmlPage = null ;                                // for static content pages
      app.pageNo = 0 ;                                     // page index is zero based
      app.dataRecord = {id:0} ;             // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;                // basic screen will have this parameter passed as null
      app.childApp = null ;                 // basic screen will have this parameter passed as null
      
      
     app.fieldsDefinition = 
      {
        'editFields' : [{caption : 'Segmentation', type : 'text', dbName:'name'}]
      };
     app.reportFields = 
      {
       'displayFields' : 
        [
          {caption : 'Segmentation', dbName:'name', width : 300}
        ]
        ,
        'valueFiltersFields' : [
        {caption : 'Segmentation', type : 'text', dbName:'name'}
        ]
        ,
        'rangeFiltersFields' : [
        ]
        ,
        'groupByFields' : []
        ,
        'orderByFields' : [
          {caption : 'Name', dbName:'name'}
        ]
      };
      
   return app ;
}

function getErrorType()
{
var app = {};
      app.title = "Error Type" ;
      app.serviceName = "errorType" ;
      
       app.menuItemSearch = "searchErrorType" ;             //related menuItem for search 
      app.menuItemReport = "reportErrorType" ;             //related menuItem for report
      
      app.reportMethod = "getErrorTypeReports" ;           //used for search & report   
      app.reportModel = "errorType" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
      
      app.navigatorType = "basic" ;
      app.paginatorType = "basic" ;
      app.controlsPerColumn = 100 ;
      app.pageNo = 0 ;                          // page index is zero based
      app.htmlPage = null ;                     // for static content pages
      app.dataRecord = {id:0} ;             // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;               // basic screen will have this parameter passed as null
      app.childApp = null ;
      
      app.fieldsDefinition = 
      {
        'editFields' : [ 
        
        {caption : 'Name', type : 'text',dbName:'name'}
        ]
      };
      
      app.reportFields = 
      {
        'displayFields' : [
        {caption : 'Error Type' , dbName:'name', width:100}
        ]
         ,
        'valueFiltersFields' : [
        {caption : 'Name', type : 'text',dbName:'name'}
        ]
        ,
        'rangeFiltersFields' : [
        ]
        ,
        'groupByFields' : []
        ,
        'orderByFields' : [
          {caption : 'Name', dbName:'name'}
        ]
      };
      
       return app;
}

function getErrorList()
{
var app = {};
      app.title = "Error List" ;
      app.serviceName = "errorList" ;
      
       app.menuItemSearch = "searchErrorList" ;             //related menuItem for search 
      app.menuItemReport = "reportErrorList" ;             //related menuItem for report
      
      app.reportMethod = "getErrorListReports" ;           //used for search & report   
      app.reportModel = "errorList" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
      
      app.navigatorType = "basic" ;
      app.paginatorType = "basic" ;
      
      app.controlsPerColumn = 100 ;
      app.pageNo = 0 ;                          // page index is zero based
      app.htmlPage = null ;                     // for static content pages
      app.dataRecord = {id:0} ;             // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;               // basic screen will have this parameter passed as null
      app.childApp = null ;
      
      app.fieldsDefinition = 
      {
        'editFields' : [ 
        
        {caption : 'Error Type', type : 'select',dbName:'errorTypeId', lookupService:'errorType'}
        ,{caption : 'Num', type : 'text',dbName:'num'}
        ,{caption : 'Name', type : 'text',dbName:'name'}
        ,{caption : 'Message', type : 'text',dbName:'message'}
        ]
      };
      
      app.reportFields = 
      {
        'displayFields' : [
        {caption : 'Error Type' , dbName:'errorTypeId', dbLookup:'lookup_ErrorType_Name', width:100}
        ,{caption : 'Num' , dbName:'num', width:100}
         ,{caption : 'Name' , dbName:'name', width:100}
          ,{caption : 'Message' , dbName:'message', width:100}
        ]
         ,
        'valueFiltersFields' : [
        {caption : 'Error Type', type : 'select',dbName:'errorTypeId', lookupService:'errorType', dbLookup:'lookup_ErrorType_Name'}
        ,{caption : 'Name', type : 'text',dbName:'name'}
        ,{caption : 'Num', type : 'text',dbName:'num'}
        ]
        ,
        'rangeFiltersFields' : [
        ]
        ,
        'groupByFields' : [
        {caption : 'Error Type' , dbName:'errorTypeId', dbLookup:'lookup_ErrorType_Name'}
        ]
        ,
        'orderByFields' : [
        {caption : 'Name', dbName:'name'}
        ,{caption : 'Error Type' , dbName:'errorTypeId', dbLookup:'lookup_ErrorType_Name'}
        ]
      };
      
       return app;
}


function getSystemFunctions()
{
var app = {};
      app.title = "System Functions" ;
      app.serviceName = "systemFunction" ;
      
      app.menuItemSearch = "searchSystemFunction" ;             //related menuItem for search 
      app.menuItemReport = "reportSystemFunction" ;             //related menuItem for report
      
      app.reportMethod = "getSystemFunctionReports" ;           //used for search & report   
      app.reportModel = "systemFunction" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
      
      app.navigatorType = "basic" ;
      app.paginatorType = "basic" ;
      
      app.controlsPerColumn = 100 ;
      app.pageNo = 0 ;                          // page index is zero based
      app.htmlPage = null ;                     // for static content pages
      app.dataRecord = {id:0} ;             // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;               // basic screen will have this parameter passed as null
      app.childApp = null ;
      
      app.fieldsDefinition = 
      {
        'editFields' : [ 
        
        {caption : 'Name', type : 'text',dbName:'name'}
        ]
      };
      
      app.reportFields = 
      {
        'displayFields' : [
        {caption : 'Name' , dbName:'name', width:100}
        ]
         ,
        'valueFiltersFields' : []
        ,
        'rangeFiltersFields' : []
        ,
        'groupByFields' : []
        ,
        'orderByFields' : [
          {caption : 'Name', dbName:'name'}
        ]
      };
      
       return app;
}

function getAgentTypes()
{
  var app = {};
      app.title = "Agent Type" ;
      app.serviceName = "agentType" ;
      
      app.menuItemSearch = "searchAgentType" ;             //related menuItem for search 
      app.menuItemReport = "reportAgentType" ;             //related menuItem for report
      
      app.reportMethod = "getAgentTypeReports" ;           //used for search & report   
      app.reportModel = "agentType" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
      
      app.navigatorType = "basic" ;
      app.paginatorType = "basic" ;
      
      app.controlsPerColumn = 100 ;
      app.pageNo = 0 ;                          // page index is zero based
      app.htmlPage = null ;                     // for static content pages
      app.dataRecord = {id:0} ;             // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;               // basic screen will have this parameter passed as null
      app.childApp = null ;               // basic screen will have this parameter passed as null
       
      app.fieldsDefinition = 
      {
        'editFields' : [{caption: 'Agent Type', dbName:'name', type : 'text'}]
      };
      app.reportFields = 
      {
        'displayFields' : [
        {caption : 'Agent Type', dbName:'name', width : 300}
        ]
         ,
        'valueFiltersFields' : [
        {caption: 'Agent Type', dbName:'name', type : 'text'}
        ]
        ,
        'rangeFiltersFields' : [
        ]
        ,
        'groupByFields' : []
        ,
        'orderByFields' : [
        {caption : 'Name', dbName:'name'}
        ]
      };
  return app ;
}

function getServices()
{
  var app = {};
      app.title = "Services" ;
      app.serviceName = "service" ;
      app.detailsCaption = "SubServices";
      
      app.menuItemSearch = "searchService" ;             //related menuItem for search 
      app.menuItemReport = "reportService" ;             //related menuItem for report
      
      app.reportMethod = "getServiceReports" ;           //used for search & report   
      app.reportModel = "service" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
      
      app.navigatorType = "master" ;
      app.paginatorType = "basic" ;
      
      app.controlsPerColumn = 100 ;
      app.pageNo = 0 ;                      // page index is zero based
      app.htmlPage = null ;                 // for static content pages
      app.dataRecord = {id:0} ;             // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;               // basic screen will have this parameter passed as null
      app.childApp = null ;               // basic screen will have this parameter passed as null
     
      app.fieldsDefinition = 
      {
        'editFields' : [
        {caption : 'Name', type : 'text', dbName:'name'} 
        ,{caption : 'Prefix Identifier', type : 'text', dbName:'prefixIdentifier'}

        ]
      };

      app.reportFields = 
      {
        'displayFields' : [
        {caption : 'Name',  dbName:'name' , width:100}
        ,{caption : 'Prefix Identifier', dbName:'prefixIdentifier' , width:100} 
        ]
         ,
        'valueFiltersFields' : [
        {caption : 'Name', type : 'text', dbName:'name'} 
        ]
        ,
        'rangeFiltersFields' : [
        ]
        ,
        'groupByFields' : []
        ,
        'orderByFields' : [
        {caption : 'Name', dbName:'name'}
        ]
      };
 return app ;
}

function getSubServices()
{
  var app = {};
      app.title = "Sub Services" ;
      app.serviceName = "subService" ;
      app.masterCaption = "Services";
     // app.navigatorType = "master_details"  ;
     
     app.menuItemSearch = "searchSubService" ;             //related menuItem for search 
      app.menuItemReport = "reportSubService" ;             //related menuItem for report
      
      app.reportMethod = "getSubServiceReports" ;           //used for search & report   
      app.reportModel = "subService" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
      
      app.paginatorType = "basic" ;
      
      app.controlsPerColumn = 100 ;

     // app.detailsCaption = "Default Number Range Service Mode";
      app.pageNo = 0 ;                      // page index is zero based
      app.htmlPage = null ;                 // for static content pages
      app.dataRecord = {id:0} ;             // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;               // basic screen will have this parameter passed as null
      app.childApp = null ;               // basic screen will have this parameter passed as null
          
      app.fieldsDefinition = 
      {
        'editFields' : [
         {caption : 'Service', type : 'text', dbName:'name' , parentField:'true'}
        ,{caption : 'Name', type : 'text', dbName:'name'} 
        ,{caption : 'Prefix Identifier', type : 'text', dbName:'prefixIdentifier'}

        ]
      };

      app.reportFields = 
      {
        'displayFields' : [
        {caption : 'Name',  dbName:'name' , width:100}
        ,{caption : 'Prefix Identifier', dbName:'prefixIdentifier' , width:100} 

        ]
         ,
        'valueFiltersFields' : [
        {caption : 'Service',  type : 'select', dbName:'serviceId', lookupService:'service' , dbLookup:'lookup_Service_Name'}
        ,{caption : 'Name', type : 'text', dbName:'name'}
        ]
        ,
        'rangeFiltersFields' : [
        ]
        ,
        'groupByFields' : [
        {caption : 'Service', dbName:'name' ,dbLookup:'lookup_Service_Name'}
        ]
        ,
        'orderByFields' : [
        {caption : 'Name', dbName:'name'}
          ,{caption : 'Service', dbName:'name' ,dbLookup:'lookup_Service_Name'}
          
        ]
      };
 return app ;
}

function getAreas()
{
  var app = {};
      app.title = "Areas" ;
      app.serviceName = "area" ;
      
      app.menuItemSearch = "searchArea" ;             //related menuItem for search 
      app.menuItemReport = "reportArea" ;             //related menuItem for report
      
      app.reportMethod = "getAreaReports" ;           //used for search & report   
      app.reportModel = "area" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
      
      app.navigatorType = "master" ;
      app.paginatorType = "basic" ;
      
      app.controlsPerColumn = 100 ;
      app.detailsCaption = "Branches";
      app.pageNo = 0 ;                          // page index is zero based
      app.htmlPage = null ;                     // for static content pages
      app.dataRecord = {id:0} ;             // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;               // basic screen will have this parameter passed as null
      app.childApp = null ;               // basic screen will have this parameter passed as null
      
      app.fieldsDefinition = 
      {
        'editFields' : [{caption : 'Area', type : 'text', dbName:'name'}]
      };
      app.reportFields = 
      {
        'displayFields' : [{caption : 'Area', dbName:'name', width : 300}
        ]
           ,
        'valueFiltersFields' : [
        {caption : 'Area', type : 'text', dbName:'name'}
        ]
        ,
        'rangeFiltersFields' : [
        ]
        ,
        'groupByFields' : []
        ,
        'orderByFields' : [
        {caption : 'Name', dbName:'name'}
        ]
      };
   return app ;    
}

function getBranches()
{
  var app = {};
      app.title = "Branches" ;
      app.serviceName = "branch" ;
      app.masterCaption = "Areas";
      app.detailsCaption = "Work Stations";
      
      app.menuItemSearch = "searchBranch" ;             //related menuItem for search 
      app.menuItemReport = "reportBranch" ;             //related menuItem for report
      
      app.reportMethod = "getBranchReports" ;           //used for search & report   
      app.reportModel = "branch" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
      
      app.navigatorType = "master_details" ;
      app.paginatorType = "basic" ;
      
      app.controlsPerColumn = 100 ;
      
      app.pageNo = 0 ;                          // page index is zero based
      app.htmlPage = null ;                     // for static content pages
      app.dataRecord = {id:0} ;             // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;               // basic screen will have this parameter passed as null
      app.childApp = null ;               // basic screen will have this parameter passed as null
      
      app.fieldsDefinition = 
      {
        'editFields' : [
         {caption : 'Area', type : 'text',dbName:'name' , parentField:'true'}
        ,{caption : 'Name', type : 'text', dbName:'name'}
        ,{caption : 'Address', type : 'text', dbName:'address'}
        ,{caption : 'Tel1', type : 'text', dbName:'tel1'}
        ,{caption : 'Tel2', type : 'text', dbName:'tel2'}
        ,{caption : 'Fax', type : 'text', dbName:'fax'}
        ,{caption : 'Email', type : 'text', dbName:'email'}
        ]
      };
      app.reportFields = 
      {
        'displayFields' : [
        //{caption : 'Area',dbName:'name', dbLookup:'lookup_Area_Name', width:100}
        {caption : 'Name', dbName:'name', width : 100}
        ,{caption : 'Address', dbName:'address', width : 300}
        ,{caption : 'Tel1', dbName:'tel1', width : 100}
        ,{caption : 'Tel2', dbName:'tel2', width : 100}
        ,{caption : 'Fax', dbName:'fax', width : 100}
        ,{caption : 'Email', dbName:'email', width : 100}
        ]
             ,
        'valueFiltersFields' : [
        {caption : 'area',  type : 'select', dbName:'areaId', lookupService:'area' , dbLookup:'lookup_Area_Name'}
        ,{caption : 'Name', type : 'text', dbName:'name'}
        ]
        ,
        'rangeFiltersFields' : [
        ]
        ,
        'groupByFields' : [
        {caption : 'Area',dbName:'name', dbLookup:'lookup_Area_Name'}
        ]
        ,
        'orderByFields' : [
          {caption : 'Name', dbName:'name'}
        ]
      };
  return app ;     
}

function getWorkstations()
{
  var app = {};
      app.title = "Work Stations" ;
      app.serviceName = "workStation" ;
      app.masterCaption = "Branches";
      
      app.menuItemSearch = "searchWorkStation" ;             //related menuItem for search 
      app.menuItemReport = "reportWorkStation" ;             //related menuItem for report
      
      app.reportMethod = "getWorkStationReports" ;           //used for search & report   
      app.reportModel = "workStation" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
      
      app.navigatorType = "details" ;
      app.paginatorType = "basic" ;
      
      app.controlsPerColumn = 100 ;
      app.pageNo = 0 ;                          // page index is zero based
      app.htmlPage = null ;                     // for static content pages
      app.dataRecord = {id:0} ;             // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;               // basic screen will have this parameter passed as null
      app.childApp = null ;               // basic screen will have this parameter passed as null
      
      app.fieldsDefinition = 
      {
        'editFields' : [
        {caption : 'Branch', type : 'text',dbName:'name' , parentField:'true'}
        ,{caption : 'WorkStation', type : 'text',dbName:'name'}
        
        ]
      };
      app.reportFields = 
      {
        'displayFields' : [
        {caption : 'WorkStation',dbName:'name' , width:100}        
        ]
              ,
        'valueFiltersFields' : [
        {caption : 'branch',  type : 'select', dbName:'branchId', lookupService:'branch' , dbLookup:'lookup_Branch_Name'}
        ,{caption: 'Name', type : 'text', dbName:'name' }
        ]
        ,
        'rangeFiltersFields' : []
        ,
        'groupByFields' : []
        ,
        'orderByFields' : [
          {caption : 'Name', dbName:'name'}
        ]
      };
 return app ;
}

function getVisitTypes()
{
  var app = {};
      app.title = "Visit Type" ;
      app.serviceName = "visitType" ;
      
      app.menuItemSearch = "searchVisitType" ;             //related menuItem for search 
      app.menuItemReport = "reportVisitType" ;             //related menuItem for report
      
      app.reportMethod = "getVisitTypeReports" ;           //used for search & report   
      app.reportModel = "visitType" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
      
      app.navigatorType = "basic" ;
      app.paginatorType = "basic" ;
      
      app.controlsPerColumn = 100 ;
      app.pageNo = 0 ;                          // page index is zero based
      app.htmlPage = null ;                     // for static content pages
      app.dataRecord = {id:0} ;                // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;                  // basic screen will have this parameter passed as null
      app.childApp = null ;                   // basic screen will have this parameter passed as null
      app.fieldsDefinition = 
      {
        'editFields' : [
        {caption : 'Visit Type', type : 'text', dbName:'name'}]
      };
      app.reportFields = 
      {
        'displayFields' : [
        {caption : 'Visit Type', dbName:'name', width : 300}
        ]
               ,
        'valueFiltersFields' : [
        {caption: 'Name', type : 'text', dbName:'name' }
        ]
        ,
        'rangeFiltersFields' : []
        ,
        'groupByFields' : []
        ,
        'orderByFields' : [
          {caption : 'Name', dbName:'name'}
        ]
      };
  return app ;
}

function getStandSchMaster()
{
    var app = {};
      app.title = "Standard Schedule" ;
      app.serviceName = "standSch" ;
      app.detailsCaption = "Standard Schedule Entry";
      
      app.menuItemSearch = "searchStandSch" ;             //related menuItem for search 
      app.menuItemReport = "reportStandSch" ;             //related menuItem for report
      
      app.reportMethod = "getStandSchReports" ;           //used for search & report   
      app.reportModel = "standSch" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
      
      app.navigatorType = "master" ;
      app.paginatorType = "basic" ;
      
      app.controlsPerColumn = 5 ;
      app.pageNo = 0 ;                          // page index is zero based
      app.htmlPage = null ;                     // for static content pages
      app.dataRecord = {id:0} ;                // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;                  // basic screen will have this parameter passed as null
      app.childApp = null ;                   // basic screen will have this parameter passed as null


 app.fieldsDefinition = 
      {
         'editFields' : [
        {caption : 'Branch', type : 'select', dbName:'branchId', lookupService:'branch'}
        ,{caption : 'Schedule', type : 'text', dbName:'name'}
        ,{caption : 'Active From', type : 'text', dbName:'startDate'}
        ,{caption : 'To', type : 'text', dbName:'endDate'}
        ,{caption : 'Weeks/Cycle', type : 'text', dbName:'cycleWeeks'}
        ,{caption : 'Start Day Of Week', type : 'text', dbName:'startDayOfWeek'}
        ,{caption : ' ', type : 'none'}
        ,{caption : ' ', type : 'none'}
        ,{caption : ' ', type : 'none'}
        ,{caption : 'Default', type :'checkbox', dbName:'defaultFlag'}
       ]
      };

     app.reportFields = 
      {
        'displayFields' : [
        {caption : 'Branch', dbName:'branchId', dbLookup:'lookup_Branch_Name'}
        ,{caption : 'Schedule', dbName:'name'}
        ,{caption : 'Active From', dbName:'startDate'}
        ,{caption : 'To', dbName:'endDate'}
        ,{caption : 'Weeks/Cycle', dbName:'cycleWeeks'}
        ,{caption : 'Start Day Of Week', dbName:'startDayOfWeek'}
        ]
        ,
        'valueFiltersFields' : []
        ,
        'rangeFiltersFields' : []
        ,
        'groupByFields' : []
        ,
        'orderByFields' : [
          {caption : 'Name', dbName:'name'}
        ]
      };
       return app ;
}

function getStandSchDetail()
{

var app = {};
      app.title = "Standard Schedule Entry" ;
      app.serviceName = "standSchEntry" ;
      app.masterCaption = "Standard Schedule";
     // app.detailsCaption = "Standard Schedule Entry Service";
     
     app.menuItemSearch = "searchStandSchEntry" ;             //related menuItem for search 
      app.menuItemReport = "reportStandSchEntry" ;             //related menuItem for report
      
      app.reportMethod = "getStandSchEntryReports" ;           //used for search & report   
      app.reportModel = "standSchEntry" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
     
     app.navigatorType = "master_details" ;
      app.paginatorType = "basic" ;
      
      app.controlsPerColumn = 5 ;
      app.pageNo = 0 ;                          // page index is zero based
      app.htmlPage = null ;                     // for static content pages
      app.dataRecord = {id:0} ;                // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;                  // basic screen will have this parameter passed as null
      app.childApp = null ;                   // basic screen will have this parameter passed as null

 app.fieldsDefinition = 
      {
         'editFields' : [
      {caption : 'Schedule', type : 'text', dbName:'name', parentField:'true'}

        ,{caption : 'Day Of Week', type : 'text', dbName:'dayOfWeek'}
        
        ,{caption : 'Agent', type : 'select', dbName:'agentId', lookupService:'agent'}
        ,{caption : 'Start Time', type : 'text', dbName:'startTime'}
        ,{caption : 'End Time', type : 'text', dbName:'endTime'}
        ,{caption : 'Branch', type : 'text',dbName:'lookup_Branch_Name' , parentField:'true'}
        ,{caption : 'Default WorkStation', type : 'select', dbName:'workstationId', lookupService:'workStation'}
        

        ,{caption : 'Customer Max Number', type : 'text', dbName:'customerMaxNo'}
        ,{caption : 'Every Week', type : 'radio', additional:'none'}
        ,{caption : 'Specific Week', type : 'radio', additional:'none'}
        ,{caption : ' ', type : 'none'}
        
        ,{caption : ' ', type : 'none'}
        ,{caption : ' ', type : 'none'}
        ,{caption : ' ', type : 'none'}
        ,{caption : ' ', type : 'none'}
        ,{caption : 'Standard Schedule Entry Services / Default No. Range (Agent Mode)', type : 'button'}
        
        ]
      };

      app.reportFields = 
      {
        'displayFields' : [
        {caption : 'Agent' , width:100, dbName:'agentId', dbLookup:'lookup_Agent_Name'}
      //  ,{caption : 'Day Of Week' , width:80, dbName:'dayOfWeek'}
        ,{caption : 'Start Time' , width:30, dbName:'startTime'}
        ,{caption : 'End Time' , width:30, dbName:'endTime'}
        ,{caption : 'Customer Max Number' , width:50, dbName:'customerMaxNo'}
        ,{caption : 'Default WorkStation' , width:80, dbName:'workstationId' ,dbLookup:'lookup_Workstation_Name'}
        ]
         ,
        'valueFiltersFields' : []
        ,
        'rangeFiltersFields' : []
        ,
        'groupByFields' : []
        ,
        'orderByFields' : [
          {caption : 'Name', dbName:'name'}
        ]
      };
       return app ;
}

function getServicesDefaultNumberRangeAgentModeStandSchEntrySrvcs()
{

var app = {};
      app.title = "Standard Schedule Entry Services" ;
      app.serviceName = "standSchEntrySrvc" ;
      app.masterCaption = "Standard Schedule Entry";
       
      app.menuItemSearch = "searchStandSchEntrySrvc" ;             //related menuItem for search 
      app.menuItemReport = "reportStandSchEntrySrvc" ;             //related menuItem for report
      
      app.reportMethod = "getStandSchEntrySrvcReports" ;           //used for search & report   
      app.reportModel = "standSchEntrySrvc" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
      
      app.navigatorType = "details" ;
      app.paginatorType = "basic" ;
      
      app.controlsPerColumn = 100 ;
      app.pageNo = 0 ;                          // page index is zero based
      app.htmlPage = null ;                     // for static content pages
      app.dataRecord = {id:0} ;                // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;                  // basic screen will have this parameter passed as null
      app.childApp = null ;                   // basic screen will have this parameter passed as null

 app.fieldsDefinition = 
      {
        'editFields' : [
        
        {caption : 'Schedule', type : 'text',dbName:'lookup_standSch_Name' , parentField:'true'}
        ,{caption : 'Agent/Day/Time', type : 'text',dbName:'lookup_AgentDayTime_Name' , parentField:'true'}
        ,{caption : 'Service', type : 'select', dbName:'serviceId', lookupService:'service'}
        ,{caption : 'SubService', type : 'select', dbName:'subServiceId', lookupService:'subService'}

        ]
      };

      app.reportFields = 
      {
        'displayFields' : [
        {caption : 'Service' , dbName:'serviceId', dbLookup:'lookup_Service_Name', width:100}
        ,{caption : 'Sub Service' , dbName:'subServiceId', dbLookup:'lookup_SubService_Name', width:100}
      
        ]
          ,
        'valueFiltersFields' : []
        ,
        'rangeFiltersFields' : []
        ,
        'groupByFields' : []
        ,
        'orderByFields' : [
          {caption : 'Name', dbName:'name'}
        ]
      };
 return app ;
}

function getExpEntryNumberRangeDetails()
{
var app = {};
      app.title = "Exceptional Entry Number Range" ;
      app.serviceName = "excepNumRange" ;
      
      app.menuItemSearch = "searchExcepNumRange" ;             //related menuItem for search 
      app.menuItemReport = "reportExcepNumRange" ;             //related menuItem for report
      
      app.reportMethod = "getExcepNumRangeReports" ;           //used for search & report   
      app.reportModel = "excepNumRange" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
      
      app.navigatorType = "basic" ;
      app.paginatorType = "basic" ;
      app.controlsPerColumn = 7 ;
      
      app.masterCaption = "Exceptional Entry";
      app.pageNo = 0 ;                          // page index is zero based
      app.htmlPage = null ;                     // for static content pages
      app.dataRecord = {id:0} ;             // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;               // basic screen will have this parameter passed as null
      app.childApp = null ;               // basic screen will have this parameter passed as null
       
    app.fieldsDefinition = 
      {
        'editFields' : [
        
        {caption : 'Agent,branch,workstation,date,starttime,endtime', type : 'select', dbName:'excepEntryId', lookupService:'excepEntry' }
        

        ,{caption : 'Visit Type', type : 'radio' , additional: 'select', dbName:'visitTypeId', lookupService:'visitType'}
        ,{caption : 'Segment', type : 'radio' , additional: 'select', dbName:'segmentId', lookupService:'segment'}
        ,{caption : 'Service', type : 'radio' , additional: 'select', dbName:'serviceId', lookupService:'service'}
        ,{caption : 'Sub Service', type : 'none' , additional: 'select', dbName:'subServiceId', lookupService:'subService'}
        
        ,{caption : 'Reservable Slots', type :'none' , additional: 'text', dbName:'slotCount'}
        ,{caption : 'Number Range', type :'none' , additional: 'text', dbName:'rangeWidth'}
        ,{caption : 'Slot Duration', type :'none' , additional: 'text', dbName:'slotDuration'}
        ]
      };

      app.reportFields = 
      {
        'displayFields' : [
        {caption : 'Segmant/Visit Type/Service' , width:100}
        ,{caption : 'Reservable Slots', dbName:'slotCount' , width:100}
        ,{caption : 'Slot Duration' , dbName:'slotDuration', width:100}
        ,{caption : 'Number Range' , dbName:'rangeWidth', width:100}
        ]
           ,
        'valueFiltersFields' : []
        ,
        'rangeFiltersFields' : []
        ,
        'groupByFields' : []
        ,
        'orderByFields' : [
          {caption : 'Name', dbName:'name'}
        ]
      };
  return app ;
}

function getServicesDefaultNumberRangeAgentMode()
{
var app = {};
      app.title = "Default Number Range Agent Mode" ;
      app.serviceName = "dfltRangeAgentMode" ;
      
      app.menuItemSearch = "searchDfltRangeAgentMode" ;             //related menuItem for search 
      app.menuItemReport = "reportDfltRangeAgentMode" ;             //related menuItem for report
      
      app.reportMethod = "getDfltRangeAgentModeReports" ;           //used for search & report   
      app.reportModel = "dfltRangeAgentMode" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
      
      app.navigatorType = "basic" ;
      app.paginatorType = "basic" ;
      
      app.controlsPerColumn = 3 ;      
      app.pageNo = 0 ;                          // page index is zero based
      app.htmlPage = null ;                     // for static content pages
      app.dataRecord = {id:0} ;                // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;                  // basic screen will have this parameter passed as null
      app.childApp = null ;                   // basic screen will have this parameter passed as null

 app.fieldsDefinition = 
      {
        'editFields' : [
        
       {caption : 'Schedule', type : 'select', dbName:'standSchId', lookupService:'standSch'}
         ,{caption : 'Service', type : 'select', dbName:'serviceId', lookupService:'service'}
         ,{caption : 'Range Width', type : 'text', dbName:'rangeWidth'}
         ,{caption : 'Agent/Day/Time', type : 'select', dbName:'standSchEntryId', lookupService:'standSchEntry'}
         ,{caption : 'Sub Service', type : 'select', dbName:'subServiceId', lookupService:'subService'}
         ,{caption : 'Reservable Slots', type:'text', dbName:'slotCount'}
         ,{caption : 'Visit Type', type:'radio', additional:'select', dbName:'visitTypeId', lookupService:'visitType'}
         ,{caption : 'Segmentation', type : 'radio' , additional: 'select', dbName:'segmentId', lookupService:'segment'}       
        , {caption : 'Slot Duration', type : 'none', additional: 'text', dbName:'slotDuration'}
        ]
      };

      app.reportFields = 
      {
        'displayFields' : [
        {caption : 'Service' , dbName:'serviceId', dbLookup:'lookup_Service_Name', width:100}
      ,{caption : 'Sub Service' , dbName:'subServiceId', dbLookup:'lookup_SubService_Name', width:100}      
      ,{caption : 'Segmant/Visit Type/Service' , width:100}
      ,{caption : 'Reservable Slots' , dbName:'slotCount', width:100}
      ,{caption : 'Slot Duration' , dbName:'slotDuration', width:100}
      ,{caption : 'Number Range' , dbName:'rangeWidth', width:100}
        ]
             ,
        'valueFiltersFields' : []
        ,
        'rangeFiltersFields' : []
        ,
        'groupByFields' : []
        ,
        'orderByFields' : [
          {caption : 'Name', dbName:'name'}
        ]
      };
   return app ;    
}

function getDefaultNumberRange() 
{

 var app = {};
      app.title = "Default Number Range Service Mode" ;
      app.serviceName = "dfltRangeSrvcMode" ;
      app.masterCaption = "Sub Service";
       
       app.menuItemSearch = "searchDfltRangeSrvcMode" ;             //related menuItem for search 
      app.menuItemReport = "reportDfltRangeSrvcMode" ;             //related menuItem for report
      
      app.reportMethod = "getDfltRangeSrvcModeReports" ;           //used for search & report   
      app.reportModel = "dfltRangeSrvcMode" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
      
      app.navigatorType = "details" ;
      app.paginatorType = "basic" ;
      
      app.controlsPerColumn = 100 ;
      app.pageNo = 0 ;                          // page index is zero based
      app.htmlPage = null ;                     // for static content pages
      app.dataRecord = {id:0} ;             // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;               // basic screen will have this parameter passed as null
      app.childApp = null ;               // basic screen will have this parameter passed as null
      
app.fieldsDefinition = 
      {
        'editFields' : [
        {caption : 'Service', type : 'text', dbName:'lookup_Service_Name', parentField:'true'}
        ,{caption : 'Sub Service', type : 'text', dbName:'name',parentField:'true'}
        ,{caption : 'Reservable Slots', type : 'text', dbName:'slotCount'}
        ,{caption : 'Number Range', type : 'text', dbName:'rangeWidth'}
        ,{caption : 'Slot Duration', type : 'text', dbName:'slotDuration'}
        ,{caption : 'Visit Type', type : 'radio', additional:'select', dbName:'visitTypeId', lookupService:'visitType'}
        ,{caption : 'Segment', type : 'radio', additional:'select', dbName:'segmentId', lookupService:'segment'}
        ]
      };

    app.reportFields = 
      {
        'displayFields' : [
        {caption : 'Service' , dbName:'serviceId', dbLookup:'lookup_Service_Name', width:100}
        ,{caption : 'Sub Service' , dbName:'subServiceId', dbLookup:'lookup_SubService_Name', width:200} 
        ,  {caption : 'Visit Type' , dbName:'visitTypeId', dbLookup:'lookup_VisitType_Name', width:50}
        ,{caption : 'Segment' , dbName:'segmentId', dbLookup:'lookup_Segment_Name', width:80} 
         ,  {caption : 'Reservable Slots' , dbName:'slotCount', width:50}
        ,{caption : 'Number Range' , dbName:'rangeWidth', width:80}  
         ,{caption : 'Slot Duration' , dbName:'slotDuration', width:90}  
        ]
                ,
        'valueFiltersFields' : []
        ,
        'rangeFiltersFields' : []
        ,
        'groupByFields' : []
        ,
        'orderByFields' : [
          {caption : 'Name', dbName:'name'}
        ]
      };
    return app ;   
          
}

function getServiceTime()
{
var app = {};
      app.title = "Service Performance" ;
      app.serviceName = "serviceTime" ;
      
      app.menuItemSearch = "searchServiceTime" ;             //related menuItem for search 
      app.menuItemReport = "reportServiceTime" ;             //related menuItem for report
      
      app.reportMethod = "getServiceTimeReports" ;           //used for search & report   
      app.reportModel = "serviceTime" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
      
      app.navigatorType = "basic" ;
      app.paginatorType = "basic" ;
      
      app.controlsPerColumn = 100 ;
      app.pageNo = 0 ;                          // page index is zero based
      app.htmlPage = null ;                     // for static content pages
      app.dataRecord = {id:0} ;             // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;               // basic screen will have this parameter passed as null
      app.childApp = null ;               // basic screen will have this parameter passed as null
      
    app.fieldsDefinition = 
      {
        'editFields' : [
        {caption : 'Branch', type : 'select',dbName:'branchId' , lookupService:'branch'}
        ,{caption : 'Service', type : 'select',dbName:'serviceId' , lookupService:'service'}
        ,{caption : 'Sub Service', type : 'select',dbName:'subServiceId' , lookupService:'subService'}
        ,{caption : 'Target Service Time (Minutes)', type : 'text',dbName:'targetServiceTime'}
        ]
      };

     app.reportFields = 
      {
        'displayFields' : [
         {caption : 'Branch' ,dbName:'branchId' , dbLookup:'lookup_Branch_Name', width:30}
        ,{caption : 'Service' ,dbName:'serviceId' , dbLookup:'lookup_Service_Name', width:100}
        ,{caption : 'Sub Service' ,dbName:'subServiceId' , dbLookup:'lookup_SubService_Name', width:100} 
        ,{caption : 'Target Service Time (Minutes)',dbName:'targetServiceTime' , width:100} 
        ]
                 ,
        'valueFiltersFields' : [
        {caption : 'Branch',  type : 'select' ,dbName:'branchId', lookupService:'branch' , dbLookup:'lookup_Branch_Name'}
        ,{caption : 'Service',  type : 'select' ,dbName:'serviceId', lookupService:'service' , dbLookup:'lookup_Service_Name'}
        ,{caption : 'Sub Service',  type : 'select' ,dbName:'subServiceId', lookupService:'subService' , dbLookup:'lookup_SubService_Name'}
        ]
        ,
        'rangeFiltersFields' : [
        {caption: 'Target Service Time (Minutes)', dbName:'targetServiceTime', type : 'text'}
        ]
        ,
        'groupByFields' : []
        ,
        'orderByFields' : [
          {caption : 'Name', dbName:'name'}
          ,{caption : 'Target Service Time', dbName:'targetServiceTime'}
        ]
      };
       return app ;
}

function getAgentBranchsHistory()
{
var app = {};
      app.title = "Agent Branchs History" ;
      app.serviceName = "agentBranchHistory" ;
      
      app.menuItemSearch = "searchAgentBranchHistory" ;             //related menuItem for search 
      app.menuItemReport = "reportAgentBranchHistory" ;             //related menuItem for report
      
      app.reportMethod = "getAgentBranchHistoryReports" ;           //used for search & report   
      app.reportModel = "agentBranchHistory" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
      
      app.navigatorType = "basic" ;
      app.paginatorType = "basic" ;
      
      app.controlsPerColumn = 100 ;
      app.pageNo = 0 ;                          // page index is zero based
      app.htmlPage = null ;                     // for static content pages
      app.dataRecord = {id:0} ;             // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;               // basic screen will have this parameter passed as null
      app.childApp = null ;               // basic screen will have this parameter passed as null
      
 app.fieldsDefinition = 
      {
        'editFields' : [
        {caption : 'Agent', type : 'select', dbName:'agentId', lookupService:'agent'}
        ,{caption : 'Branch', type : 'select', dbName:'branchId', lookupService:'branch'}
        ,{caption : 'Start Date', type : 'text', dbName:'startDate'}
        ]
      };

      app.reportFields = 
      {
        'displayFields' : [
        {caption : 'Agent' , dbName:'agentId', dbLookup:'lookup_Agent_Name',width:200}
        ,{caption : 'Branch' ,dbName:'branchId', dbLookup:'lookup_Branch_Name', width:200} 
        ,  {caption : 'Start Date' , dbName:'startDate', width:100}
        
        ]
                  ,
        'valueFiltersFields' : []
        ,
        'rangeFiltersFields' : []
        ,
        'groupByFields' : []
        ,
        'orderByFields' : [
          {caption : 'Name', dbName:'name'}
        ]
      };
    return app;
}

function getAgentServices()
{
var app = {};
      app.title = "Agent Services" ;
      app.serviceName = "agentService" ;
      app.masterCaption = "Agents";
      
      app.menuItemSearch = "searchAgentService" ;             //related menuItem for search 
      app.menuItemReport = "reportAgentService" ;             //related menuItem for report
      
      app.reportMethod = "getAgentServiceReports" ;           //used for search & report   
      app.reportModel = "agentService" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
      
      app.navigatorType = "details" ;
      app.paginatorType = "basic" ;
      
      app.controlsPerColumn = 100 ;
      app.pageNo = 0 ;                          // page index is zero based
      app.htmlPage = null ;                     // for static content pages
      app.dataRecord = {id:0} ;             // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;               // basic screen will have this parameter passed as null
      app.childApp = null ; 
  app.fieldsDefinition = 
      {
        'editFields' : [
        {caption : 'Agent', type : 'text', dbName:'name', parentField:'true'}
        ,{caption : 'Service', type : 'select', dbName:'serviceId', lookupService:'service'}
        ,{caption : 'Sub Service', type : 'select', dbName:'subServiceId', lookupService:'subService'}
        ]
      };

      app.reportFields = 
      {
        'displayFields' : [
        {caption : 'Service' , dbName:'serviceId', dbLookup:'lookup_Service_Name', width:100}
        ,{caption : 'Sub Service', dbName:'subServiceId', dbLookup:'lookup_SubService_Name' , width:100} 
        
        ]
                    ,
        'valueFiltersFields' : [
        {caption : 'Agent',  type : 'select', dbName:'agentId', lookupService:'agent' , dbLookup:'lookup_Agent_Name'}
        ]
        ,
        'rangeFiltersFields' : []
        ,
        'groupByFields' : []
        ,
        'orderByFields' : [
          {caption : 'Name', dbName:'name'}
        ]
      };
      return app ;
}

function getSerialNumber()
{
var app = {};
      app.title = "Serial Number" ;
      app.serviceName = "servicename" ;
      app.navigatorType = "none" ;
      app.paginatorType = "none" ;
      app.controlsPerColumn = 100 ;
      app.pageNo = 0 ;                          // page index is zero based
      app.htmlPage = null ;                     // for static content pages
      app.dataRecord = {id:0} ;             // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;               // basic screen will have this parameter passed as null
      app.childApp = null ; 
 app.fieldsDefinition = 
      {
        'editFields' : [
        {caption : 'Hard Disk Serial Number', width:500,type : 'text'}
        ]
      };

      app.reportFields = 
      {
        'displayFields' : [
        ]
      };
      return app; 
}

function getAccessibleAgents()
{
var app = {};
      app.title = "Grant System Access" ;
      app.serviceName = "accessibleSysFunc" ;
      
      app.menuItemSearch = "searchAccessibleSysFunc" ;             //related menuItem for search 
      app.menuItemReport = "reportAccessibleSysFunc" ;             //related menuItem for report
      
      app.reportMethod = "getAccessibleSysFuncReports" ;           //used for search & report   
      app.reportModel = "accessibleSysFunc" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
      
      app.navigatorType = "basic" ;
      app.paginatorType = "basic" ;
      
      app.controlsPerColumn = 100 ;
      app.pageNo = 0 ;                          // page index is zero based
      app.htmlPage = null ;                     // for static content pages
      app.dataRecord = {id:0} ;             // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;               // basic screen will have this parameter passed as null
      app.childApp = null ; 
   app.fieldsDefinition = 
      {
        'editFields' : [
         {caption : 'Branch', type : 'select', dbName:'branchId', lookupService:'branch'}
        ,{caption : 'Agent Type', type : 'text', dbName:'name', parentField:'true'}
        ,{caption : 'Agent', type : 'select', dbName:'agentId', lookupService:'agent'}
        ,{caption : 'System Function', type : 'select', dbName:'systemFunctionId', lookupService:'systemFunction'}
        ,{caption : 'System Report', type : 'select', dbName:'systemReportId', lookupService:'systemReport'}
        ]
      };
      
     app.reportFields = 
      {
        'displayFields' : [
         {caption : 'Agent' , width:100, dbName:'agentId', dbLookup:'lookup_Agent_Name'}
        ,{caption : 'System Function' , width:100, dbName:'systemFunctionId', dbLookup:'lookup_SystemFunction_Name'}
        ,{caption : 'System Report' , width:100, dbName:'systemReportId', dbLookup:'lookup_SystemReport_Name'}
       
        ]
                     ,
        'valueFiltersFields' : []
        ,
        'rangeFiltersFields' : []
        ,
        'groupByFields' : []
        ,
        'orderByFields' : [
          {caption : 'Name', dbName:'name'}
        ]
      };
     return app; 
}

function getDailySchedule()
{

 var app = {};
      app.title = "Daily Schedule" ;
      app.serviceName = "dailySchEntry" ;
      app.detailsCaption = "Daily Schedule Entry Service";
      
      app.menuItemSearch = "searchDailySchEntry" ;             //related menuItem for search 
      app.menuItemReport = "reportDailySchEntry" ;             //related menuItem for report
      
      app.reportMethod = "getDailySchEntryReports" ;           //used for search & report   
      app.reportModel = "dailySchEntry" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
      
      app.navigatorType = "master" ;
      app.paginatorType = "basic" ;
      
      app.controlsPerColumn = 5 ;
      app.pageNo = 0 ;                      // page index is zero based
      app.htmlPage = null ;                 // for static content pages
      app.dataRecord = {id:0} ;             // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;               // basic screen will have this parameter passed as null
      app.childApp = null ;               // basic screen will have this parameter passed as null
     
  app.fieldsDefinition = 
      {
        'editFields' : [
        {caption : 'Date', type : 'text', dbName:'docDate'}
        ,{caption : 'Day of week', type : 'select'}
        ,{caption : 'Agent', type : 'select', dbName:'agentId', lookupService:'agent'}
        ,{caption : 'Start Time', type : 'text', dbName:'startTime'}
        ,{caption : 'End Time', type : 'text', dbName:'endTime'}
        ,{caption : 'Actual Start Time', type : 'text', dbName:'actualStartTime'}
        ,{caption : 'Actual End Time', type : 'text', dbName:'actualEndTime'}
        ,{caption : 'Customer Max Number', type : 'text', dbName:'customerMaxNo'}
        ,{caption : 'WorkStation', type : 'select', dbName:'workstationId', lookupService:'workStation'}
        ,{caption : 'Schedule entry services / No. of Range', type : 'button'}
        ,{caption : 'Cancel', type : 'button'}
        ]
      };

      app.reportFields = 
      {
        'displayFields' : [
        {caption : 'Agent' , dbName:'agentId', dbLookup:'lookup_Agent_Name', width:100} 
        ,{caption : 'Start Time' , dbName:'startTime', width:30}
        ,{caption : 'End Time' , dbName:'endTime', width:100}
        ]
        
                       ,
        'valueFiltersFields' : []
        ,
        'rangeFiltersFields' : []
        ,
        'groupByFields' : []
        ,
        'orderByFields' : [
          {caption : 'Name', dbName:'name'}
        ]
      };
      return app ;
}

function getDailySchEntrySrvc()
{
  var app = {};
      app.title = "Daily Schedule Entry Service" ;
      app.serviceName = "dailySchEntrySrvc" ;
      app.masterCaption = "Daily Schedule Entry";
       
      app.menuItemSearch = "searchDailySchEntrySrvc" ;             //related menuItem for search 
      app.menuItemReport = "reportDailySchEntrySrvc" ;             //related menuItem for report
      
      app.reportMethod = "getDailySchEntrySrvcReports" ;           //used for search & report   
      app.reportModel = "dailySchEntrySrvc" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
      
      app.navigatorType = "details" ;
      app.paginatorType = "basic" ;
      
      app.controlsPerColumn = 100 ;
      app.pageNo = 0 ;                          // page index is zero based
      app.htmlPage = null ;                     // for static content pages
      app.dataRecord = {id:0} ;             // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;               // basic screen will have this parameter passed as null
      app.childApp = null ;               // basic screen will have this parameter passed as null
      
      app.fieldsDefinition = 
      {
        'editFields' : [
        {caption : 'Service', type : 'select',dbName:'serviceId' , lookupService:'service'}
        ,{caption : 'Sub Service', type : 'select',dbName:'subServiceId', lookupService:'subService'}
        ]
      };
      app.reportFields = 
      {
        'displayFields' : [
        {caption : 'Service',dbName:'serviceId' , dbLookup:'lookup_Service_Name', width:100}      
        ,{caption : 'Sub Service',dbName:'subServiceId' , dbLookup:'lookup_SubService_Name', width:100} 
        ]
                         ,
        'valueFiltersFields' : []
        ,
        'rangeFiltersFields' : []
        ,
        'groupByFields' : []
        ,
        'orderByFields' : [
          {caption : 'Name', dbName:'name'}
        ]
      };
 return app ;
}

function getCallingApproach1() {

var app = {};
      app.title = "Calling Approach" ;
      app.serviceName = "callingApproach" ;
      app.detailsCaption = "Load Balance Parameter";
      
      app.menuItemSearch = "searchCallingApproach" ;             //related menuItem for search 
      app.menuItemReport = "reportCallingApproach" ;             //related menuItem for report
      
      app.reportMethod = "getCallingApproachReports" ;           //used for search & report   
      app.reportModel = "callingApproach" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
      
      app.navigatorType = "master" ;
      app.paginatorType = "basic" ;
      app.controlsPerColumn = 100 ;
      app.pageNo = 0 ;                          // page index is zero based
      app.htmlPage = null ;                     // for static content pages
      app.dataRecord = {id:0} ;             // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;               // basic screen will have this parameter passed as null
      app.childApp = null ;
      app.fieldsDefinition = 
      {
        'editFields' : [
        {caption : 'Agent', type : 'radio', additional:'select' , dbName:'agentId', lookupService:'agent'}        
        ,{caption : 'WorkStation', type :'radio', additional:'select', dbName:'workstationId', lookupService:'workStation'}
        ,{caption : '', type : 'none'}
        ,{caption : 'Adhoc', type : 'checkbox', dbName:'adhocOn'}
        ,{caption : 'Reservation', type : 'checkbox', dbName:'reservationOn'}
        ,{caption : 'Segmentation', type : 'checkbox', dbName:'segmentationOn'}
        ,{caption : 'Load Balancing On', type : 'checkbox', dbName:'loadBalanceOn'}
        ,{caption : 'Factor', type : 'text', dbName:'loadBalanceFactor'}
        ]
      };

       app.reportFields = 
      {
        'displayFields' : [
        {caption : 'Factor' , dbName:'loadBalanceFactor', width:100}
        ,{caption : 'Adhoc' , dbName:'adhocOn', width:100} 
        ,  {caption : 'Reservation' , dbName:'reservationOn', width:100}
        ,  {caption : 'Segmentation' , dbName:'segmentationOn', width:100}
        ,  {caption : 'Load Balancing On' , dbName:'loadBalanceOn', width:100}
        
        ]
        ,
        'valueFiltersFields' : []
        ,
        'rangeFiltersFields' : []
        ,
        'groupByFields' : []
        ,
        'orderByFields' : [
          {caption : 'Name', dbName:'name'}
        ]
      };
      
       return app;
}

function getLoadBalanceParameter() {

var app = {};
      app.title = "Load Balance Parameter" ;
      app.serviceName = "loadBalanceParam" ;
      app.masterCaption = "Calling Approach";
      
      app.menuItemSearch = "searchLoadBalanceParam" ;             //related menuItem for search 
      app.menuItemReport = "reportLoadBalanceParam" ;             //related menuItem for report
      
      app.reportMethod = "getLoadBalanceParamReports" ;           //used for search & report   
      app.reportModel = "loadBalanceParam" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
      
      app.navigatorType = "details" ;
      app.paginatorType = "basic" ;
      
      app.controlsPerColumn = 100 ;
      app.pageNo = 0 ;                          // page index is zero based
      app.htmlPage = null ;                     // for static content pages
      app.dataRecord = {id:0} ;             // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;               // basic screen will have this parameter passed as null
      app.childApp = null ;
      app.fieldsDefinition = 
      {
        'editFields' : [
        
        ]
      };

       app.reportFields = 
      {
        'displayFields' : [

        ]
         ,
        'valueFiltersFields' : []
        ,
        'rangeFiltersFields' : []
        ,
        'groupByFields' : []
        ,
        'orderByFields' : [
          {caption : 'Name', dbName:'name'}
        ]
      };
      
       return app;
}

function getLogTransaction()
{
var app = {};
      app.title = "Log Transaction" ;
      app.serviceName = "logTransaction" ;
      
      app.menuItemSearch = "searchLogTransaction" ;             //related menuItem for search 
      app.menuItemReport = "reportLogTransaction" ;             //related menuItem for report
      
      app.reportMethod = "getLogTransactionReports" ;           //used for search & report   
      app.reportModel = "logTransaction" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
      
      app.navigatorType = "basic" ;
      app.paginatorType = "basic" ;
      
      app.controlsPerColumn = 100 ;
      app.pageNo = 0 ;                          // page index is zero based
      app.htmlPage = null ;                     // for static content pages
      app.dataRecord = {id:0} ;             // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;               // basic screen will have this parameter passed as null
      app.childApp = null ;
      
       app.fieldsDefinition = 
      {
        'editFields' : [ 
        
        {caption : 'Error Type', type : 'select',dbName:'errorId', lookupService:'errorType'}
        ,{caption : 'Event', type : 'select',dbName:'eventId', lookupService:'eventList'}
        ,{caption : 'Branch', type : 'select',dbName:'branchId', lookupService:'branch'}
        ,{caption : 'Workstation', type : 'select',dbName:'workstationId', lookupService:'workStation'}
        ,{caption : 'Date', type : 'text',dbName:'docDate'}
        ,{caption : 'Time', type : 'text',dbName:'time'}
        ,{caption : 'System Function', type : 'text',dbName:'fnctnId', lookupService:'systemFunction'}
        ,{caption : 'System Report', type : 'text',dbName:'reportId'}
        ]
      };
      
      app.reportFields = 
      {
        'displayFields' : [
        {caption : 'Error', type : 'select',dbName:'errorId', dbLookup:'lookup_Error_Name', width:100}
        ,{caption : 'Event', type : 'select',dbName:'eventId', dbLookup:'lookup_Event_Name', width:100}
        ,{caption : 'Branch', type : 'select',dbName:'branchId', dbLookup:'lookup_Branch_Name', width:100}
        ,{caption : 'Workstation', type : 'select',dbName:'workstationId', dbLookup:'lookup_Workstation_Name', width:100}
        ,{caption : 'Date', type : 'text',dbName:'docDate', width:100}
        ,{caption : 'Time', type : 'text',dbName:'time', width:100}
        ,{caption : 'System Function', type : 'text',dbName:'fnctnId', lookupService:'lookup_SystemFunction_Name', width:100}
        ,{caption : 'System Report', type : 'text',dbName:'reportId', width:100}
        ]
           ,
        'valueFiltersFields' : []
        ,
        'rangeFiltersFields' : []
        ,
        'groupByFields' : []
        ,
        'orderByFields' : [
          {caption : 'Name', dbName:'name'}
        ]
      };
      
       return app;
}

function getNumberRangeManagerServiceMode()
{
var app = {};
      app.title = "Number Range Manager Service Mode" ;
      app.serviceName = "numRangeSrvcMode" ;
      
      app.menuItemSearch = "searchNumRangeSrvcMode" ;             //related menuItem for search 
      app.menuItemReport = "reportNumRangeSrvcMode" ;             //related menuItem for report
      
      app.reportMethod = "getNumRangeSrvcModeReports" ;           //used for search & report   
      app.reportModel = "numRangeSrvcMode" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
      
      app.navigatorType = "basic" ;
      app.paginatorType = "basic" ;
      
      app.controlsPerColumn = 5 ;
      app.pageNo = 0 ;                          // page index is zero based
      app.htmlPage = null ;                     // for static content pages
      app.dataRecord = {id:0} ;             // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;               // basic screen will have this parameter passed as null
      app.childApp = null ; 
     
      app.fieldsDefinition = 
      {
        'editFields' : [
        {caption : 'Service', type : 'select', dbName:'serviceId', lookupService:'service'}
        ,{caption : 'Sub Service', type : 'select', dbName:'subServiceId', lookupService:'subService'}
        ,{caption : 'From Number', type : 'text', dbName:'fromNumber'}
        ,{caption : 'To Number', type : 'text', dbName:'toNumber'}
        ,{caption : 'reservation Number From', type : 'text', dbName:'reservationNumberFrom'}
        ,{caption : 'reservation Number To', type : 'text', dbName:'reservationNumberTo'}
        ,{caption : 'prefix Identifier', type : 'text', dbName:'prefixIdentifier'}
        ,{caption : 'No. of tickets' ,  type : 'text'}
        ,{caption : 'No. of reservation' , type : 'text'}
       ,{caption : 'Current ticket' , type : 'text'}      
        ,{caption : '' , type : 'none'}      
        ,{caption : 'Visit type' , type : 'radio', additional:'select', dbName:'visitTypeId', lookupService:'visitType'}
        ,{caption : 'Segment' , type : 'radio', additional:'select', dbName:'segmentId', lookupService:'segment'} 
        //,{caption : 'Service' ,  type : 'radio', additional:'select', dbName:'serviceId', lookupService:'service'}
        ]
      };

     app.reportFields = 
      {
        'displayFields' : [
         {caption : 'Service', dbName:'serviceId', dbLookup:'lookup_Service_Name' , width:30}
        ,{caption : 'Sub Service' , dbName:'subServiceId', dbLookup:'lookup_SubService_Name', width:100}
        ,{caption : 'Seg. or visit or service' , width:100} 
       ,{caption : 'From Number' , dbName:'fromNumber', width:100}  
        ,{caption : 'To Number' , dbName:'toNumber', width:100}
        ,{caption : 'reservation Number From', dbName:'reservationNumberFrom' , width:100}
        ,{caption : 'reservation Number To' , dbName:'reservationNumberTo', width:100}
        ,{caption : 'No. of tickets' , width:100} 
        ,{caption : 'No. of reservation' , width:100} 
        ,{caption : 'Current ticket' , width:100} 
        ]
             ,
        'valueFiltersFields' : []
        ,
        'rangeFiltersFields' : []
        ,
        'groupByFields' : []
        ,
        'orderByFields' : [
          {caption : 'Name', dbName:'name'}
        ]
      };
return app ;
}

function getNumberRangeManagerAgentMode()
{
var app = {};
      app.title = "Number Range Manager Agent Mode" ;
      app.serviceName = "numRangeAgentMode" ;
      
      app.menuItemSearch = "searchNumRangeAgentMode" ;             //related menuItem for search 
      app.menuItemReport = "reportNumRangeAgentMode" ;             //related menuItem for report
      
      app.reportMethod = "getNumRangeAgentModeReports" ;           //used for search & report   
      app.reportModel = "numRangeAgentMode" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
      
      app.navigatorType = "basic" ;
      app.paginatorType = "basic" ;
      
      app.controlsPerColumn = 4 ;
      app.pageNo = 0 ;                          // page index is zero based
      app.htmlPage = null ;                     // for static content pages
      app.dataRecord = {id:0} ;             // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;               // basic screen will have this parameter passed as null
      app.childApp = null ; 
 
 app.fieldsDefinition = 
      {
        'editFields' : [         
        {caption : 'Agent/Start time', type : 'select', dbName:'dailySchEntryId', lookupService:'dailySchEntry'}
        ,{caption : 'Service', type : 'select', dbName:'serviceId', lookupService:'service'}
        ,{caption : 'Sub Service', type : 'select', dbName:'subServiceId', lookupService:'subService'}
        ,{caption : 'From Number', type : 'text', dbName:'fromNumber'}
        ,{caption : 'To Number', type : 'text', dbName:'toNumber'}
        ,{caption : 'reservation Number From', type : 'text', dbName:'reservationNumberFrom'}
        ,{caption : 'reservation Number To', type : 'text', dbName:'reservationNumberto'}
        ,{caption : 'prefix Identifier', type : 'text', dbName:'prefixIdentifier'}    
        ,{caption : '' , type : 'none'}      
        ,{caption : 'Visit type' , type : 'radio', additional:'select', dbName:'visitTypeId', lookupService:'visitType'}
        ,{caption : 'Segment' , type : 'radio', additional:'select', dbName:'segmentId', lookupService:'segment'} 
        ]
      };

      app.reportFields = 
      {
        'displayFields' : [        
         {caption : 'Service', dbName:'serviceId', dbLookup:'lookup_Service_Name' , width:30}
        ,{caption : 'Sub Service' , dbName:'subServiceId', dbLookup:'lookup_SubService_Name', width:100}
        ,{caption : 'Seg. or visit or service' , width:100} 
        ,{caption : 'From Number' , dbName:'fromNumber', width:100}  
        ,{caption : 'To Number' , dbName:'toNumber', width:100}
        ,{caption : 'reservation Number From', dbName:'reservationNumberFrom' , width:100}
        ,{caption : 'reservation Number To' , dbName:'reservationNumberto', width:100}
        ]
               ,
        'valueFiltersFields' : []
        ,
        'rangeFiltersFields' : []
        ,
        'groupByFields' : []
        ,
        'orderByFields' : [
          {caption : 'Name', dbName:'name'}
        ]
      };
 return app ;          
}

function getExpEntry()
{
var app = {};
      app.title = "Exceptional Entry" ;
      app.serviceName = "excepEntry" ;
      app.detailsCaption = "Exceptional Entry Services";
      
      app.menuItemSearch = "searchExcepEntry" ;             //related menuItem for search 
      app.menuItemReport = "reportExcepEntry" ;             //related menuItem for report
      
      app.reportMethod = "getExcepEntryReports" ;           //used for search & report   
      app.reportModel = "excepEntry" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
      
      app.navigatorType = "master" ;
      app.paginatorType = "basic" ;
      
      app.controlsPerColumn = 100 ;
      app.pageNo = 0 ;                          // page index is zero based
      app.htmlPage = null ;                     // for static content pages
      app.dataRecord = {id:0} ;             // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;               // basic screen will have this parameter passed as null
      app.childApp = null ; 
  app.fieldsDefinition = 
      {
        'editFields' : [
        
        {caption : 'Agent', type : 'select', dbName:'agentId', lookupService:'agent'}
        ,{caption : 'Date', type : 'text', dbName:'docDate'}
        ,{caption : 'Branch', type : 'select', dbName:'branchId', lookupService:'branch'}
        ,{caption : 'WorkStation', type : 'select', dbName:'workstationId', lookupService:'workStation'}
        ,{caption : 'Start Time', type : 'text', dbName:'startTime'}
        ,{caption : 'End Time', type : 'text', dbName:'endTime'}
        ,{caption : 'Customer Max Number', type : 'text', dbName:'customerMaxNo'}

        ]
      };
       app.reportFields = 
      {
        'displayFields' : [
        {caption : 'Agent' , dbName:'agentId', width:100}
        ,{caption : 'Date' , dbName:'docDate', width:100}
        ,{caption : 'Start Time' , dbName:'startTime', width:100}
        ,{caption : 'End Time' , dbName:'endTime', width:100}
        ]
                 ,
        'valueFiltersFields' : []
        ,
        'rangeFiltersFields' : []
        ,
        'groupByFields' : []
        ,
        'orderByFields' : [
          {caption : 'Name', dbName:'name'}
        ]
        
      };
     
return app;
}

function getExpEntryServiceDetails()
{
var app = {};
      app.title = "Exceptional Entry Services" ;
      app.serviceName = "excepEntrySrvc" ;
      app.masterCaption = "Exceptional Entry";
      
      app.menuItemSearch = "searchExcepEntrySrvc" ;             //related menuItem for search 
      app.menuItemReport = "reportExcepEntrySrvc" ;             //related menuItem for report
      
      app.reportMethod = "getExcepEntrySrvcReports" ;           //used for search & report   
      app.reportModel = "excepEntrySrvc" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
      
      app.navigatorType = "details" ;
      app.paginatorType = "basic" ;
      
      app.controlsPerColumn = 100 ;
      app.pageNo = 0 ;                          // page index is zero based
      app.htmlPage = null ;                     // for static content pages
      app.dataRecord = {id:0} ;             // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;               // basic screen will have this parameter passed as null
      app.childApp = null ; 
 app.fieldsDefinition = 
      {
        'editFields' : [ 
        
        {caption : 'Branch', type : 'text',dbName:'lookup_Branch_Name', parentField:'true'}
        ,{caption : 'Agent', type : 'text',dbName:'lookup_Agent_Name', parentField:'true'}
        ,{caption : 'WorkStation', type : 'text',dbName:'lookup_Workstation_Name', parentField:'true'}
        ,{caption : 'Date', type : 'text',dbName:'docDate' , parentField:'true'}
        ,{caption : 'End Time', type : 'text',dbName:'endTime' , parentField:'true'}
        ,{caption : 'Customer Max Number', type : 'text', dbName:'customerMaxNo', parentField:'true'}
        ,{caption : 'Service', type : 'select',dbName:'serviceId',lookupService:'service'}
        ,{caption : 'Sub Service', type : 'select',dbName:'subServiceId',lookupService:'subService'}

        ]
      };

     app.reportFields = 
      {
        'displayFields' : [
        {caption : 'Service' , dbName:'serviceId', dbLookup:'lookup_Service_Name', width:100}
        ,{caption : 'Sub Service' , dbName:'subServiceId', dbLookup:'lookup_SubService_Name', width:100}
        ]
        ,
        'valueFiltersFields' : []
        ,
        'rangeFiltersFields' : []
        ,
        'groupByFields' : []
        ,
        'orderByFields' : [
          {caption : 'Name', dbName:'name'}
        ]
      };
   return app;
}

function getAgentsAgentSuspend()
{
  var app = {};
      app.title = "Agents" ;
      app.serviceName = "agent" ;
      app.detailsCaption = "Agent Suspension";
      
      app.menuItemSearch = "searchAgent" ;             //related menuItem for search 
      app.menuItemReport = "reportAgent" ;             //related menuItem for report
      
      app.reportMethod = "getAgentReports" ;           //used for search & report   
      app.reportModel = "agent" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
      
      app.navigatorType = "master" ;
      app.paginatorType = "basic" ;
      
      app.controlsPerColumn = 100 ;
      app.pageNo = 0 ;                          // page index is zero based
      app.htmlPage = null ;                     // for static content pages
      app.dataRecord = {id:0} ;             // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;               // basic screen will have this parameter passed as null
      app.childApp = null ;               // basic screen will have this parameter passed as null
      
      app.fieldsDefinition = 
      {
        'editFields' : [
         {caption : 'Type', type : 'select', dbName:'agentTypeId', lookupService:'agentType'}
        ,{caption : 'Name', type : 'text', dbName:'name'}
        ,{caption : 'Login Name', type : 'text', dbName:'loginName'}
        ,{caption : 'Password', type : 'text', dbName:'password'}
        ,{caption : 'Email', type : 'text', dbName:'email'}
        ,{caption : 'Mobile', type : 'text', dbName:'mobile'}
        ]
      };
      app.reportFields = 
      {
        'displayFields' : [
         {caption : 'Agent type' , dbName:'agentTypeId', dbLookup:'lookup_AgentType_Name', width:100}
        ,{caption : 'Name' , dbName:'name' , width:100}
        ,{caption : 'Login Name' , dbName:'loginName', width:100}
        ,{caption : 'Password', dbName:'password' , width:100}
        ,{caption : 'Email' , dbName:'email', width:100}
        ,{caption : 'Mobile', dbName:'mobile' , width:100}
        ]
         ,
        'valueFiltersFields' : [
        {caption: 'Name', type : 'text', dbName:'name' }
        ]
        ,
        'rangeFiltersFields' : []
        ,
        'groupByFields' : []
        ,
        'orderByFields' : [
          {caption : 'Name', dbName:'name'}
        ]
      };

  return app ;
}

function getAgentServiceSuspend()
{
     var app = {};
      app.title = "Agent Suspension" ;
      app.serviceName = "agentSuspend" ;
      
      app.menuItemSearch = "searchAgentSuspend" ;             //related menuItem for search 
      app.menuItemReport = "reportAgentSuspend" ;             //related menuItem for report
      
      app.reportMethod = "getAgentSuspendReports" ;           //used for search & report   
      app.reportModel = "agentSuspend" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
      
      app.navigatorType = "details" ;
      app.paginatorType = "basic" ;
      
      app.controlsPerColumn = 100 ;
      app.masterCaption = "Agent";
      app.pageNo = 0 ;                          // page index is zero based
      app.htmlPage = null ;                     // for static content pages
      app.dataRecord = {id:0} ;             // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;               // basic screen will have this parameter passed as null
      app.childApp = null ; 
      
    app.fieldsDefinition = 
      {
        'editFields' : [
       {caption : 'Agent', type :'text',dbName:'name', parentField:'true'}
       ,{caption : 'From Date', type :'text', dbName:'startDate'}
       ,{caption : 'To Date', type :'text', dbName:'endDate'}
        ]
      };

      app.reportFields = 
      {
        'displayFields' : [
        {caption :'From Date', dbName:'startDate', width:100} 
        ,{caption :'To Date', dbName:'endDate', width:100}
        
        ]
         ,
        'valueFiltersFields' : []
        ,
        'rangeFiltersFields' : []
        ,
        'groupByFields' : []
        ,
        'orderByFields' : [
          {caption : 'Name', dbName:'name'}
        ]
      };    
      
    return app;
}

function getStandardWorkFlow()
{
  var app = {};
      app.title = "Standard Work Flow" ;
      app.serviceName = "standardWorkFlow" ;
      
      app.menuItemSearch = "searchStandardWorkFlow" ;             //related menuItem for search 
      app.menuItemReport = "reportStandardWorkFlow" ;             //related menuItem for report
      
      app.reportMethod = "getStandardWorkFlowReports" ;           //used for search & report   
      app.reportModel = "standardWorkFlow" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
      
      app.navigatorType = "basic" ;
      app.paginatorType = "basic" ;
      
      app.controlsPerColumn = 100 ;
      app.pageNo = 0 ;                          // page index is zero based
      app.htmlPage = null ;                     // for static content pages
      app.dataRecord = {id:0} ;             // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;               // basic screen will have this parameter passed as null
      app.childApp = null ; 
      
     app.fieldsDefinition = 
      {
        'editFields' : [
        {caption : 'Services', type : 'text', dbName:'lookup_Service_Name', parentField:'true'}
        ,{caption : 'Sub Service', type : 'text', dbName:'name', parentField:'true'}
        ,{caption : 'Order' , type : 'text', dbName:'workflowServiceOrder'}
        ,{caption : 'Workflow Service' , type : 'select', dbName:'workflowServiceId', lookupService:'service'}
        ,{caption : 'Workflow Sub Service' , type : 'select', dbName:'workflowSubServiceId', lookupService:'subService'}

        ]
      };

     app.reportFields = 
      {
        'displayFields' : [
         {caption : 'Order' , width:30, dbName:'workflowServiceOrder'}
        ,{caption : 'Service', dbName:'workflowServiceId', dbLookup:'lookup_Service_Name' , width:100}
        ,{caption : 'Sub Service', dbName:'workflowSubServiceId', dbLookup:'lookup_SubService_Name' , width:100} 

        ]
          ,
        'valueFiltersFields' : []
        ,
        'rangeFiltersFields' : []
        ,
        'groupByFields' : []
        ,
        'orderByFields' : [
          {caption : 'Name', dbName:'name'}
        ]
      };
      return app;   
}

function getEventList()
{
  var app = {};
      app.title = "Event List" ;
      app.serviceName = "eventList" ;
      
      app.menuItemSearch = "searchEventList" ;             //related menuItem for search 
      app.menuItemReport = "reportEventList" ;             //related menuItem for report
      
      app.reportMethod = "getEventListReports" ;           //used for search & report   
      app.reportModel = "eventList" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
      
      app.navigatorType = "basic" ;
      app.paginatorType = "basic" ;
      
      app.controlsPerColumn = 100 ;
      app.pageNo = 0 ;                          // page index is zero based
      app.htmlPage = null ;                     // for static content pages
      app.dataRecord = {id:0} ;             // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;               // basic screen will have this parameter passed as null
      app.childApp = null ; 
      
     app.fieldsDefinition = 
      {
        'editFields' : [
        {caption : 'Number', type : 'text', dbName:'num'}
        ,{caption : 'Name', type : 'text', dbName:'name'}
        ,{caption : 'Message' , type : 'text', dbName:'message'}       
        ]
      };

     app.reportFields = 
      {
        'displayFields' : [
         {caption : 'Number' , dbName:'num', width:30}
        ,{caption : 'Name', dbName:'name' , width:200}
        ,{caption : 'Message', dbName:'message', width:200} 

        ]
           ,
        'valueFiltersFields' : []
        ,
        'rangeFiltersFields' : []
        ,
        'groupByFields' : []
        ,
        'orderByFields' : [
          {caption : 'Name', dbName:'name'}
        ]
      };
      return app;   
}

function getStandSchMaster_EntryCanceled()
{
    var app = {};
      app.title = "Standard Schedule" ;
      app.serviceName = "standSch" ;
      app.detailsCaption = "Standard Schedule Entry";
      
      app.menuItemSearch = "searchStandSch" ;             //related menuItem for search 
      app.menuItemReport = "reportStandSch" ;             //related menuItem for report
      
      app.reportMethod = "getStandSchReports" ;           //used for search & report   
      app.reportModel = "standSch" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
      
      app.navigatorType = "master" ;
      app.paginatorType = "basic" ;
      
      app.controlsPerColumn = 5 ;
      app.pageNo = 0 ;                          // page index is zero based
      app.htmlPage = null ;                     // for static content pages
      app.dataRecord = {id:0} ;                // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;                  // basic screen will have this parameter passed as null
      app.childApp = null ;                   // basic screen will have this parameter passed as null


 app.fieldsDefinition = 
      {
         'editFields' : [
        {caption : 'Branch', type : 'select', dbName:'branchId', lookupService:'branch'}
        ,{caption : 'Schedule Name', type : 'text', dbName:'name'}
        ,{caption : 'Active From', type : 'text', dbName:'startDate'}
        ,{caption : 'To', type : 'text', dbName:'endDate'}
        ,{caption : 'Weeks/Cycle', type : 'text', dbName:'cycleWeeks'}
        ,{caption : 'Start Day Of Week', type : 'text', dbName:'startDayOfWeek'}
        ,{caption : ' ', type : 'none'}
        ,{caption : ' ', type : 'none'}
        ,{caption : ' ', type : 'none'}
        ,{caption : 'Default', type :'checkbox', dbName:'defaultFlag'}
       ]
      };

     app.reportFields = 
      {
        'displayFields' : [
        {caption : 'Branch', dbName:'branchId', dbLookup:'lookup_Branch_Name'}
        ,{caption : 'Schedule', dbName:'name'}
        ,{caption : 'Active From', dbName:'startDate'}
        ,{caption : 'To', dbName:'endDate'}
        ,{caption : 'Weeks/Cycle', dbName:'cycleWeeks'}
        ,{caption : 'Start Day Of Week', dbName:'startDayOfWeek'}
        ]
        
        ,
        'valueFiltersFields' : []
        ,
        'rangeFiltersFields' : []
        ,
        'groupByFields' : []
        ,
        'orderByFields' : [
          {caption : 'Name', dbName:'name'}
        ]
      };
       return app ;
}

function getStandSchDetail_EntryCanceled()
{

var app = {};
      app.title = "Standard Schedule Entry" ;
      app.serviceName = "standSchEntry" ;
      app.masterCaption = "Standard Schedule";
      app.detailsCaption = "Standard Schedule Entry Canceled";
      
      app.menuItemSearch = "searchStandSchEntry" ;             //related menuItem for search 
      app.menuItemReport = "reportStandSchEntry" ;             //related menuItem for report
      
      app.reportMethod = "getStandSchEntryReports" ;           //used for search & report   
      app.reportModel = "standSchEntry" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
      
      app.navigatorType = "master_details" ;
      app.paginatorType = "basic" ;
      
      app.controlsPerColumn = 5 ;
      app.pageNo = 0 ;                          // page index is zero based
      app.htmlPage = null ;                     // for static content pages
      app.dataRecord = {id:0} ;                // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;                  // basic screen will have this parameter passed as null
      app.childApp = null ;                   // basic screen will have this parameter passed as null

 app.fieldsDefinition = 
      {
         'editFields' : [
      {caption : 'Schedule', type : 'text', dbName:'name', parentField:'true'}

        ,{caption : 'Day Of Week', type : 'text', dbName:'dayOfWeek'}
        
        ,{caption : 'Agent', type : 'select', dbName:'agentId', lookupService:'agent'}
        ,{caption : 'Start Time', type : 'text', dbName:'startTime'}
        ,{caption : 'End Time', type : 'text', dbName:'endTime'}
        ,{caption : 'Branch', type : 'text',dbName:'lookup_Branch_Name' , parentField:'true'}
        ,{caption : 'Default WorkStation', type : 'select', dbName:'workstationId', lookupService:'workStation'}
        

        ,{caption : 'Customer Max Number', type : 'text', dbName:'customerMaxNo'}
        ,{caption : 'Every Week', type : 'radio', additional:'none'}
        ,{caption : 'Specific Week', type : 'radio', additional:'none'}
        ,{caption : ' ', type : 'none'}
        
        ,{caption : ' ', type : 'none'}
        ,{caption : ' ', type : 'none'}
        ,{caption : ' ', type : 'none'}
        ,{caption : ' ', type : 'none'}
        ,{caption : 'Standard Schedule Entry Services / Default No. Range (Agent Mode)', type : 'button'}
        
        ]
      };

      app.reportFields = 
      {
        'displayFields' : [
        {caption : 'Agent' , width:100, dbName:'agentId', dbLookup:'lookup_Agent_Name'}
        ,{caption : 'Day Of Week' , width:80, dbName:'dayOfWeek'}
        ,{caption : 'Start Time' , width:30, dbName:'startTime'}
        ,{caption : 'End Time' , width:30, dbName:'endTime'}
        ,{caption : 'Customer Max Number' , width:50, dbName:'customerMaxNo'}
        ,{caption : 'Default WorkStation' , width:80, dbName:'workstationId' ,dbLookup:'lookup_Workstation_Name'}
        ]
          ,
        'valueFiltersFields' : []
        ,
        'rangeFiltersFields' : []
        ,
        'groupByFields' : []
        ,
        'orderByFields' : [
          {caption : 'Name', dbName:'name'}
        ]
      };
       return app ;
}

function getStandSchEntryCancel()
{
  var app = {};
      app.title = "Standard Schedule Entry Canceled" ;
      app.serviceName = "standSchEntryCancel" ;
      app.masterCaption = "Standard Schedule Entry";
      
      app.menuItemSearch = "searchStandSchEntryCancel" ;             //related menuItem for search 
      app.menuItemReport = "reportStandSchEntryCancel" ;             //related menuItem for report
      
      app.reportMethod = "getStandSchEntryCancelReports" ;           //used for search & report   
      app.reportModel = "standSchEntryCancel" ;                      //used for search & report
      app.criteriaPanelWidth = {};                     //used for search & report >> criteria panels widths
      app.mode = 'new' ;
      
      app.navigatorType = "details" ;
      app.paginatorType = "basic" ;
      
      app.controlsPerColumn = 100 ;
      app.pageNo = 0 ;                          // page index is zero based
      app.htmlPage = null ;                     // for static content pages
      app.dataRecord = {id:0} ;             // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;               // basic screen will have this parameter passed as null
      app.childApp = null ; 
      
     app.fieldsDefinition = 
      {
        'editFields' : [      
        {caption : 'Standard Schedule Name',  type : 'text',dbName:'lookup_standSch_Name' , parentField:'true'}
        ,{caption : 'Agent/Day/Time', type : 'text', dbName:'lookup_AgentDayTime_Name', parentField:'true'}      
        , {caption : 'Date', type : 'text', dbName:'docDate'}
        ]
      };

     app.reportFields = 
      {
        'displayFields' : [
         {caption : 'Date' , dbName:'docDate', width:30}
        ]
            ,
        'valueFiltersFields' : []
        ,
        'rangeFiltersFields' : []
        ,
        'groupByFields' : []
        ,
        'orderByFields' : [
          {caption : 'Name', dbName:'name'}
        ]
      };
      return app;   
}



/*function screenWorkFlowEditor()
{
var app = {};
      app.title = "Work Flow Editor" ;
      app.serviceName = "servicename" ;
      app.navigatorType = "basic" ;
      app.paginatorType = "basic" ;
      app.controlsPerColumn = 100 ;
      app.pageNo = 0 ;                          // page index is zero based
      app.htmlPage = null ;                     // for static content pages
      app.dataRecord = {id:0} ;             // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;               // basic screen will have this parameter passed as null
      app.childApp = null ; 
 app.fieldsDefinition = 
      {
        'editFields' : [
        {caption : 'Ticket', type : 'select'}
        ,{caption : 'Order' , type : 'text'}
        ,{caption : 'Service' ,  type : 'text'}
        ,{caption : 'Sub Service' ,  type : 'text'}
        ,{caption : 'Agent' ,  type : 'text'}    
        ]
      };
      app.reportFields = 
      {
        'displayFields' : [
        {caption : 'Order' , width:30}
        ,{caption : 'Service' , width:100}
        ,{caption : 'Sub Service' , width:100}
        ,{caption : 'Agent' , width:200}

        ]
      };
    return app;   
}
*/

function getTransactionDetails()
{
      var app = {}
      app.title = "Transactions Details";
      app.serviceName = "" ;                                        // this app is used for reports up till now
      app.detailsCaption = "";
      
      app.menuItemSearch = "" ;                                     //related menuItem for search 
      app.menuItemReport = "reportTransactionDetails" ;             //related menuItem for report
      
      app.reportMethod = "getTransactionDetailsReports";
      app.reportModel = "transactionDetailsReport" ;      
      app.criteriaPanelWidth= {
      'displayFields': 300 ,
      'valueFiltersFields': 330,
      'rangeFiltersFields': 200,
      'groupByFields' : 220,
      'orderByFields' : 150
      };
      
      app.navigatorType = "none" ;
      app.paginatorType = "none" ;
      
      app.controlsPerColumn = 100 ;
      app.htmlPage = null ;                                // for static content pages
      app.pageNo = 0 ;                                     // page index is zero based
      app.dataRecord = {id:0} ;             // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;                // basic screen will have this parameter passed as null
      app.childApp = null ;                 // basic screen will have this parameter passed as null
      
      app.fieldsDefinition = 
      {
        'editFields' : [
         {caption : 'Type', type : 'select', dbName:'agentTypeId', lookupService:'agentType'}
        ,{caption : 'Name', type : 'text', dbName:'name'}
        ,{caption : 'Login Name', type : 'text', dbName:'loginName'}
        ,{caption : 'Password', type : 'text', dbName:'password'}
        ,{caption : 'Email', type : 'text', dbName:'email'}
        ,{caption : 'Mobile', type : 'text', dbName:'mobile'}
        ]
      };
      app.reportFields = 
      {
        'displayFields' : [
                          {caption: 'Id', dbName:'id'  , summaryOp:'count', summaryCaption:"No. Of Ticket"}
                         ,{caption: 'Served Customer', dbName:'servedCustomer' , summaryOp:'sum', summaryCaption:"No. Of Served Customer" }
                         ,{caption: 'No Show Customer', dbName:'noShowCustomer' , summaryOp:'sum', summaryCaption:"No. Of No Shows"}
                         ,{caption: 'Average Serving Time', dbName:'grossServiceTime' , summaryOp:'ave', summaryCaption:"Average Serving Time"}
                         ,{caption: 'Average Waiting Time', dbName:'waitingTime'  , summaryOp:'ave', summaryCaption:"Average Waiting Time"}
                         ,{caption: 'Maximum Serving Time', dbName:'grossServiceTime'  , summaryOp:'max', summaryCaption:"Maximum Serving Time"}
                         ,{caption: 'Maximum Waiting Time', dbName:'waitingTime' , summaryOp:'max', summaryCaption:"Maximum Waiting Time"}
        ]
        ,
        'valueFiltersFields' : [
                          {caption : 'Area',  type : 'select', dbName:'areaId', lookupService:'area' , dbLookup:'lookup_Area_Name'}
                         ,{caption : 'Branch',  type : 'select', dbName:'branchId', lookupService:'branch' , dbLookup:'lookup_Branch_Name'}
                         ,{caption : 'WorkStation',  type : 'select', dbName:'workstationId', lookupService:'workStation' , dbLookup:'lookup_WorkStation_Name'}
                         ,{caption : 'Agent',  type : 'select', dbName:'agentId', lookupService:'agent' , dbLookup:'lookup_Agent_Name'}
                         ,{caption : 'Service',  type : 'select', dbName:'serviceId', lookupService:'service' , dbLookup:'lookup_Service_Name'}
                         ,{caption : 'Sub Service',  type : 'select', dbName:'subServiceId', lookupService:'subService' , dbLookup:'lookup_SubService_Name'}
                         ,{caption : 'Visit Type',  type : 'select', dbName:'visitTypeId', lookupService:'visitType' , dbLookup:'lookup_VisitType_Name'}
                         ,{caption : 'Segmentation',  type : 'select', dbName:'segmentId', lookupService:'segment' , dbLookup:'lookup_Segment_Name'}
        ]
        ,
        'rangeFiltersFields' : [
                          {caption: 'Date', dbName:'date', type : 'text', dbLookup:''}
        ]
        ,
        'groupByFields' : [
                          {caption : 'Day', dbName:'day', dbLookup:''}
                         ,{caption : 'Agent', dbName:'agentId', dbLookup:'lookup_Agent_Name'}
                         ,{caption : 'WorkStation', dbName:'workStationId', dbLookup:'lookup_WorkStation_Name'}
                         ,{caption : 'Service', dbName:'serviceId', dbLookup:'lookup_Service_Name'}
        ]
        ,
        'orderByFields' : [
                          {caption : 'Date', dbName:'date', dbLookup:''}
                         ,{caption : 'Agent', dbName:'agentId', dbLookup:'lookup_Agent_Name'}
                         ,{caption : 'WorkStation', dbName:'workStationId', dbLookup:'lookup_WorkStation_Name'}
                         ,{caption : 'Service', dbName:'serviceId', dbLookup:'lookup_Service_Name'}
        ]
      };
  return app ;
}
//----------------------------------------------------------------------------
function getReservation()
{
      var app = {}
      app.title = "Reservation";
      app.serviceName = "" ;                                        // this app is used for reports up till now
      app.detailsCaption = "";
      
      app.menuItemSearch = "" ;                                     //related menuItem for search 
      app.menuItemReport = "reportReservation" ;             //related menuItem for report
      
      app.reportMethod = "getReservationReports";
      app.reportModel = "reservationReport" ;      
      app.criteriaPanelWidth= {
      'displayFields': 300 ,
      'valueFiltersFields': 330,
      'rangeFiltersFields': 200,
      'groupByFields' : 220,
      'orderByFields' : 150
      };
      
      app.navigatorType = "none" ;
      app.paginatorType = "none" ;
      
      app.controlsPerColumn = 100 ;
      app.htmlPage = null ;                                // for static content pages
      app.pageNo = 0 ;                                     // page index is zero based
      app.dataRecord = {id:0} ;             // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;                // basic screen will have this parameter passed as null
      app.childApp = null ;                 // basic screen will have this parameter passed as null
      
      app.fieldsDefinition = 
      {
       /* 'editFields' : [
         {caption : 'Type', type : 'select', dbName:'agentTypeId', lookupService:'agentType'}
        ,{caption : 'Name', type : 'text', dbName:'name'}
        ,{caption : 'Login Name', type : 'text', dbName:'loginName'}
        ,{caption : 'Password', type : 'text', dbName:'password'}
        ,{caption : 'Email', type : 'text', dbName:'email'}
        ,{caption : 'Mobile', type : 'text', dbName:'mobile'}
        ]*/
      };
      app.reportFields = 
      {
        'displayFields' : [
                          {caption: 'Id', dbName:'id'  , summaryOp:'count', summaryCaption:"No. Of Ticket"}
                         ,{caption: 'Branch', dbName:'branchName' , summaryOp:'sum', summaryCaption:"No. Of Served Customer" }                         
        ]
        ,
        'valueFiltersFields' : [
                        
                        {caption : 'Agent',  type : 'select', dbName:'agentId', lookupService:'agent' , dbLookup:'lookup_Agent_Name'}
                    
        ]
        ,
        'rangeFiltersFields' : [
                         // {caption: 'Date', dbName:'date', type : 'text', dbLookup:''}
        ]
        ,
        'groupByFields' : [                        
                         {caption : 'Agent', dbName:'agentId', dbLookup:'lookup_Agent_Name'}                
        ]
        ,
        'orderByFields' : [                       
                         {caption : 'Agent', dbName:'agentId', dbLookup:'lookup_Agent_Name'}
                        
        ]
      };
  return app ;
}
//----------------------------------------------------------------------------
function getTicket()
{
      var app = {}
      app.title = "Tickets";
      app.serviceName = "" ;                                        // this app is used for reports up till now
      app.detailsCaption = "";
      
      app.menuItemSearch = "" ;                                     //related menuItem for search 
      app.menuItemReport = "reportTicket" ;             //related menuItem for report
      
      app.reportMethod = "getTicketReports";
      app.reportModel = "ticketReport";
      app.criteriaPanelWidth= {};
      
      app.navigatorType = "none" ;
      app.paginatorType = "none" ;
      
      app.controlsPerColumn = 100 ;
      app.htmlPage = null ;                                // for static content pages
      app.pageNo = 0 ;                                     // page index is zero based
      app.dataRecord = {id:0} ;             // record id , is passed 0 from main menu and will have self value when a record is selected
      app.parentApp = null ;                // basic screen will have this parameter passed as null
      app.childApp = null ;                 // basic screen will have this parameter passed as null
      
      app.fieldsDefinition = 
      {
        'editFields' : [
         {caption : 'Type', type : 'select', dbName:'agentTypeId', lookupService:'agentType'}
        ,{caption : 'Name', type : 'text', dbName:'name'}
        ,{caption : 'Login Name', type : 'text', dbName:'loginName'}
        ,{caption : 'Password', type : 'text', dbName:'password'}
        ,{caption : 'Email', type : 'text', dbName:'email'}
        ,{caption : 'Mobile', type : 'text', dbName:'mobile'}
        ]
      };
      app.reportFields = 
      {
        'displayFields' : [
                          {caption: 'Id', dbName:'id' , summaryOp:'count', summaryCaption:"Count of Tickets"}
                         ,{caption: 'Ticket No', dbName:'ticketNo'}
                         ,{caption: 'Segment', dbName:'segmentId', dbLookup:'lookup_Segment_Name' }
                         ,{caption: 'Reservation', dbName:'reservationId', dbLookup:'lookup_Reservation_Num' }
                         
        ]
        ,
        'valueFiltersFields' : [
                          {caption : 'Segment',  type : 'select', dbName:'segmentId', lookupService:'segment' , dbLookup:'lookup_Segment_Name'}
         ]
        ,
        'rangeFiltersFields' : [
                          {caption: 'Ticket No', type : 'text', dbName:'ticketNo' }
        ]
        ,
        'groupByFields' : [
                          {caption : 'Segment', dbName:'segmentId', dbLookup:'lookup_Segment_Name'}
        ]
        ,
        'orderByFields' : [
                          {caption : 'Ticket No', dbName:'ticketNo'}
        ]
      };
  return app ;
}
//----------------------------------------------------------------------------


