import {
  Container,
  makeStyles,
  Typography,
  Select,
  Button,
  MenuItem,
  Grid,
  FormControlLabel,
  Switch,
  Paper,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import RoomIcon from "@material-ui/icons/Room";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import DayItem from "../components/DayItem";
import axios from "axios";

const useStyles = makeStyles({
  background: {
    backgroundColor: "#D3D3D3",
  },
  container: {
    paddingTop: "20px",
    minHeight: "100vh",
  },
  optionmenu: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "30px",
    alignItems: "center",
    paddingBottom: "20px",
    justifyContent: "space-evenly",
  },
  error: {
    backgroundColor: "#FF0000",
    color: "#ffffff",
    padding: "20px",
    width: "100%",
  },
});

function DailyReport(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <DayItem
        date={props.data?.day}
        status={props.data?.weatherStatus}
        temperature={props.data?.dayTemperature}
        nightlyTemperature={props.data?.nightTemperature}
        humidity={props.data?.humidity}
        windspeed={props.data?.windSpeed}
        sunrise={props.data?.sunrise}
        sunset={props.data?.sunset}
        isCelsius={props.isCelsius}
      />
    </div>
  );
}

function WeeklyReport(props) {
  return (
    <>
      <Grid
        container
        spacing={2}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {props.data.map((obj) => {
          return (
            <Grid item xs={4}>
              <DayItem
                date={obj.day}
                status={obj.weatherStatus}
                temperature={obj.dayTemperature}
                nightlyTemperature={obj.nightTemperature}
                humidity={obj.humidity}
                windspeed={obj.windSpeed}
                sunrise={obj.sunrise}
                sunset={obj.sunset}
                isCelsius={props.isCelsius}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

function ForecastDisplay(props) {
  if (
    (props.interval === 1 || props.interval === 2) &&
    props.data !== undefined &&
    props.buttonPressed === true &&
    props.city !== 0
  ) {
    return <DailyReport isCelsius={props.isCelsius} data={props.data} />;
  } else if (
    props.interval === 3 &&
    props.data !== undefined &&
    props.data.length > 1 &&
    props.buttonPressed === true &&
    props.city !== 0
  ) {
    return <WeeklyReport isCelsius={props.isCelsius} data={props.data} />;
  } else {
    return <></>;
  }
}

function getDate(tommorrow) {
  var today = new Date();
  if (tommorrow === true) {
    today.setDate(today.getDate() + 1);
  }
  var month = today.getMonth() + 1;
  var monthStr = (month < 10 ? "0" : "") + month;
  var day = today.getDate();
  var daystr = (day < 10 ? "0" : "") + day;
  return today.getFullYear() + "-" + monthStr + "-" + daystr;
}

function WeatherDisplay() {
  const classes = useStyles();
  const [city, setCity] = useState(0);
  const [interval, setInterval] = useState(1);
  const [isCelsius, setIsCelsius] = useState(true);
  const [cities, setCities] = useState(undefined);
  const [responseData, setResponseData] = useState(undefined);
  const [buttonPressed, setButtonPressed] = useState(false);
  const onIntervalChange = (event) => {
    setInterval(event.target.value);
    setButtonPressed(false);
  };
  const onCityChange = (event) => {
    setCity(event.target.value);
    setButtonPressed(false);
  };
  const onButtonPressed = (cityId, interval) => {
    setButtonPressed(true);
    if (interval === 1) {
      var date = getDate(false);
      axios
        .get(`/forecast/oneday/${cityId}/${date}`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          setResponseData(res.data);
        }).catch((err)=> console.log(err));
    } else if (interval === 2) {
      date = getDate(true);
      axios
        .get(`/forecast/oneday/${cityId}/${date}`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          setResponseData(res.data);
        }).catch((err)=> console.log(err));
    } else if (interval === 3) {
      var startDate = getDate(false);
      axios
        .get(`/forecast/week/${cityId}/${startDate}`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          setResponseData(res.data);
        }).catch((err)=> console.log(err));
    }
  };
  useEffect(() => {
    axios.get("/cities", {}).then((res) => {
      setCities(res.data);
    }).catch((err)=> console.log(err));
  }, []);
  return (
    <>
      <div className={classes.background}>
        <Container className={classes.container}>
          <Typography variant="h3" color="primary">
            WEATHER FORECAST APP
          </Typography>
          <div className={classes.optionmenu}>
            <RoomIcon color="primary" />
            <Typography variant="body1" color="primary">
              Select city:{" "}
            </Typography>
            <Select
              value={city}
              onChange={onCityChange}
              style={{ marginRight: "20px", marginLeft: "20px" }}
            >
              <MenuItem value={0}>Not Selected</MenuItem>
              {cities?.map((obj) => (
                <MenuItem value={obj.id}>{obj.name}</MenuItem>
              ))}
            </Select>
            <WatchLaterIcon color="primary" />
            <Typography variant="body1" color="primary">
              Select time interval:{" "}
            </Typography>
            <Select
              value={interval}
              onChange={onIntervalChange}
              color="primary"
              style={{ marginLeft: "20px", marginRight: "20px" }}
            >
              <MenuItem value={1}>Today</MenuItem>
              <MenuItem value={2}>Tommorrow</MenuItem>
              <MenuItem value={3}>Weekly</MenuItem>
            </Select>
            <Button
              color="primary"
              variant="contained"
              onClick={() => onButtonPressed(city, interval)}
            >
              FETCH DATA
            </Button>
            <FormControlLabel
              control={
                <Switch
                  checked={isCelsius}
                  onChange={() => setIsCelsius(!isCelsius)}
                />
              }
              label="Fahrenheit / Celsius"
            />
          </div>
          {buttonPressed === true && city === 0 ? (
            <Paper className={classes.error}>
              <Typography variant="h5" style={{ fontWeight: "bold" }}>
                WARNING
              </Typography>
              <ul>
                <li>
                  <Typography>
                    City has not been selected. Please select city from the
                    dropdown menu.
                  </Typography>
                </li>
              </ul>
            </Paper>
          ) : (
            <></>
          )}

          <ForecastDisplay
            interval={interval}
            isCelsius={isCelsius}
            data={responseData}
            buttonPressed={buttonPressed}
            city={city}
          />
        </Container>
      </div>
    </>
  );
}

export default WeatherDisplay;
