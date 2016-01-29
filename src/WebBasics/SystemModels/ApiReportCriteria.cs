using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebBasics.SystemModels
{
    public class ApiReportCriteria
    {
        public string Title{ get; set; }
        public ReportField[] DisplayFields{ get; set; }
        public ReportField[] GroupBy{ get; set; }
        public ReportField[] OrderBy{ get; set; }
        public ReportFilter[] ValueFilters{ get; set; }
        public ReportFilter[] RangeFilters{ get; set; }       
    }
}
