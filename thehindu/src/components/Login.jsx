import React from 'react';
import login from "../components/Login.module.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className={login.main}>
        <h3 style={{textAlign : "center"}}>Log-In</h3>
            <form className={login.input}>
                <div class="row mb-3">
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="inputEmail3" placeholder='Enter youremail address and hit enter' />
                    </div>
                </div>

                <div className={login.btn1} >
                    <button type="submit" class="btn btn-primary">NEXT</button>
                </div>

                <div style={{ textAlign: "center" }}>
                    <p>Don't have an account?</p>
                </div>
                <div className={login.btn1}>
                    <button type="submit" class="btn btn-primary" onClick={() => navigate("/signup")}>Sign Up</button>
                </div>
            </form>

        </div>
    )
}

export default Login;