using WebBasics.SystemModels;

namespace WebBasics.SystemInterfaces
{
    public interface IXmlManager
    {
        ApiResponse<T> Get<T>(string fileName, bool getFromCache = true, string cacheKey="");
        ApiResponse<T> Set<T>(string fileName, T obj, bool setToCache = true, string cacheKey = "");
    }
}