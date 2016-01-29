using System.Collections.Generic;
using System.Threading.Tasks;
using WebBasics.SystemModels;

namespace WebBasics.SystemInterfaces
{
    public interface IRequestClient
    {
        Task<ApiResponse<string>> GetAsync(string url, Dictionary<string, string> headers = null);
        Task<ApiResponse<string>> PostJsonAsync<T>(string url, T paramObj, Dictionary<string, string> headers = null);
        Task<ApiResponse<string>> DownloadFileAsync(string url, string fileName, Dictionary<string, string> headers = null);
    }
}