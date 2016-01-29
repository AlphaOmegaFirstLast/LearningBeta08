using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Contexts;
using System.Threading.Tasks;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Http.Features;
using WebBasics.SystemInterfaces;

namespace WebBasics.SystemManagers
{
    public class SessionCache : ISessionCache
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        // ReSharper disable once InconsistentNaming
        private ISession _session => _httpContextAccessor.HttpContext.Session;

        public SessionCache(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        public string Get(string key)
        {
           return _session.GetString(key);
        }

        public void Set(string key, string value)
        {
            _session.SetString(key,value);
        }
    }

}

