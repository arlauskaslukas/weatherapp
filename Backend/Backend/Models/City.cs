using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Data;

namespace Backend.Models
{
    public class City
    {
        private ApplicationDbContext context;
        public int id { get; set; }
        public string name { get; set; }
    }
}
