using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using WebBasics.SystemInterfaces;
using WebBasics.SystemModels;

namespace WebBasics.SystemManagers
{
    public class CacheManager
    {
        private readonly IApplicationCache _cache;
        private readonly ITextFileManager _textFileManager;

        public CacheManager(IApplicationCache cache, ITextFileManager textFileManager)
        {
            _cache = cache;
            _textFileManager = textFileManager;
        }

        public async Task<ApiResponse<string>> ReadText(string fileName)
        {
            var cacheInfo = new CacheInfo(fileName);
            var response = new ApiResponse<string>();
            if (cacheInfo.Read)
            {
                response =_cache.Get<string>(cacheInfo.CacheKey);
            }                      
            //---------------------------------------------------------------------    
            if (!response.Status.Ok || response.Data == null)
            {
                response = await _textFileManager.ReadText(fileName);
                if (cacheInfo.Write && response.Status.Ok && response.Data != null)
                {
                    _cache.Set(cacheInfo.CacheKey, response.Data, cacheInfo.CacheTimeMin);  //todo data are deserialzed
                }
            }
            return response;
        }

    }
}
