using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Newtonsoft.Json.Linq;
using WebBasics.SystemInterfaces;
using WebBasics.SystemModels;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace WebBasics.Controllers
{
    [Route("api/[controller]")]
    public class TestApiController : Controller
    {
        private readonly IApplicationCache _appCache;
        private readonly ISessionCache _sessionCache;
        private readonly IXmlManager _xmlManager;
        private readonly IRequestClient _requestClient;

        public TestApiController(IApplicationCache appCache, ISessionCache sessionCache,IXmlManager xmlManager, IRequestClient requestClient)
        {
            _appCache = appCache;
            _sessionCache = sessionCache;
            _xmlManager = xmlManager;
            _requestClient = requestClient;
        }

        [HttpGet("GetAppCache")]
        public IActionResult GetAppCache(string cacheKey)
        {
            var value =  _appCache.Get<string>(cacheKey);
            var obj = new TestCache() {CacheKey = cacheKey, Value = value};
            var x = new ObjectResult(obj);
            return x;
        }

        [HttpPost("SetAppCache")]
        public TestCache SetAppCache([FromBody]TestCache testCache)
        {
            _appCache.Set( testCache.CacheKey , testCache.Value);
            return testCache;
        }

        [HttpGet("GetSessionCache")]
        public IActionResult GetSessionCache(string cacheKey)
        {
            var value = _sessionCache.Get(cacheKey);
            var obj = new TestCache() { CacheKey = cacheKey, Value = value };
            var x = new ObjectResult(obj);
            return x;
        }

        [HttpPost("SetSessionCache")]
        public TestCache SetSessionCache([FromBody]TestCache testCache)
        {
            _sessionCache.Set(testCache.CacheKey.ToString(), testCache.Value.ToString());
            return testCache;
        }

        [HttpGet("GetXml")]
        public ApiResponse<Endpoints> GetXml(string fileName)
        {
            var response = _xmlManager.Get<Endpoints>(fileName);
            return response;
        }

        [HttpPost("SetXml")]
        public ApiResponse<Endpoints> SetXml([FromBody]TestXml  testXml)
        {
            var response = _xmlManager.Set<Endpoints>(testXml.FileName, testXml.Endpoints);
            return response;
        }

        [HttpPost("TestIntegration")]
        public ApiResponse<EmailInfo> TestIntegration([FromBody]EmailInfo emailInfo)
        {
            var response = new ApiResponse<EmailInfo>();
            response.Status = new ApiStatus();
            response.Data = emailInfo;
            return response;
        }

        [HttpGet("HttpClientGetAsync")]
        public async Task<ApiResponse<string>> HttpClientGetAsync()
        {
            var response = new ApiResponse<string>();
            response.Status = new ApiStatus();
            
            string page = "http://en.wikipedia.org/";

            using (var httpClient = new HttpClient())
            using (var httpResponse = await httpClient.GetAsync(page))
            using (var content = httpResponse.Content)
            {
                string result = await content.ReadAsStringAsync();
                response.Data = result;
            }
            return response;
        }

        [HttpPost("HttpClientPostAsync")]
        public async Task<ApiResponse<string>> HttpClientPostAsync([FromBody]EmailInfo emailInfo)
        {
            var response = new ApiResponse<string>();
            response.Status = new ApiStatus();

            string url = "http://localhost:49732/TestApi/TestIntegration";
            var jObject = new JObject(emailInfo);
            try
            {
                var stringContent = new StringContent(jObject.ToString());

                using (var httpClient = new HttpClient())
                using (var httpResponse = await httpClient.PostAsync(url, stringContent))
                using (var content = httpResponse.Content)
                {
                    string result = await content.ReadAsStringAsync();
                    response.Data = result;
                }

            }
            catch (Exception e)
            {
                response.Status.SetError(-1,"error in Post" ,e);               
            }
            return response;
        }

        [HttpPost("SendEmail")]
        public async Task<ApiResponse<string>> SendEmail([FromBody]EmailInfo emailInfo)
        {
            var response = new ApiResponse<string>();
            var msg = new MailMessage();
            try
            {
                msg.From = new MailAddress("Suzette.Antony@gmail.com");
                msg.To.Add(emailInfo.AddressTo);
                msg.Subject = emailInfo.Subject;
                msg.Body = emailInfo.Body;

                using (var client = new SmtpClient())
                {
                    client.Host = "smtp.gmail.com";     //"smtp.gmail.com";  // get it from options / 587
                    client.Port = 587;   //get it from options
                    client.UseDefaultCredentials = false;
                    client.Credentials = new NetworkCredential("Suzette.Antony@gmail.com", "santony106");

                    client.EnableSsl = true;
                    await client.SendMailAsync(msg);
                }
            }
            catch (Exception e)
            {
                response.Status.SetError(-1, "error in Post", e);
            }
            return response;
        }

    }
}
