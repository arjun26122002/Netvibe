import React, { useState } from 'react'
import './index.css'
// import Logo from "../../img/logo1.png"
import Logo1 from '../../img/logo2.png'
import { useDispatch, useSelector } from 'react-redux';
import { login, signUp } from '../../actions/AuthAction';


const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.authReducer.loading)
    console.log(loading)
    const initialState = {
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        confirmpass: "",
    };

    const [data, setData] = useState(initialState)

    const [confirmpass, setConfirmpass] = useState(true);

    const resetForm = () => {
        setConfirmpass(confirmpass);
        setData(initialState);
    }

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        setConfirmpass(true);
        e.preventDefault();

        if (isSignUp) {
            data.password === data.confirmpass
                ? dispatch(signUp(data))
                : setConfirmpass(false)
        } else {
            dispatch(login(data))
        }
    };



    return (
        <div className="Auth">

            {/* left side */}
            <div className="a-left">
                {/* <img src={Logo}alt=''/> */}
                <img src={Logo1} alt='' style={{
                    height: "45px"
                }} />
                <div className="Webname">
                    <h1>NetVibe</h1>
                    <h6>"Your Network,Your Vibe:NetVibe"</h6>
                </div>
            </div>

            {/* right side */}

            <div className="a-right">
                <form className="infoForm authForm" onSubmit={handleSubmit} >
                    <h3>{isSignUp ? "Register" : "Login"}</h3>


                    {isSignUp && (
                        <div>
                            <input
                                required
                                type="text"
                                placeholder="First Name"
                                className="infoInput"
                                name="firstname"
                                value={data.firstname}
                                onChange={handleChange}
                            />
                            <input
                                required
                                type="text"
                                placeholder="Last Name"
                                className="infoInput"
                                name="lastname"
                                value={data.lastname}
                                onChange={handleChange}
                            />
                        </div>
                    )}


                    <div>
                        <input
                            required
                            type="text"
                            className="infoInput"
                            name="username"
                            placeholder="Username"
                            value={data.username}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            className="infoInput"
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                            value={data.password}
                        />
                        {isSignUp &&
                            <input
                                type="password"
                                className="infoInput"
                                name="confirmpass"
                                placeholder="Confirm Password"
                                onChange={handleChange}
                            />
                        }
                    </div>
                    <span style={{
                        display: confirmpass ? "none" : "block",
                        color: "red",
                        fontSize: "12px",
                        alignSelf: "flex-end",
                        marginRight: '5px'
                    }}>
                        *Confirm Password is not same
                    </span>
                    <div>
                        <span style={{ fontSize: '12px', cursor: "pointer" }} onClick={() => { setIsSignUp((prev) => !prev); resetForm() }
                        }>
                            {isSignUp ? "Already have an account. Login!"
                                : "Don't have an account? Sign Up"}
                        </span>

                        <button
                            className="button infoButton"
                            type="Submit"
                            disabled={loading}
                        >
                            {loading ? "Loading..." : isSignUp ? "SignUp" : "Log In"}
                        </button>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default Auth;