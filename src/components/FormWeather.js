import React, {useState} from 'react'
import  classes  from './FormWeather.module.css'

const FormWeather = (props)=>{
    const [city, setCity] = useState('')
    const handleSubmit = (event)=>{
        event.preventDefault();
        props.cityData(city);
        setCity('')
    }

    const inputNameHandler = (event)=>{
        setCity(event.target.value)
    }
    return(
        <div>
         <form className={classes.formWeather} onSubmit={handleSubmit} autoComplete="none">
            <div>
            <input type="text" className = {city? `${classes.inputTextForm}`: `${classes.inputForm}`} name="city" placeholder="City" onChange={inputNameHandler} value={city} autoComplete="none" />
            </div>
            <div>
            <button className={classes.buttonForm}>Get Weather</button>
            </div>
         </form>
        </div>
    )
}

export default FormWeather