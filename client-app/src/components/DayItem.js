import { FormControlLabel, makeStyles, Paper, Switch, Typography, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import WbCloudyIcon from '@material-ui/icons/WbCloudy';
import OpacityIcon from '@material-ui/icons/Opacity';
import WhatshotIcon from '@material-ui/icons/Whatshot';

const determineIcon = (condition)=>{
    if(condition==="Sunny"){
        return <WbSunnyIcon style={{fontSize:'50', color:'#a89200'}}/>;
    }
    else if(condition==="Cloudy"){
        return <WbCloudyIcon style={{fontSize:'50', color:'#7a829e'}}/>;
    }
    else if(condition==="Rainy"){
        return <OpacityIcon style={{fontSize:'50', color:'#85a0ff'}}/>
    }
}

const temp = (temperature, isCelsius)=>{
    if(isCelsius) {
        return temperature;
    }
    else
    {
        return temperature * 1.8 + 32;
    }
}

const useStyles = makeStyles({
    paperstyle: {
        backgroundColor: `rgba(255,255,255,0.5)`,
        minHeight: '50%',
        width:'50%',
        padding:'20px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    }
});

function DayItem(props) {
    const classes = useStyles();
    const [isCelsius, setIsCelsius] = useState(true);
    const [isNightlyCelsius, setIsNightlyCelsius] = useState(true);
    return (
        <Paper elevation={2} className={classes.paperstyle}>
            <Typography variant="h5" style={{fontWeight:'bold'}}>25 May, Tuesday</Typography>
            <div style={{marginTop:'20px', display:'flex', flexDirection:'row', alignItems: 'center'}}>
            {determineIcon("Rainy")}
            <Typography variant="h6" style={{fontWeight:'bold'}}>Rainy</Typography>
            </div>
            <div style={{marginTop:'20px', width:'100%'}}>
                <Grid container spacing={2}>
                    <Grid item xs={6} style={{display:'flex', flexDirection:'row', justifyContent:'flex-end', alignItems: 'center'}}>
                        <WhatshotIcon style={{fontSize:'50px', color:'red'}}/>
                        <Typography variant="h6" style={{fontWeight:'bold'}}>{temp(props.temperature, isCelsius)}°{isCelsius?"C":"F"}</Typography>
                    </Grid>
                    <Grid item xs={6} style={{display:'flex', justifyItems:'flex-start', alignItems:'center'}}>
                        <FormControlLabel control={<Switch checked={isCelsius} onChange={()=>setIsCelsius(!isCelsius)}/>} label="Fahrenheit / Celsius"/>
                    </Grid>
                </Grid>
            </div>
            <div style={{marginTop:'20px', width:'100%'}}>
                <Grid container spacing={2}>
                    <Grid item xs={6} style={{display:'flex', flexDirection:'row', justifyContent:'flex-end', alignItems: 'center'}}>
                        <WhatshotIcon style={{fontSize:'50px', color:'blue'}}/>
                        <Typography variant="h6" style={{fontWeight:'bold'}}>{temp(props.nightlyTemperature, isNightlyCelsius)}°{isNightlyCelsius?"C":"F"}</Typography>
                    </Grid>
                    <Grid item xs={6} style={{display:'flex', justifyItems:'flex-start', alignItems:'center'}}>
                        <FormControlLabel control={<Switch style={{color:'blue'}} checked={isNightlyCelsius} onChange={()=>setIsNightlyCelsius(!isNightlyCelsius)}/>} label="Fahrenheit / Celsius"/>
                    </Grid>
                </Grid>
            </div>
        </Paper>
    );
}

export default DayItem;