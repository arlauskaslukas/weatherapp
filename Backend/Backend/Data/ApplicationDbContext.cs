using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using Backend.Models;
using System.Globalization;

namespace Backend.Data
{
    public class ApplicationDbContext
    {
        public string ConnectionString { get; set; }
        public ApplicationDbContext(string connectionString)
        {
            this.ConnectionString = connectionString;
        }
        private MySqlConnection GetConnection()
        {
            return new MySqlConnection(ConnectionString);
        }
        public List<City> GetCities()
        {
            List<City> cities = new List<City>();
            using(MySqlConnection con = GetConnection())
            {
                con.Open();
                MySqlCommand cmd = new MySqlCommand("select * from city", con);
                using (var reader = cmd.ExecuteReader())
                {
                    while(reader.Read())
                    {
                        cities.Add(new City()
                        {
                            id = Convert.ToInt32(reader["id"]),
                            name = reader["name"].ToString()
                        });
                    }
                }
            }
            return cities;
        }
        public Forecast GetOneDayForecast(int cityid, string date)
        {
            var cultureInfo = new CultureInfo("lt-LT");
            using (MySqlConnection con = GetConnection())
            {
                con.Open();
                var cmdtxt = $"select * from dayforecast where fk_Cityid={cityid} and day=\"{date}\"";
                MySqlCommand cmd = new MySqlCommand(cmdtxt, con);
                Console.WriteLine(cmdtxt);
                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        Console.WriteLine("g4ets");
                        var forecast = new Forecast()
                        {
                            day = DateTime.Parse(reader["day"].ToString(), cultureInfo),
                            windSpeed = float.Parse(reader["windSpeed"].ToString()),
                            dayTemperature = float.Parse(reader["dayTemperature"].ToString()),
                            nightTemperature = float.Parse(reader["nightTemperature"].ToString()),
                            humidity = Convert.ToInt32(reader["humidity"]),
                            sunrise = DateTime.Parse(reader["sunrise"].ToString(), cultureInfo),
                            sunset = DateTime.Parse(reader["sunset"].ToString(), cultureInfo),
                            weatherStatus = reader["weatherStatus"].ToString(),
                            fk_Cityid = Convert.ToInt32(reader["fk_Cityid"])
                        };
                        return forecast;
                    }
                }
            }
            return null;
        }
    }
}
