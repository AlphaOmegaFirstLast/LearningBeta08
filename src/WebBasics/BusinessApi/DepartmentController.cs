using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Mvc;
using WebBasics.BusinessInterfaces;
using WebBasics.BusinessModels;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace WebBasics.BusinessApi
{
    //[Route("api/[controller]")]
    public class DepartmentController : Controller
    {
        [FromServices]
        public IRepoDepartment RepoDepartment { get; set; } 

        // GET: api/values
        [HttpGet] //("GetAll")]
        public IEnumerable<Department> GetAll()
        {
            return RepoDepartment.GetAll();
        }

        //GET api/values/5
        [HttpGet] //("GetById/{id}" , Name=""GetById"")]
        public IActionResult GetById(int id)
        {
            var item = RepoDepartment.GetById(id);
            if (item == null)
            {
                return HttpNotFound();
            }
            return new ObjectResult(RepoDepartment.GetById(id));
        }

        // POST api/values
        [HttpPost] //("Insert")]
        public IActionResult Insert([FromBody]Department item)
        {
            if (item == null)
            {
                return HttpBadRequest();
            }
            RepoDepartment.Insert(item);
            return CreatedAtAction("GetById", new { controller = "Department", id = item.Id }, item);
        }

        // PUT api/values/5
        [HttpPut] //("Update/{id}", Name = "xx")]
        public IActionResult Update(int id, [FromBody]Department item)
        {
            if (item == null)                    //  || item.id!=id
            {
                return HttpBadRequest();
            }

            var foundItem = RepoDepartment.GetById(item.Id);
            if (foundItem == null)
            {
                return HttpNotFound();
            }

            RepoDepartment.Update(item);
            return new NoContentResult();
            //According to the HTTP spec, a PUT request requires the client to send the entire updated entity, not just the deltas.
        }



        // DELETE api/values/5
        [HttpDelete] //("Delete/{id}" , Name="Must be Provided")]
        public void Delete(int id)
        {
            RepoDepartment.Delete(id);   //httpResponse: The void return type returns a 204 (No Content)
        }
    }
}
