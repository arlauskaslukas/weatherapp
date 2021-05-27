import {
  makeStyles,
  Paper,
  Typography,
  Grid,
} from "@material-ui/core";
import React from "react";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import WbCloudyIcon from "@material-ui/icons/WbCloudy";
import OpacityIcon from "@material-ui/icons/Opacity";
import Brightness4OutlinedIcon from "@material-ui/icons/Brightness4Outlined";
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import Brightness3Icon from "@material-ui/icons/Brightness3";

const determineIcon = (condition) => {
  if (condition === "Sunny") {
    return <WbSunnyIcon style={{ fontSize: "50", color: "#a89200" }} />;
  } else if (condition === "Cloudy") {
    return <WbCloudyIcon style={{ fontSize: "50", color: "#7a829e" }} />;
  } else if (condition === "Rainy") {
    return <OpacityIcon style={{ fontSize: "50", color: "#85a0ff" }} />;
  }
};

const BeaufortScale = (windspeed) => {
  if (windspeed < 0.5) {
    return "Calm";
  } else if (windspeed <= 5.5) {
    return "Gentle breeze";
  } else if (windspeed < 14.0) {
    return "Strong Breeze";
  } else if (windspeed < 24.0) {
    return "Gale";
  } else if (windspeed < 32.0) {
    return "Storm";
  }
  return "Hurricane";
};

const temp = (temperature, isCelsius) => {
  if (isCelsius) {
    return temperature;
  } else {
    return (temperature * 1.8 + 32).toFixed(0);
  }
};

const useStyles = makeStyles({
  paperstyle: {
    backgroundColor: `rgba(255,255,255,0.5)`,
    minHeight: "50%",
    width: "90%",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

function DayItem(props) {
  const classes = useStyles();
  const isCelsius = props.isCelsius;
  return (
    <Paper elevation={2} className={classes.paperstyle}>
      <Typography variant="h5" style={{ fontWeight: "bold" }}>
        {props.date}
      </Typography>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {determineIcon(props.status)}
        <Typography
          variant="h6"
          style={{ fontWeight: "bold", marginLeft: "10px" }}
        >
          {props.status}
        </Typography>
      </div>
      <Typography variant="body1" style={{ marginTop: "5px" }}>
        {" "}
        {props.windspeed} m/s, {BeaufortScale(props.windspeed)}
      </Typography>
      <div style={{ marginTop: "20px", width: "100%" }}>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <Grid container>
                <Grid
                  item
                  xs={8}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <WbSunnyIcon style={{ fontSize: "50px", color: "red" }} />
                </Grid>
                <Grid
                  item
                  xs={4}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Typography
                    variant="body1"
                    style={{ fontWeight: "bold", marginLeft: "10px" }}
                  >
                    {temp(props.temperature, isCelsius)}°{isCelsius ? "C" : "F"}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container style={{ marginTop: "20px" }}>
                <Grid
                  item
                  xs={6}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Brightness3Icon
                    style={{ fontSize: "50px", color: "blue" }}
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  {" "}
                  <Typography
                    variant="body1"
                    style={{ fontWeight: "bold", marginLeft: "10px" }}
                  >
                    {temp(props.nightlyTemperature, isCelsius)}°
                    {isCelsius ? "C" : "F"}
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
      <div
        style={{
          marginTop: "20px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <InvertColorsIcon color="primary" style={{ fontSize: "50px" }} />
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          Humidity: {props.humidity}%
        </Typography>
      </div>
      <div
        style={{
          marginTop: "20px",
          width: "75%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <WbSunnyIcon style={{ color: "orangered", fontSize: "50px" }} />
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          Sunrise: {props.sunrise}
        </Typography>
        <Brightness4OutlinedIcon style={{ color: "blue", fontSize: "50px" }} />
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          Sunset: {props.sunset}
        </Typography>
      </div>
    </Paper>
  );
}

export default DayItem;
