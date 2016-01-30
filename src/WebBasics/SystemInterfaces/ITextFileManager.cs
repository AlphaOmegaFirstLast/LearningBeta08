using System.Threading.Tasks;
using WebBasics.SystemModels;

namespace WebBasics.SystemInterfaces
{
    public interface ITextFileManager
    {
        Task<ApiResponse<string>> ReadText(string fileName);
        Task<ApiResponse<string>> WriteText(string fileName, string txt);
    }
}