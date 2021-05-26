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
} from "@material-ui/core";
import React, { useState } from "react";
import theme from "../theme";
import RoomIcon from "@material-ui/icons/Room";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import DayItem from "../components/DayItem";

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
        status="Cloudy"
        temperature={20}
        nightlyTemperature={7}
        humidity={6}
        windspeed={40}
        sunrise="06:27"
        sunset="22:07"
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
        <Grid item xs={4}>
          <DayItem
            status="Cloudy"
            temperature={20}
            nightlyTemperature={7}
            humidity={6}
            windspeed={40}
            sunrise="06:27"
            sunset="22:07"
            isCelsius={props.isCelsius}
          />
        </Grid>
        <Grid item xs={4}>
          <DayItem
            status="Cloudy"
            temperature={20}
            nightlyTemperature={7}
            humidity={6}
            windspeed={40}
            sunrise="06:27"
            sunset="22:07"
            isCelsius={props.isCelsius}
          />
        </Grid>
        <Grid item xs={4}>
          <DayItem
            status="Cloudy"
            temperature={20}
            nightlyTemperature={7}
            humidity={6}
            windspeed={40}
            sunrise="06:27"
            sunset="22:07"
            isCelsius={props.isCelsius}
          />
        </Grid>
        <Grid item xs={4}>
          <DayItem
            status="Cloudy"
            temperature={20}
            nightlyTemperature={7}
            humidity={6}
            windspeed={40}
            sunrise="06:27"
            sunset="22:07"
            isCelsius={props.isCelsius}
          />
        </Grid>
        <Grid item xs={4}>
          <DayItem
            status="Cloudy"
            temperature={20}
            nightlyTemperature={7}
            humidity={6}
            windspeed={40}
            sunrise="06:27"
            sunset="22:07"
            isCelsius={props.isCelsius}
          />
        </Grid>
        <Grid item xs={4}>
          <DayItem
            status="Cloudy"
            temperature={20}
            nightlyTemperature={7}
            humidity={6}
            windspeed={40}
            sunrise="06:27"
            sunset="22:07"
            isCelsius={props.isCelsius}
          />
        </Grid>
        <Grid item xs={4}>
          <DayItem
            status="Cloudy"
            temperature={20}
            nightlyTemperature={7}
            humidity={6}
            windspeed={40}
            sunrise="06:27"
            sunset="22:07"
            isCelsius={props.isCelsius}
          />
        </Grid>
      </Grid>
    </>
  );
}

function ForecastDisplay(props) {
  if (props.interval === 1 || props.interval === 2) {
    return <DailyReport isCelsius={props.isCelsius} />;
  } else if (props.interval === 3) {
    return <WeeklyReport isCelsius={props.isCelsius} />;
  } else {
    return <></>;
  }
}

function WeatherDisplay() {
  const classes = useStyles();
  const [city, setCity] = useState(0);
  const [interval, setInterval] = useState(1);
  const [isCelsius, setIsCelsius] = useState(true);
  const onIntervalChange = (event) => {
    setInterval(event.target.value);
  };
  const onCityChange = (event) => {
    setCity(event.target.value);
  };
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
            <Button color="primary" variant="contained">
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
          <ForecastDisplay interval={interval} isCelsius={isCelsius} />
        </Container>
      </div>
    </>
  );
}

export default WeatherDisplay;
