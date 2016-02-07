//-------------------------------------------------------------------------------------
function reportsMenu(menuItem) 
{
  var menuItemFound = true ; 
  switch (menuItem)
  {
  
    case 'reportAgent':
      var appAgents = getAgents();
      ReportGenerator(appAgents);  
      break;
      
    case 'reportTicket':
      var appTicket = getTicket();
       ReportGenerator(appTicket); 
      break ;
      
    case 'reportTransactionDetails':
      var appTransactionDetails = getTransactionDetails();
      ReportGenerator(appTransactionDetails);       
      break ;
      
    case 'reportReservation':
      var appReservation = getReservation();
      ReportGenerator(appReservation);       
      break ;
      
    case 'reportSegment':
      var appSegments = getSegments();
      ReportGenerator(appSegments);  
      break ;
   case 'reportErrorType':
      var appErrorType = getErrorType();
      ReportGenerator(appErrorType);  
      break ;
      case 'reportErrorList':
      var appErrorList = getErrorList();
      ReportGenerator(appErrorList);  
      break ;
       case 'reportAgentType':
      var appAgentType = getAgentTypes();
      ReportGenerator(appAgentType);  
      break ;
      case 'reportService':
      var appServices = getServices();
      ReportGenerator(appServices);  
      break ;
      case 'reportSubService':
      var appSubService = getSubServices();
      ReportGenerator(appSubService);  
      break ;
      case 'reportArea':
      var appArea = getAreas();
      ReportGenerator(appArea);  
      break ;
      case 'reportBranch':
      var appBranch = getBranches();
      ReportGenerator(appBranch);  
      break ;
      case 'reportVisitType':
      var appVisitTypes = getVisitTypes();
      ReportGenerator(appVisitTypes);  
      break ;
      
       case 'reportServiceTime':
      var appServiceTime = getServiceTime();
      ReportGenerator(appServiceTime);  
      break ;
      
       case 'reportWorkStation':
      var appWorkStation = getWorkstations();
      ReportGenerator(appWorkStation);  
      break ;
      
       case 'reportAgentService':
      var appAgentServices= getAgentServices();
      ReportGenerator(appAgentServices);  
      break ;
      
    default :
      menuItemFound = false ; 
      break;
  }
  return  menuItemFound ;     
}
//-------------------------------------------------------------------------------------
function searchesMenu(menuItem) 
{
  var menuItemFound = true ; 
  switch (menuItem)
  {  
   case 'searchAgent':
      var appAgents = getAgents();
      var appAgentServices = getAgentServices();
      appAgents.childApp = appAgentServices;
      appAgentServices.parentApp = appAgents;
      SearchGenerator(appAgents);  
      break ;
   case 'searchSegment':
      var appSegments = getSegments();
      SearchGenerator(appSegments);  
      break ;
   case 'searchErrorType':
      var appErrorType = getErrorType();
      SearchGenerator(appErrorType);  
      break ;
      case 'searchErrorList':
      var appErrorList = getErrorList();
      SearchGenerator(appErrorList);  
      break ;
       case 'searchAgentType':
      var appAgentType = getAgentTypes();
      SearchGenerator(appAgentType);  
      break ;
      case 'searchService':
      var appServices = getServices();
      var appSubServices = getSubServices();
      appSubServices.navigatorType = "details";
      appServices.childApp = appSubServices ;
      appSubServices.parentApp = appServices ;
      SearchGenerator(appServices);  
      break ;
      
      case 'searchSubService':
      var appServices = getServices();
      var appSubServices = getSubServices();
      appSubServices.navigatorType = "details";
      appServices.childApp = appSubServices ;
      appSubServices.parentApp = appServices ;
      SearchGenerator(appSubServices);  
      break ;
      
      case 'searchArea':
      var appArea = getAreas();
     var appBranch = getBranches() ;
     var appWorkStation = getWorkstations() ;
     appArea.childApp = appBranch ;
     appBranch.parentApp = appArea ;
     appBranch.childApp = appWorkStation;
     appWorkStation.parentApp = appBranch ;
      SearchGenerator(appArea);  
      break ;
      
      case 'searchBranch':
      var appArea = getAreas();
     var appBranch = getBranches() ;
     var appWorkStation = getWorkstations() ;
     appArea.childApp = appBranch ;
     appBranch.parentApp = appArea ;
     appBranch.childApp = appWorkStation;
     appWorkStation.parentApp = appBranch ;
      SearchGenerator(appBranch);  
      break ;
      
      case 'searchWorkStation':
      var appArea = getAreas();
     var appBranch = getBranches() ;
     var appWorkStation = getWorkstations() ;
     appArea.childApp = appBranch ;
     appBranch.parentApp = appArea ;
     appBranch.childApp = appWorkStation;
     appWorkStation.parentApp = appBranch ;
      SearchGenerator(appWorkStation);  
      break ;
      
      case 'searchVisitType':
      var appVisitTypes = getVisitTypes();
      SearchGenerator(appVisitTypes);  
      break ;
      
       case 'searchServiceTime':
      var appServiceTime = getServiceTime();
      SearchGenerator(appServiceTime);  
      break ;
      
       case 'searchAgentService':
      var appAgents = getAgents();
       var appAgentServices = getAgentServices();
       appAgents.childApp = appAgentServices;
       appAgentServices.parentApp = appAgents;
      SearchGenerator(appAgentServices);  
      break ;
      
    default :
      menuItemFound = false ; 
      break;
  }
  return  menuItemFound ;     
}
//-------------------------------------------------------------------------------------
function screensMenu(menuItem) 
{
  var menuItemFound = true ; 
  switch (menuItem)
  {
  case 'softTerminal':
   SoftTerminalScreen() 
   break;
  
  case 'systemFunction':
    var appSystemFunction = getSystemFunctions();
      ScreenGenerator(appSystemFunction);  
      break;
      
    case 'errorType':
      var appErrorType = getErrorType();
      ScreenGenerator(appErrorType);  
      break;
      
      case 'errorList':
      var appErrorList = getErrorList();
      ScreenGenerator(appErrorList);  
      break;
      
       case 'logTransaction':
      var appLogTransaction = getLogTransaction();
      ScreenGenerator(appLogTransaction);  
      break;
      
    case 'agentTypes':     
       var app = getAgentTypes();
       ScreenGenerator(app);
      break;

    case 'agentsAgentsService':
       var appAgents = getAgents();
       var appAgentServices = getAgentServices();
       appAgents.childApp = appAgentServices;
       appAgentServices.parentApp = appAgents;
       ScreenGenerator(appAgents);
      break;

    case 'visitTypes':
       var app = getVisitTypes();
       ScreenGenerator(app);
      break;

    case 'segmentations':
      var appSegments = getSegments();
      ScreenGenerator(appSegments);
      break;

    case 'areas':
     var appArea = getAreas();
     var appBranch = getBranches() ;
     var appWorkStation = getWorkstations() ;
     appArea.childApp = appBranch ;
     appBranch.parentApp = appArea ;
     appBranch.childApp = appWorkStation;
     appWorkStation.parentApp = appBranch ;
     
     ScreenGenerator(appArea);
     break;

    case 'canceledEntry':
      getCanceledEntry();
      break;

    case 'workFlowEditor':
      getWorkFlowEditor();
      break;

    case 'accessibleAgents':
    var appAgentType = getAgentTypes();
    appAgentType.detailsCaption = "Grant System Access";
    appAgentType.navigatorType = "master";
     var appAccessibleSysFunc = getAccessibleAgents() ;
     appAccessibleSysFunc.navigatorType = "details";
     appAccessibleSysFunc.masterCaption = "Agent Type";
     appAgentType.childApp = appAccessibleSysFunc ;
     appAccessibleSysFunc.parentApp = appAgentType ;
     
     ScreenGenerator(appAgentType);
      break;

    case 'onlineMonitor':
      getOnlineMonitor();
      break;

    case 'onlineMonitorDetailed':
      getOnlineMonitorDetailed();
      break;

    case 'reportViewerForReservation':
      getReportViewerForReservation();
      break;

    case 'reservationAgentModeHomePage':
      getReservationAgentModeHomePage();
      break;

    case 'reservationAgentModeSearch':
      getReservationAgentModeSearch();
      break;

    case 'agentBranchsHistory':
    var appAgentBranchsHistory = getAgentBranchsHistory();
       ScreenGenerator(appAgentBranchsHistory);
      break;

    case 'agentServiceSuspend':   
     var appAgent = getAgentsAgentSuspend();
     var appAgentSuspend = getAgentServiceSuspend() ;     
     appAgent.childApp = appAgentSuspend ;
     appAgentSuspend.parentApp = appAgent ;     
     ScreenGenerator(appAgent);
      break;

    case 'callingApproach1':
     var appCallingApproach = getCallingApproach1();
     var appLoadBalanceParameter = getLoadBalanceParameter();
     appCallingApproach.childApp = appLoadBalanceParameter;
     appLoadBalanceParameter.parentApp = appCallingApproach;
     ScreenGenerator(appCallingApproach);
      break;

    case 'agentServices':
      getAgentServices();
      break;

    case 'logBrowser':
      getLogBrowser();
      break;

    case 'services':
      var appServices = getServices();
      var appSubServices = getSubServices();
      appSubServices.navigatorType = "details";
     // appSubServices.detailsCaption = "Default Number Range Service Mode";
     // var appDefaultNumberRange = getDefaultNumberRange();
      appServices.childApp = appSubServices ;
      appSubServices.parentApp = appServices ;
     // appSubServices.childApp = appDefaultNumberRange;
     // appDefaultNumberRange.parentApp = appSubServices ;
     
      ScreenGenerator(appServices);
      break;
      
    case 'DfltRngSrvcMode':
      var appServices = getServices();
      var appSubServices = getSubServices();
      appSubServices.navigatorType = "master_details";
     appSubServices.detailsCaption = "Default Number Range Service Mode";
     var appDefaultNumberRange = getDefaultNumberRange();
      appServices.childApp = appSubServices ;
      appSubServices.parentApp = appServices ;
     appSubServices.childApp = appDefaultNumberRange;
     appDefaultNumberRange.parentApp = appSubServices ;
     
      ScreenGenerator(appServices);
      break;

    case 'standardWorkFlow':
       var app =  getStandardWorkFlow();
        ScreenGenerator(app);
      break;

    case 'serviceTime':
    var appServiceTime = getServiceTime();
      ScreenGenerator(appServiceTime);  
      break;

    case 'serialNumber':
    var appSerialNumber = getSerialNumber();
      ScreenGenerator(appSerialNumber); 
      
      break;

    case 'numberRangeManagerAgentMode':
     var appNumberRangeManagerAgentMode = getNumberRangeManagerAgentMode();
      ScreenGenerator(appNumberRangeManagerAgentMode);      
      break;

    case 'numberRangeManagerServiceMode':
      var appNumberRangeManagerServiceMode = getNumberRangeManagerServiceMode();
      ScreenGenerator(appNumberRangeManagerServiceMode);
      break;

    case 'reservationSignUp':
      getReservationSignUp();
      break;

    case 'dailySchedule':
      var appDailySchedule = getDailySchedule();
      var appDailySchEntrySrvc = getDailySchEntrySrvc();
      
      appDailySchedule.childApp = appDailySchEntrySrvc ;
      appDailySchEntrySrvc.parentApp = appDailySchedule ;
      
      ScreenGenerator(appDailySchedule);
      break;

    case 'reservationServiceModeSearch':
      getReservationServiceModeSearch();
      break;

    case 'visualRequestAgentMode':
      getVisualRequestAgentMode();
      break;

    case 'visualRequestServiceMode':
      VisualRequestBuilder();
      break;

    case 'servicesDefaultNumberRangeAgentMode':
     var appServicesDefaultNumberRangeAgentMode = getServicesDefaultNumberRangeAgentMode();     
     ScreenGenerator(appServicesDefaultNumberRangeAgentMode);
     break;

    case 'reservationAgentModeResult':
      getReservationAgentModeResult();
      break;

    case 'reservationServiceModeResult':
      getReservationServiceModeResult();
      break;

    case 'expEntry':
      var appExpEntry = getExpEntry();
      var appExpEntryService = getExpEntryServiceDetails();
      appExpEntry.childApp = appExpEntryService;
      appExpEntryService.parentApp = appExpEntry;
      ScreenGenerator(appExpEntry);
      break;

    case 'expEntryNumberRangeDetails':
     var appExpEntryNumberRange = getExpEntryNumberRangeDetails();
     ScreenGenerator(appExpEntryNumberRange);
     
      break;

    case 'transactionReportGeneratorDetailed':
      getTransactionReportGeneratorDetailed();
      break;

    case 'transactionReportGeneratorSummary':
      getTransactionReportGeneratorSummary();
      break;


    case 'standSchMaster':
      var appStandSch = getStandSchMaster();
     var appStandSchEntry = getStandSchDetail() ;
     var appServicesDefaultNumberRangeAgentModeStandSchEntrySrvcs = getServicesDefaultNumberRangeAgentModeStandSchEntrySrvcs() ;
     appStandSchEntry.detailsCaption = "Standard Schedule Entry Service";
     appStandSch.childApp = appStandSchEntry ;
     appStandSchEntry.parentApp = appStandSch ;
     appStandSchEntry.childApp = appServicesDefaultNumberRangeAgentModeStandSchEntrySrvcs;
     appServicesDefaultNumberRangeAgentModeStandSchEntrySrvcs.parentApp = appStandSchEntry ;
     
     ScreenGenerator(appStandSch);
      break;
      
      case 'serviceSubServiceStandardWorkFlow':
      var appServices = getServices();
      var appSubServices = getSubServices();
      appSubServices.navigatorType = "master_details";
     appSubServices.detailsCaption = "Standard WorkFlow";
     var appStandardWorkFlow = getStandardWorkFlow();
     appStandardWorkFlow.navigatorType = "details" ;
     appStandardWorkFlow.masterCaption = "Sub Service";
      appServices.childApp = appSubServices ;
      appSubServices.parentApp = appServices ;
     appSubServices.childApp = appStandardWorkFlow;
     appStandardWorkFlow.parentApp = appSubServices ;
     
      ScreenGenerator(appServices);
      
      break;
     
      case 'eventList':
        var app = getEventList();       
        ScreenGenerator(app);
      break;
      
       case 'standSchEntryCancel':
         var appStandSch = getStandSchMaster_EntryCanceled();
         var appStandSchEntry = getStandSchDetail_EntryCanceled() ;
         var appStandSchEntryCancel = getStandSchEntryCancel();
         appStandSchEntry.detailsCaption = "Standard Schedule Cancelled Entry";
         appStandSch.childApp = appStandSchEntry ;
         appStandSchEntry.parentApp = appStandSch ;
         appStandSchEntry.childApp = appStandSchEntryCancel;
         appStandSchEntryCancel.parentApp = appStandSchEntry ;
     
         ScreenGenerator(appStandSch);
      break;
      

    default :
      menuItemFound = false ; 
      break;
  }
  return  menuItemFound ;     
}
