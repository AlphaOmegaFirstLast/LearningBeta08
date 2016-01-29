using System;
using System.IO;
using System.Xml;
using Microsoft.Dnx.Runtime;
using WebBasics.SystemInterfaces;
using WebBasics.SystemModels;

namespace WebBasics.SystemManagers
{
    public class XmlManager:IXmlManager
    {
        private readonly IApplicationCache _cache;
        private readonly IApplicationEnvironment _appEnvironment;

        public XmlManager(IApplicationCache cache, IApplicationEnvironment appEnvironment)
        {
            _cache = cache;
            _appEnvironment = appEnvironment;
        }

        public ApiResponse<T> Get<T>(string fileName, bool getFromCache = true, string cacheKey="")
        {
            var response = new ApiResponse<T>();
            if (getFromCache && !string.IsNullOrEmpty(cacheKey))
            {
                response = _cache.Get<T>(cacheKey);
            }
            //---------------------------------------------------------------------    
            if (!response.Status.Ok || response.Data == null)
            {
                string fileSysName = _appEnvironment.ApplicationBasePath + fileName;
                FileStream fs = null;
                System.Xml.XmlReader reader = null;
                //---------------------------------------------------------------------
                try
                {
                    fs = new FileStream(fileSysName, FileMode.Open, FileAccess.Read, FileShare.Read);
                    reader = XmlReader.Create(fs);
                    var serializer = new System.Xml.Serialization.XmlSerializer(typeof(T)); //todo use DI for serializer
                    var objFile = serializer.Deserialize(reader);
                    response.Data = (T)objFile;
                    _cache.Set(cacheKey, response.Data, 60);  //todo data are deserialzed
                }
                catch (Exception e)
                {
                    response.Status.SetError(-1, "Error reading/deserializing file: " + fileSysName, e);
                }
                finally
                {
                    reader?.Close();
                    fs?.Close();
                }
            }
            return response;
        }


        public ApiResponse<T> Set<T>(string fileName, T obj, bool setToCache = false, string cacheKey="")
        {
            var response = new ApiResponse<T>();
            string fileSysName = _appEnvironment.ApplicationBasePath + fileName;
            FileStream fs = null;
            System.Xml.XmlWriter writer = null;
            //---------------------------------------------------------------------
            try
            {
                System.IO.File.Delete(fileSysName);
                fs = new FileStream(fileSysName, FileMode.OpenOrCreate, FileAccess.Write, FileShare.Write);
                writer = XmlWriter.Create(fs);
                var serializer = new System.Xml.Serialization.XmlSerializer(typeof(T));
                serializer.Serialize(writer, obj);
                //------------------------------------------------
                if (setToCache && !string.IsNullOrEmpty(cacheKey))
                {
                    _cache.Set(cacheKey,obj);  //todo obj serialzed to cache
                }
            }
            catch (Exception e)
            {
                response.Status.SetError(-1, "Error writting/serializing file: " + fileSysName, e);
            }
            finally
            {
                writer?.Close();
                fs?.Close();
            }
            return response;
        }


    }
}
