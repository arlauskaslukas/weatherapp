using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using System.Linq;
using System.Threading.Tasks;
using Backend.Data;
using Backend.Models;

namespace Backend.Controllers
{
    [ApiController]
    public class CitiesController : ControllerBase
    {
        private readonly ILogger<CitiesController> _logger;
        private readonly ApplicationDbContext applicationDbContext;
        public CitiesController(ILogger<CitiesController> logger, ApplicationDbContext dbContext)
        {
            _logger = logger;
            applicationDbContext = dbContext;
        }
        [HttpGet("/api/cities")]
        public IEnumerable<City> Get()
        {
            return applicationDbContext.GetCities();
        }
    }
}
