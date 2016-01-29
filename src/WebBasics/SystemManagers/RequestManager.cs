using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using WebBasics.SystemInterfaces;
using WebBasics.SystemModels;

namespace WebBasics.SystemManagers
{
    public class RequestManager
    {
        private readonly IRequestClient _requestClient;
        private readonly IApplicationCache _cache;
        private readonly ISerializer _serializer;

        public RequestManager(IRequestClient requestClient, IApplicationCache cache, ISerializer serializer)
        {
            _requestClient = requestClient;
            _cache = cache;
            _serializer = serializer;
        }

        public async Task<ApiResponse<T>> ExecuteRequest<T, TP>(RequestEndPoint endpoint, TP objParam)
        {
            var response = new ApiResponse<T>();

            //-------------------------- try get from cache --------------------------
            var cacheKey = string.Empty;
            if (endpoint.GetFromCache && endpoint.CacheTimeMin > 0)
            {
                cacheKey = GetCacheKeyWithParam(endpoint.CacheKey, objParam);
                response = _cache.Get<T>(cacheKey, endpoint.IsCacheSerialized);
                if (response.Status.Ok && response.Data != null)
                    return response;
            }
            //------------------------- send request ---------------------------------

            var webResponse = new ApiResponse<string>();
            var headers = GetHeadersFromString(endpoint.Headers);
            switch (endpoint.HttpMethod.ToUpper())
            {
                case "GET":
                    webResponse = await _requestClient.GetAsync(endpoint.Url, headers);  //todo pass param
                    break;
                case "POST":
                    webResponse = await _requestClient.PostJsonAsync<TP>(endpoint.Url, objParam, headers);
                    break;
            }
            //------------------------- handle response -----------------------------

            if (webResponse.Status.Ok && webResponse.Data != null) // desrialize n cache
            {
                response = _serializer.Deserialize<T>(webResponse.Data);

                //--------------------- set cache ------------------------------------ 
                if (response.Status.Ok && endpoint.CacheTimeMin > 0)
                {
                    if (endpoint.IsCacheSerialized)
                    {
                        _cache.Set(cacheKey, webResponse.Data);   //cache serialized result
                    }
                    else
                    {
                        _cache.Set(cacheKey, response.Data);      //cache desialized result
                    }
                }
            }
            else
            {
                response.Status = webResponse.Status;
            }
            //------------------------------------------------------------------------
            return response;
        }

        private string GetCacheKeyWithParam<T>(string cacheKey, T objParam)
        {
            if (objParam != null)
            {
                var serializeResponse = _serializer.Serialize(objParam);
                if (serializeResponse.Status.Ok)
                {
                    cacheKey = cacheKey + serializeResponse.Data;
                }
            }
            return cacheKey;
        }

        private Dictionary<string, string> GetHeadersFromString(string headers)
        {
            if (!string.IsNullOrEmpty(headers))
            {
                var deserializeResponse = _serializer.Deserialize<Dictionary<string, string>>(headers);
                if (deserializeResponse.Status.Ok)
                {
                    return deserializeResponse.Data;
                }
            }
            return null;
        }

        public static string GetRequestUrl<T>(string requestUrl, T param)  //todo currently not used
        {
            if (param != null)
            {
                foreach (var p in param.GetType().GetProperties())
                {
                    if (p.GetValue(param) != null)
                    {
                        var parameterValue = p.GetValue(param).ToString();
                        if (!string.IsNullOrEmpty(parameterValue))
                        {
                            requestUrl = requestUrl.Replace("#" + p.Name.ToUpper() + "#", parameterValue);
                        }
                    }
                }
            }
            return requestUrl;
        }


    }
}
