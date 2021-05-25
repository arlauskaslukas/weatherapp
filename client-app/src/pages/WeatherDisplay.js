import { Container, makeStyles, Typography, Select, Button, MenuItem } from '@material-ui/core';
import React, { useState } from 'react';
import theme from '../theme';
import RoomIcon from '@material-ui/icons/Room';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import DayItem from '../components/DayItem';

const useStyles = makeStyles({
    background: {
        backgroundColor: '#D3D3D3',
        height:'100vh',
        width: '100vw'
    },
    container:{
        paddingTop:'20px'
    },
    optionmenu:
    {
        display:'flex',
        flexDirection:'row',
        paddingTop:'30px'
    }
});

function WeatherDisplay() {
    const classes = useStyles();
    const [city, setCity] = useState(0);
    const [interval, setInterval] = useState(0);
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
                    <RoomIcon color="primary"/>
                    <Typography variant="body1" color="primary">Select city: </Typography>
                    <Select value={city} onChange={onCityChange} style={{marginRight:'20px', marginLeft:'20px'}}>
                        <MenuItem value={0}>Not Selected</MenuItem>
                    </Select>
                    <WatchLaterIcon color="primary"/>
                    <Typography variant="body1" color="primary">Select time interval: </Typography>
                    <Select value={interval} onChange={onIntervalChange} color="primary" style={{marginLeft:'20px',marginRight:'20px'}}>
                        <MenuItem value={0}>Not Selected</MenuItem>
                        <MenuItem value={1}>Today</MenuItem>
                        <MenuItem value={2}>Tommorrow</MenuItem>
                        <MenuItem value={3}>Weekly</MenuItem>
                    </Select>
                    <Button color="primary" variant="contained">FETCH DATA</Button>
                </div>
                <div style={{margin:'20px'}}>
                <DayItem temperature={20} nightlyTemperature={7}/>
                </div>
            </Container>
        </div>
        </>
    );
}

export default WeatherDisplay;