using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.Mvc.Formatters;
using Microsoft.AspNet.Mvc.Rendering;
using Microsoft.Data.Entity;
using Microsoft.Framework.Logging;
using Remotion.Linq.Clauses;
using WebBasics.BusinessEntityFrameWork;
using WebBasics.BusinessModels;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace WebBasics.Controllers
{
    public class EmployeeController : Controller
    {
        [FromServices]
        public BusinessContext BusinessContext { get; set; }
        [FromServices]
        public ILogger<EmployeeController> Logger { get; set; }
        //----------------------------------------------------------

        // GET: /<controller>/
        public IActionResult Index()
        {
            var employees = BusinessContext.Employees;
            return View(employees);
        }

        public IActionResult List()
        {
            var employees = BusinessContext.Employees.Include(e=> e.Department);
            return View(employees);
        }

        public ActionResult Create()
        {
            var Id = 0;
            ViewBag.Departments =
                BusinessContext.Departments.Select(
                    d => new SelectListItem() { Text = d.Name, Value = d.Id.ToString() }).ToList();

            return View(new Employee());
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create(Employee emp)
        {

            if (emp.BirthDate >= emp.GraduationDate)  //this should go to javascript validation
            {
                ModelState.AddModelError(string.Empty, "Graduation Date must be greater than Birthdate.");
            }
            if (ModelState.IsValid)  //this has nothing to do w the model Employee- it doesnt check its rules
            {
                BusinessContext.Employees.Add(emp);
                try
                {
                    await BusinessContext.SaveChangesAsync();
                }
                catch (Exception e)
                {
                    ModelState.AddModelError(string.Empty, e.Message);
                    throw;
                }
            }

            return View(emp);
        }

        public async Task<ActionResult> Edit(int id)
        {
            var emp = await BusinessContext.Employees.FirstOrDefaultAsync(e => e.Id == id);
            if (emp == null)
            {
                // throw new ArgumentNullException(nameof(emp));
                return HttpNotFound();

            }
            GetDepartmentsList();
            return View(emp);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Update(int id, Employee emp)
        {
            try
            {
                emp.Id = id;

                BusinessContext.Employees.Attach(emp);  // one query on DB (find and update)
                var entry = BusinessContext.Entry(emp);
                entry.State = EntityState.Modified;  // all properties will be updated according to model's properties of the view. view must have all properties
                                                     // entry.Property(e=>e.BirthDate).IsModified = false; // in case u dont want to modify the field in Db
                                                     // or use update to replace these 3 lines if all properties are modified 
                await BusinessContext.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            catch (DbUpdateException e)
            {
                ModelState.AddModelError(string.Empty, "cannot update entity " + e.Message);
            }

            return View(emp);
        }

        public async Task<ActionResult> Delete(int id , bool? retry)  //optional parameter
        {
            var emp = await BusinessContext.Employees.FirstOrDefaultAsync(e => e.Id == id);
            if (emp == null)
            {
                // throw new ArgumentNullException(nameof(emp));
                return HttpNotFound();

            }
            ViewBag.Retry = retry ?? false;   // if null set it to a value otherwise it remains with the same value
            return View(emp);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Delete(int id)
        {
            try
            {
                var emp = await BusinessContext.Employees.FirstOrDefaultAsync(e => e.Id == id);
                BusinessContext.Employees.Remove(emp);
                await BusinessContext.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                return RedirectToAction("Delete", new { id = id, retry = true });
            }
            return RedirectToAction("Index");

        }


        public void GetDepartmentsList()
        {
            ViewBag.Departments = BusinessContext.Departments.Select(d => new SelectListItem() { Text = d.Name, Value = d.Id.ToString() }).ToList();
        }

        private void ReflectionToSetUpdatedValues(Employee original , Employee updatedUser)
        {


            foreach (PropertyInfo propertyInfo in original.GetType().GetProperties())
            {
                if (propertyInfo.GetValue(updatedUser, null) == null)
                    propertyInfo.SetValue(updatedUser, propertyInfo.GetValue(original, null), null);
            }
            BusinessContext.Attach(updatedUser);
            BusinessContext.Entry(updatedUser).State = EntityState.Modified;
            BusinessContext.SaveChanges();


        }
    }
}
