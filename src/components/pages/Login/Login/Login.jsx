import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import Header from '../../../shared/Header/Header';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from '../../../../firebase/firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useLocation } from "react-router-dom";

const Login = () => {
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: ""
    })
    const [
        signInWithEmailAndPassword,
        signinUser,
        signinLoading,
        signinError,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );

    if (signinError) {
        toast.error(signinError?.message);
    }

    if (signinUser) {
        toast.success("User Logged In!!!");
        return <Navigate to={from} replace />
    }

    const handleInputBlur = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        loginInfo[name] = value;  // not preferred
        console.log(loginInfo);
    }
    const handleLogin = (event) => {
        const email = loginInfo.email;
        const password = loginInfo.password;
        event.preventDefault();
        if (!email || !password) {
            toast.warning("Email and Password both are required!");
            return;
        }

        signInWithEmailAndPassword(email, password)
    }

    const handleResetPassword = async () => {
        const email = loginInfo.email;
        if (!email) {
            toast.warning("Enter email to reset password!");
            return;
        }

        const success = await sendPasswordResetEmail(
            email,
        );
        if (success) {
            toast.info("Password reset email sent!");
        }
    }

    return (
        <div className="container">
            <header>
                <Header variant="dark"></Header>
            </header>
            <div className='container'>
            {signinLoading ? <h1>Loading...</h1> : sending ? <div><p>Sending email...</p></div> : <></>}
            </div>
            <div className='login-container'>
                <h3>Login</h3>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <input type="text" name="email" id="email" placeholder='Email' onBlur={handleInputBlur} />
                        <input type="password" name="password" id="password" placeholder='Password' onBlur={handleInputBlur} />
                    </div>
                    <div className='login-forget-remember'>
                        <div>
                            <div className=''>
                                <input type="checkbox" name="checkbox" id="checkbox" />
                                <label htmlFor="checkbox">Remember me</label>
                            </div>
                        </div>

                        <div>
                            <Link onClick={handleResetPassword} to='/login' className='login-link'>Forgot Password</Link>
                        </div>
                    </div>

                    <input className='login-btn' type="submit" value="Login" />

                    <div>
                        <p>Don't have an account? <Link to="/register" className='login-link'>Create an account</Link></p>
                    </div>
                </form>
            </div>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;