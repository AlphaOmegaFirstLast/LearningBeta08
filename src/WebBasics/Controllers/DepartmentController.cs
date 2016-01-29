using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.Mvc.ModelBinding.Metadata;
using Microsoft.Data.Entity;
using Microsoft.Framework.Logging;
using WebBasics.BusinessEntityFrameWork;
using WebBasics.BusinessModels;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace WebBasics.Controllers
{
    public class DepartmentController : Controller
    {
        [FromServices]
        public BusinessContext  BusinessContext { get; set; }
        [FromServices]
        public ILogger<DepartmentController> Logger { get; set; }

        // GET: /<controller>/
        public IActionResult Index()
        {
            var departments = BusinessContext.Departments;

            return View(departments);
        }

        public async Task<ActionResult> Details(int id) //parameter name must be id same like template
        {
            var employee = await BusinessContext.Employees.Include(emp => emp.Department).FirstOrDefaultAsync(e => e.DepartmentId== id);
            Logger.LogError("departmentId= " + id);
            if (employee == null)
            {
                return HttpNotFound();
            }
            return View(employee);
        }

        public ActionResult Create()
        {
            return View(new Department());
        }

        [HttpPost]
        public ActionResult Create(Department department)
        {
            if (ModelState.IsValid)
            {
                //add to database
            }
            else
            {
                return View(department);
            }
            return RedirectToAction("Index");
        }
    }
}
