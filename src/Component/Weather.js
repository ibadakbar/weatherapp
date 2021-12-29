import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../src/App.css';



const Weather = () => {

    const [weatherData, setWeatherData] = useState([])



    useEffect(() => {

        axios.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=09a7a33b33d1e82facecdd9df1a0fef1')
        .then((res) => {
            setWeatherData(res?.data)
        })

    }, [weatherData])


    const main = weatherData?.weather
    let arr = [];
    for (let i = 0; i < main?.length; i++) {
        arr.push(main[i])

    }
  
    return (
        <div>
            {


                <div className="card-deck ">
                    <div className="card cardone marg">

                        <div className="card-body">

                            <h5 className="card-title">Monday, 27th april</h5>
                            <p className="card-text time-css">{new Date(weatherData?.timezone * 1000).toLocaleTimeString('en-IN')}</p>
                            <p className="card-css">{weatherData.name}</p>
                            <i className="bi bi-cloud-sun icon-sty"></i>
                            <h2 className="temp">{weatherData?.main?.temp} &deg;F</h2>

                        </div>
                        <div className="color details">
                            <div>

                                <p >Humidity: {weatherData?.main?.humidity} %</p>
                                <p>Sunrise: {new Date(weatherData?.sys?.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                                <p>Sunset: {new Date(weatherData?.sys?.sunset * 1000).toLocaleTimeString('en-IN')}</p>
                                <p >Temp Max: {weatherData?.main?.temp_max} &deg;F</p>
                                <p >Temp Min: {weatherData?.main?.temp_min} &deg;F</p>
                                <p >Feels Like: {weatherData?.main?.feels_like} &deg;F</p>
                                <p >Pressure: {weatherData?.main?.pressure} Pa</p>


                            </div>

                            <div>

                                <p>Visibility: {weatherData?.visibility}</p>
                                <p>Wind Speed: {weatherData?.wind?.speed}</p>
                                <p>main: {arr[0]?.main}</p>
                                <p>Description: {arr[0]?.description}</p>
                                <p>icon: {arr[0]?.icon}</p>
                                <p>Longitude: {weatherData?.coord?.lon}</p>
                                <p>Lattitude: {weatherData?.coord?.lon}</p>

                            </div>

                        </div>
                        <p className="text-center color">Monday</p>
                        <hr className='hr-css color'></hr>
                        <div className='text-center d-flex footer'>
                            <div className='color'>
                                <small>6am</small><br />
                                <i className="bi bi-cloud-sun icon-size"></i><br />
                                <small>10&#176;</small>
                            </div>

                            <div className='color'>
                                <small>5am</small><br />
                                <i className="bi bi-cloud-drizzle icon-size"></i><br />
                                <small>17&#176;</small>
                            </div>

                            <div className='color'>
                                <small>12am</small><br />
                                <i className="bi bi-brightness-high icon-size"></i><br />
                                <small>21&#176;</small>
                            </div>

                            <div className='color'>
                                <small>3pm</small><br />
                                <i className="bi bi-cloud-lightning icon-size"></i><br />
                                <small>15&#176;</small>
                            </div>
                        </div>
                    </div>












                    <div className="card marg left cardtwo">

                        <div className="card-body">

                            <h5 className="card-title">Monday, 27th april</h5>
                            <p className="card-text time-css">{new Date(weatherData?.timezone * 1000).toLocaleTimeString('en-IN')}</p>
                            <p className="card-css">{weatherData.name}</p>
                            <i className="bi bi-brightness-high icon-sty"></i>
                            <h2 className="temp">{weatherData?.main?.temp} &deg;F</h2>

                            

                        </div>
                        <div className="color details">
                            <div>

                                <p >Humidity: {weatherData?.main?.humidity} %</p>
                                <p>Sunrise: {new Date(weatherData?.sys?.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                                <p>Sunset: {new Date(weatherData?.sys?.sunset * 1000).toLocaleTimeString('en-IN')}</p>
                                <p >Temp Max: {weatherData?.main?.temp_max} &deg;F</p>
                                <p >Temp Min: {weatherData?.main?.temp_min} &deg;F</p>
                                <p >Feels Like: {weatherData?.main?.feels_like} &deg;F</p>
                                <p >Pressure: {weatherData?.main?.pressure} Pa</p>
                            </div>

                            <div>

                                <p>Visibility: {weatherData?.visibility}</p>
                                <p>Wind Speed: {weatherData?.wind?.speed}</p>
                                <p>main: {arr[0]?.main}</p>
                                <p>Description: {arr[0]?.description}</p>
                                <p>icon: {arr[0]?.icon}</p>
                                <p>Longitude: {weatherData?.coord?.lon}</p>
                                <p>Lattitude: {weatherData?.coord?.lon}</p>
                            </div>

                        </div>
                        <p className="text-center color">Monday</p>
                        <hr className='hr-css color'></hr>
                        <div className='text-center d-flex footer'>
                            <div className='color'>
                                <small>6am</small><br />
                                <i className="bi bi-cloud-sun icon-size"></i><br />
                                <small>10&#176;</small>
                            </div>

                            <div className='color'>
                                <small>5am</small><br />
                                <i className="bi bi-cloud-drizzle icon-size"></i><br />
                                <small>17&#176;</small>
                            </div>

                            <div className='color'>
                                <small>12am</small><br />
                                <i className="bi bi-brightness-high icon-size"></i><br />
                                <small>21&#176;</small>
                            </div>

                            <div className='color'>
                                <small>3pm</small><br />
                                <i className="bi bi-cloud-lightning icon-size"></i><br />
                                <small>15&#176;</small>
                            </div>
                        </div>
                    </div>











                    <div className="card marg left cardthree">

                        <div className="card-body">

                            <h5 className="card-title">Monday, 27th april</h5>
                            <p className="card-text time-css">{new Date(weatherData?.timezone * 1000).toLocaleTimeString('en-IN')}</p>
                            <p className="card-css">{weatherData.name}</p>
                            <i class="bi bi-cloud-rain icon-sty"></i>
                            <h2 className="temp">{weatherData?.main?.temp} &deg;F</h2>

                        </div>
                        <div className="color details">
                            <div>

                                <p >Humidity: {weatherData?.main?.humidity} %</p>
                                <p>Sunrise: {new Date(weatherData?.sys?.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                                <p>Sunset: {new Date(weatherData?.sys?.sunset * 1000).toLocaleTimeString('en-IN')}</p>
                                <p >Temp Max: {weatherData?.main?.temp_max} &deg;F</p>
                                <p >Temp Min: {weatherData?.main?.temp_min} &deg;F</p>
                                <p >Feels Like: {weatherData?.main?.feels_like} &deg;F</p>
                                <p >Pressure: {weatherData?.main?.pressure} Pa</p>


                            </div>

                            <div>

                                <p>Visibility: {weatherData?.visibility}</p>
                                <p>Wind Speed: {weatherData?.wind?.speed}</p>
                                <p>main: {arr[0]?.main}</p>
                                <p className='text-break'>Description: {arr[0]?.description}</p>
                                <p>icon: {arr[0]?.icon}</p>
                                <p>Longitude: {weatherData?.coord?.lon}</p>
                                <p>Lattitude: {weatherData?.coord?.lon}</p>

                            </div>

                        </div>
                        <p className="text-center color">Monday</p>
                        <hr className='hr-css color'></hr>
                        <div className='text-center d-flex footer'>
                            <div className='color'>
                                <small>6am</small><br />
                                <i className="bi bi-cloud-sun icon-size"></i><br />
                                <small>10&#176;</small>
                            </div>

                            <div className='color'>
                                <small>5am</small><br />
                                <i className="bi bi-cloud-drizzle icon-size"></i><br />
                                <small>17&#176;</small>
                            </div>

                            <div className='color'>
                                <small>12am</small><br />
                                <i className="bi bi-brightness-high icon-size"></i><br />
                                <small>21&#176;</small>
                            </div>

                            <div className='color'>
                                <small>3pm</small><br />
                                <i className="bi bi-cloud-lightning icon-size"></i><br />
                                <small>15&#176;</small>
                            </div>
                        </div>
                    </div>
                </div>









            }
        </div>
    )
}

export default Weather
