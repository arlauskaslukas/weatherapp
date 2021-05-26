using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Models;
using Backend.Data;
using Microsoft.Extensions.Logging;
using System.Globalization;

namespace Backend.Controllers
{
    [ApiController]
    public class ForecastController : ControllerBase
    {
        private readonly ILogger<ForecastController> _logger;
        private readonly ApplicationDbContext applicationDbContext;
        public ForecastController(ILogger<ForecastController> logger, ApplicationDbContext dbContext)
        {
            _logger = logger;
            applicationDbContext = dbContext;
        }
        [HttpPost("/api/forecast/oneday")]
        public Forecast getOneForecast(int cityid)
        {
            return applicationDbContext.GetOneDayForecast(cityid, DateTime.Now.ToString("yyyy-MM-dd"));
        }
    }
}
