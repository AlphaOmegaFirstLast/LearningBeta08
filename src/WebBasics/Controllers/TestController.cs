using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using WebBasics.SystemInterfaces;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Server.Kestrel;
using WebBasics.SystemModels;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace WebBasics.Controllers
{
    public class TestController : Controller
    {
        private readonly IApplicationCache _appCache; 
        private readonly ISessionCache _sessionCache;

        public TestController(IApplicationCache appCache, ISessionCache sessionCache)
        {
            _appCache = appCache;
            _sessionCache = sessionCache;
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        public String SetAppCache()
        {
            _appCache.Set("test", "Test App Cache",3);
            return "Application Cache Set";
        }
        public ApiResponse<string> GetAppCache()
        {
            var value =  _appCache.Get<string>("test");
            return value ;
        }

        public string SetSessionCache(string key, string value)
        {
            _sessionCache.Set(key, value );
            return "Session Cache Set";
        }

        public string GetSessionCache(string key)
        {            
            return _sessionCache.Get(key);
        }

    }
}
