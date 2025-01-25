
import DateToday from "./DateToday"
export default function Output ({ city, country, temperature, icon, weatherType, windSpeed, description, humidity, pressure, feelsLike }) {

    return (
        <div id="output">
            <h2>{city}<span id="country">, {country}</span></h2>
           <DateToday />
            <div className="temperature-div">
            <img src={icon} alt={description} />
            <span id="temperature">{temperature}<sup className="deg">°c</sup></span>
        
            <p className="text-capitalize">{description}</p>
            </div>    
            

            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <div>
                        <span>Wind Speed</span>
                        <br />
                        <span>{windSpeed} m/s</span>
                        </div>
                    </div>
                    <div className="col">
                    <div>
                        <span>Humidity</span>
                        <br />
                        <span>{humidity}%</span>
                        </div>
                    </div>
                    <div className="col">
                    <div>
                        <span>Pressure</span>
                        <br />
                        <span>{pressure} mbar</span>
                        </div>
                    </div>
                </div>
            </div>



            <p id="feels-like">Feels like: {feelsLike}<sup className="deg">°c</sup></p>
        </div>
    )
}