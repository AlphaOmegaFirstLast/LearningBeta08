using System.Collections.Generic;
using WebBasics.BusinessModels;
using WebBasics.SystemModels;

namespace WebBasics.SystemInterfaces
{
    public interface IReportManager
    {
        dynamic CriteriaToLinq(ApiReportCriteria criteria);
    }
}