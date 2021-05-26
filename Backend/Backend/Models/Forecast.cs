using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Data;

namespace Backend.Models
{
    public class Forecast
    {
        private ApplicationDbContext context;
        public DateTime day { get; set; }
        public float windSpeed { get; set; }
        public float dayTemperature { get; set; }
        public float nightTemperature { get; set; }
        public int humidity { get; set; }
        public DateTime sunrise { get; set; }
        public DateTime sunset { get; set; }
        public string weatherStatus { get; set; }
        public int fk_Cityid { get; set; }
    }
}
