using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Models;
using Backend.Data;
using Microsoft.Extensions.Logging;
using System.Globalization;
using Microsoft.AspNetCore.Cors;

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
        [EnableCors("AllowAnyOrigins")]
        [HttpGet("/api/forecast/oneday/{cityid}/{date}")]
        public Forecast getOneForecast([FromRoute] int cityid, [FromRoute] string date)
        {
            return applicationDbContext.GetOneDayForecast(cityid, date);
        }
        [EnableCors("AllowAnyOrigins")]
        [HttpGet("/api/forecast/week/{cityid}/{startDate}")]
        public IEnumerable<Forecast> getWeeklyForecast([FromRoute] int cityid, [FromRoute] string startDate)
        {
            return applicationDbContext.GetWeeklyForecasts(cityid, startDate);
        }
    }
}
