using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.Entity;
using WebBasics.BusinessEntityFrameWork;
using WebBasics.BusinessInterfaces;
using WebBasics.BusinessModels;

namespace WebBasics.BusinessRepository
{
    public class RepoDepartment: IRepoDepartment
    {
        private readonly BusinessContext _dbContext;
        private readonly List<Department> _itemsList = new List<Department>(); // to test linq IEnumerable

        public RepoDepartment(BusinessContext dbContext)
        {
            _dbContext = dbContext;
          //  _itemsList = _dbContext.Departments; // to test linq IQuerable
        }

        public IEnumerable<Department> GetAll()
        {
            return _itemsList.ToList();
        }

        public Department GetById(int id)
        {
            return _itemsList.FirstOrDefault(d => d.Id == id);
        }

        public Department Insert(Department item)
        {
            _itemsList.Add(item);
            return item;
        }

        public Department Update(Department item)
        {
            var oldItem = _itemsList.FirstOrDefault(i => i.Id == item.Id);  
            if (oldItem != null)
            { 
            _itemsList.Remove(oldItem);
            _itemsList.Add(item);
            }
            return item;
        }

        public Department Delete(int key)
        {
            var item = _itemsList.FirstOrDefault(i => i.Id == key);
            _itemsList.Remove(item);
            return item;
        }
    }
}
