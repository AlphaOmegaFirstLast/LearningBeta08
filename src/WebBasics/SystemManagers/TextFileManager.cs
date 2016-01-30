using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNet.Http;
using Microsoft.Dnx.Runtime;
using WebBasics.SystemInterfaces;
using WebBasics.SystemModels;

namespace WebBasics.SystemManagers
{
    public class TextFileManager: ITextFileManager
    {
        private readonly IApplicationEnvironment _appEnvironment;

        public TextFileManager(IApplicationEnvironment appEnvironment)
        {
            _appEnvironment = appEnvironment;
        }
        //--------------------------------------------------------------------

        public async Task<ApiResponse<string>> ReadText(string fileName)
        {
            var response = new ApiResponse<string>();
            string fileSysName = _appEnvironment.ApplicationBasePath + fileName;
            try
            {
                using (var sr = new StreamReader(fileSysName))
                {
                    response.Data = await sr.ReadToEndAsync();
                }
            }
            catch (Exception e)
            {
                response.Status.SetError(-1, $"Read Text {fileName}", e);
            }
            return response;
        }
        //--------------------------------------------------------------------

        public async Task<ApiResponse<string>> WriteText(string fileName, string txt)
        {

            var response = new ApiResponse<string>();
            string fileSysName = _appEnvironment.ApplicationBasePath + fileName;
            try
            {
                using (var sw = new StreamWriter(fileSysName))
                {
                   await sw.WriteAsync(txt);
                }
            }
            catch (Exception e)
            {
                response.Status.SetError(-1, $"Write Text {fileName}", e);
            }
            return response;
        }


    }
}
