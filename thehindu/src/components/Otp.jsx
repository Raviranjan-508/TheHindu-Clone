import React from 'react';
import otp from "../components/Otp.module.css"

const Otp = () => {
    return (
        <div className={otp.otpMain}>
            <div>
                <p>A sign-in link and confirmation code have been sent to ravikrcse2018@gmail.com. Please click that link to access your account or enter the code here to login.</p>
            </div>
            <div className={otp.border}>
                <div> <input type="text" /></div>
                <div><input type="text" /></div>
                <div><input type="text" /></div>
                <div><input type="text" /></div>
                <div><input type="text" /></div>
                <div><input type="text" /></div>
            </div>
            <div style={{textAlign : "center" }}>
            <p style={{textAlign : "center" , fontSize : "18px"}}>Resend</p>
            </div>
        </div>

    )
}

export default Otp