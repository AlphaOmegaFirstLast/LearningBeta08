using WebBasics.SystemModels;

namespace WebBasics.SystemInterfaces
{
    public interface ISerializer
    {
        ApiResponse<T> Deserialize<T>(string json);
        ApiResponse<string> Serialize<T>(T obj);
    }
}