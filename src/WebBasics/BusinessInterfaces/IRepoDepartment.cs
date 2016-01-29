using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebBasics.BusinessModels;

namespace WebBasics.BusinessInterfaces
{
    public interface IRepoDepartment
    {
        IEnumerable<Department> GetAll();
        Department GetById(int key);
        Department Insert(Department item);
        Department Update(Department item);
        Department Delete(int key);
    }
}
