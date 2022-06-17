import React from 'react'
import ads from "../components/Ads.module.css";
const AdsLeft = () => {
  return (
    <div className={ads.Ads}>
   <div className={ads.AdsLeft}>
   <div className={ads.Adsheader}>
    <img src="Images/Ads.png"/>
   </div>
   <div className={ads.AdsMiddle}>
   <h5><b>PUBG M11 <br/>HIDDEN <br/>HUNTERS <br/>ROYALE PASS</b></h5>
   <p><b>RECHARGE AND SCORE BONUS RAZER GOLD</b></p>
   </div>
   <div className={ads.Adsbottom}>
    <img src="Images/Ads.Logo.png"/><br/><br/>
    <button><b>RECHARGE NOW</b></button>
   </div>
   </div>
   
   </div>
  )
}

export default AdsLeft