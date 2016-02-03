using WebBasics.SystemModels;

namespace WebBasics.SystemInterfaces
{
    public interface IXmlFileManager
    {
        ApiResponse<T> ReadXml<T>(string fileName);
        ApiResponse<T> WriteXml<T>(string fileName, T obj);
    }
}