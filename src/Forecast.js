import React, {useState} from "react";
import axios from "axios";
import ForecastPreview from "./ForecastPreview";
import ForecastPreviewDay from "./ForecastPreviewDay";
import "./Forecast.css";
import Loader from "react-loader-spinner";
import { Accordion, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";


export default function Forecast(props) {


const [buttonText, setButtonText] = useState("➭ Show Next Hours");

const changeText = () => {
  if(buttonText.includes("Hide")) {
    setButtonText("➭ Show Next Hours");
  } else {
    setButtonText("➭ Hide Next Hours");
  }
}
const [loaded, setLoaded] = useState(false);
const [forecast, setForecast] = useState(null);


function getForecast (response) {
setForecast(response.data);
setLoaded(true);
}

if (loaded && props.city === forecast.city.name) {



return (
<div>

        <div>
        <Accordion defaultActiveKey="1">
            <Card className="card">
                    <Card.Header className="card-header">
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">

        <button className="btn today-nextweek" onClick={() => changeText("➭ Hide Next Hours")}>{buttonText}</button>
                        </Accordion.Toggle>
                    </Card.Header>
            
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className="card-body">

        <div className="forecast row"> 
        <ForecastPreview forecast={forecast.list[1]} descr={forecast.list[1].weather.main} icon={forecast.list[1].weather[0].icon}/>
        <ForecastPreview forecast={forecast.list[2]} descr={forecast.list[2].weather.main} icon={forecast.list[2].weather[0].icon}/>
        <ForecastPreview forecast={forecast.list[3]} descr={forecast.list[3].weather.main} icon={forecast.list[3].weather[0].icon}/>
        <ForecastPreview forecast={forecast.list[4]} descr={forecast.list[4].weather.main} icon={forecast.list[4].weather[0].icon}/>
        </div>

                            </Card.Body>
                        </Accordion.Collapse>
        
            </Card>
        </Accordion>

        </div>

<br></br>

        <div>
            <Accordion defaultActiveKey="1">
                <Card className="card">
                        <Card.Header className="card-header">
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            
        <button className="btn today-nextweek" onClick={() => changeText("➭ Hide Next Days")}>{buttonText}</button>
                            </Accordion.Toggle>
                        </Card.Header>
            
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className="card-body">

        <div className="forecast row"> 
        <ForecastPreviewDay forecastDay={forecast.list[8]} descrDay={forecast.list[8].weather[0].main} iconDay={forecast.list[8].weather[0].icon}/>
        <ForecastPreviewDay forecastDay={forecast.list[16]} descrDay={forecast.list[16].weather[0].main} iconDay={forecast.list[16].weather[0].icon}/>
        <ForecastPreviewDay forecastDay={forecast.list[24]} descrDay={forecast.list[24].weather[0].main} iconDay={forecast.list[24].weather[0].icon}/>
        <ForecastPreviewDay forecastDay={forecast.list[32]} descrDay={forecast.list[32].weather[0].main} iconDay={forecast.list[32].weather[0].icon}/>
        </div>
                            </Card.Body>
                        </Accordion.Collapse>
        
                </Card>
            </Accordion>

        </div>



</div>
)




} else {
let apiKey = "b1d85d3727e610039e9f3b93d686021e";
let apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
axios.get(apiURL).then(getForecast);
return ( <Loader type="Hearts"
        color="#d9adad"
        height={100}
        width={100}
        timeout={6000} />);
}
}


