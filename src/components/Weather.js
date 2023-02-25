import classes from './Weather.module.css'

const Weather = (props)=>{
    return(
        <div>
            {props.countryName !== ''?
            <>
            <h3><b>{props.cityName}</b></h3>
            <h4>Weather Details</h4>
            <div className={classes.weather}>
            <div style={{marginLeft: '5rem'}}>
            <p>localtime: {props.timeData}</p>
            <p>{props.descriptionData}</p>
            </div>
            <div>
            <p>Temperature: <b>{props.temperatureData}</b>&deg; C</p>
            <p>Humidity: {props.humidityData}%</p>
            <p>precipitation: {props.precipitationData}%</p>
            <p>Wind: {props.windData} km/h</p>
            </div>
            </div>
            </>
            :''}
            <p>{props.statusError && 'Enter correct city name'}</p>
        </div>
    )
}

export default Weather