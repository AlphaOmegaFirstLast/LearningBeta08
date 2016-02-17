using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic;
using System.Security.Cryptography;
using System.Threading.Tasks;
using WebBasics.BusinessEntityFrameWork;
using WebBasics.BusinessModels;
using WebBasics.SystemInterfaces;
using WebBasics.SystemModels;

namespace WebBasics.SystemManagers
{
    public class ReportManager: IReportManager 
    {
        private readonly BusinessContext _dbContext;

        public ReportManager(BusinessContext dbContext)
        {
            _dbContext = dbContext;
        }

        public dynamic CriteriaToLinq (ApiReportCriteria criteria) // using system.linq.dynamic.Library
        {

            var qry =
                _dbContext.Departments.Join(_dbContext.Employees, d => d.Id, e => e.DepartmentId,
                    (d, e) => new {department = d.Name, emp = e.Name}).Where("Id=1").OrderBy("Name"); //.Select("new (Id , Name)");    // anonymus type to dynamic 
            return qry.ToDynamicArray();
        }



        private dynamic testLinq()
        {

            var mainTable = _dbContext.Departments;
            var qry1 = mainTable.OrderBy(item => item.Name);
            var qry2 = qry1.Select(d => new { Id = 333, Name = d.Name });    // anonymus type to dynamic 
            return qry2.ToList();
        }



        /*
        var query = database.customers.Join(database.orders,
                                 customer => customers.ID,
                                 order => order.customer_ID,
                                (customer, order) => new { x = customer, y = order });


It could be something like

var myvar = from a in context.MyEntity
            join b in context.MyEntity2 on a.key = b.key
            select new { prop1 = a.prop1, prop2= b.prop1};

*/
    }
}
