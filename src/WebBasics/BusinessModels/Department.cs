﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebBasics.BusinessModels
{
    public class Department
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        
        // Navigation property
        public ICollection<Employee> Employees { get; set; }
    }
}
