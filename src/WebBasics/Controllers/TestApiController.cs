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
using WebBasics.TestModels;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace WebBasics.Controllers
{
    [Route("api/[controller]")]
    public class TestApiController : Controller
    {
        private readonly IApplicationCache _appCache;
        private readonly ISessionCache _sessionCache;
        private readonly IRequestClient _requestClient;
        private readonly IXmlManager _xmlManager;
        private readonly ITextFileManager _textFileManager;


        public TestApiController(IApplicationCache appCache, ISessionCache sessionCache, IXmlManager xmlManager, IRequestClient requestClient, ITextFileManager textFileManager)
        {
            _appCache = appCache;
            _sessionCache = sessionCache;
            _xmlManager = xmlManager;
            _requestClient = requestClient;
            _textFileManager = textFileManager;
        }

        [HttpGet("GetAppCache")]
        public IActionResult GetAppCache(string cacheKey)
        {
            var value = _appCache.Get<string>(cacheKey);
            var obj = new TestCache() { CacheKey = cacheKey, Value = value };
            var x = new ObjectResult(obj);
            return x;
        }

        [HttpPost("SetAppCache")]
        public TestCache SetAppCache([FromBody]TestCache testCache)
        {
            _appCache.Set(testCache.CacheKey, testCache.Value);
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
        public ApiResponse<EndPoints> GetXml(string fileName)
        {
            var response = _xmlManager.Get<EndPoints>(fileName);
            return response;
        }

        [HttpPost("SetXml")]
        public ApiResponse<EndPoints> SetXml([FromBody]TestXml testXml)
        {
            var response = _xmlManager.Set<EndPoints>(testXml.FileName, testXml.EndPoints);
            return response;
        }

        [HttpPost("TestIntegration")]
        [HttpGet("TestIntegration")]
        public ApiResponse<TestRequest> TestIntegration([FromBody]TestRequest testRequest)
        {
            var response = new ApiResponse<TestRequest>();
            if (testRequest != null)
            {
                testRequest.Id = testRequest.Id * 2;
                testRequest.Name = "Hello " + testRequest.Name;
                response.Data = testRequest;
            }
            else
            {
                response.Data = new TestRequest() {Name="No data has been posted to the server. Http Method is: " + this.Request.Method };
            }
            return response;
        }

        [HttpGet("RequestClientGet")]
        public async Task<ApiResponse<string>> RequestClientGet()
        {            
            var url = "http://localhost:49732/api/TestApi/TestIntegration";
            var response = await _requestClient.GetAsync(url);
            return response;
        }

        [HttpPost("RequestClientPostAsJson")]
        public async Task<ApiResponse<string>> HttpClientPostAsync([FromBody]TestRequest testRequest)
        {
            var url = "http://localhost:49732/api/TestApi/TestIntegration";
            var response = await _requestClient.PostJsonAsync(url, testRequest);
            return response;
        }
        [HttpPost("DownloadFileToServer")]
        public async Task<ApiResponse<string>> DownloadFileToServer([FromBody] TestDownload testDownload)
        {
            var response = await _requestClient.DownloadFileAsync(testDownload.Url, testDownload.FileName);
            return response;
        }
        [HttpGet("GetObjectFromXml")]
        public ApiResponse<EndPoints> GetObjectFromXml([FromQuery]string fileName)
        {
            var response = _xmlManager.Get<EndPoints>(fileName);
            return response;
        }

        [HttpPost("SetObjectToXml")]
        public ApiResponse<EndPoints> SetObjectToXml([FromBody] TestXml testXml)
        {
            var response = _xmlManager.Set<EndPoints>(testXml.FileName, testXml.EndPoints);
            return response;
        }

        [HttpGet("ReadTextFromFile")]
        public async Task<ApiResponse<string>> ReadTextFromFile([FromQuery]string fileName)
        {
            var response = await _textFileManager.ReadText(fileName);
            return response;
        }

        [HttpPost("WriteTextToFile")]
        public async Task<ApiResponse<string>> WriteTextToFile([FromBody] TestText testText)
        {
            var response = await _textFileManager.WriteText(testText.FileName, testText.Text);
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
