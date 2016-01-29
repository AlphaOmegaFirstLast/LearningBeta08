using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebBasics.BusinessEntityFrameWork;
using WebBasics.BusinessInterfaces;
using WebBasics.BusinessModels;

namespace WebBasics.BusinessRepository
{
    public class RepoDepartment: IRepoDepartment
    {
        static List<Department> _itemsList = new List<Department>();

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
