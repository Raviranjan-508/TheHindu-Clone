import React from 'react';
import signup from "../components/SignUp.module.css";
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const navigate = useNavigate();
    return (
        <div className={signup.main}>
        <h3 style={{textAlign : "center"}}>Sign-Up</h3>
            <form className={signup.input}>
                <div class="row mb-3">
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="inputEmail3" placeholder='Enter your emalil Address' />
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword3" placeholder='Enter your password' />
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword3" placeholder='Enter your 10 digit mobile number' />
                    </div>
                </div>
                <fieldset class="row mb-3">
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                            <label class="form-check-label" for="gridRadios1">
                                I'd like to receive updates and offers from THG via email and messages
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                            <label class="form-check-label" for="gridRadios2">
                                Contact me via Whatsapp
                            </label>
                        </div>
                    </div>
                </fieldset>
                <div className={signup.btn1}>
                    <button type="submit" class="btn btn-primary">Sign up</button>
                </div>
                <div>
                    <p>By signing up, you agree to The Hindu’s Terms of Use and Privacy Policy</p>
                </div>
                <div><p>Already have an account?</p></div>
                <div className={signup.btn1}>
                    <button type="submit" class="btn btn" onClick={() => navigate("/login")}>Log In </button>
                </div>
            </form>

        </div>
    )
}

export default SignUp