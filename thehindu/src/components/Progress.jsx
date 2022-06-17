import React from 'react';
import progress from "../components/Progress.module.css";

const Progress = () => {
    return (
        <div>
        <div style={{backgroundColor :
           " #d3232a" , border : "2px solid black" , color : "black" , fontSize : "19px" , textAlign : "center"}}>Covid-19 Tracker</div>
        <div style={{textAlign : "center" , borderBottom : "1px solid black" }}>Vaccination Progress </div>
            <div className={progress.report}>
                <div className={progress.indiaImaage}>
                    <img src="Images/india-map.jpg" />
                </div>
                <div>
                <p>Fully vaccinated</p>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{ width: "65.8%", ariaValuenow: "40", ariaValuemin: "0", ariaValuemax: "100" }}>65.8%</div>
                    </div>
                    <p>At least one dose*</p>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{ width: "73.9%", ariaValuenow: "25", ariaValuemin: "0", ariaValuemax: "100" }}>73.9%</div>
                    </div>
                </div>
                <div>
                <p>Age 18+</p>
                    <div class="progress">
                   
                        <div class="progress-bar" role="progressbar" style={{ width: "93%", ariaValuenow: "25", ariaValuemin: "0", ariaValuemax: "100" }}>180</div>
                    </div>
                    <p>Age 45+</p>
                    <div class="progress">
                   
                        <div class="progress-bar" role="progressbar" style={{ width: "97%", ariaValuenow: "25", ariaValuemin: "0", ariaValuemax: "100" }}>192</div>
                    </div>
                    <p>Age 60+</p>
                    <div class="progress">
                    
                        <div class="progress-bar" role="progressbar" style={{ width: "99%", ariaValuenow: "25", ariaValuemin: "0", ariaValuemax: "100" }}>198</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Progress