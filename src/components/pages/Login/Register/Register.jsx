import React, { useState, } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import Header from '../../../shared/Header/Header';
import auth from '../../../../firebase/firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useLocation } from "react-router-dom";

const Register = () => {
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";
    const [userInfo, setUserInfo] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" });
    const [
        createUserWithEmailAndPassword,
        createUser,
        createLoading,
        createError,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    if (createError) {
        toast.error(createError?.message);
    }

    if (createUser && !updating) {
        toast.success("User Created Successfully");
        toast.info("Verification email sent!");
        return <Navigate to={from} replace />
    }

    const handleInputBlur = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUserInfo(old => {
            const previous = old;
            previous[name] = value;
            return (previous);
        })
        console.log(userInfo);
    }

    const handleSignUp = async (event) => {
        event.preventDefault();

        const nameRegex = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
        const nameValue = `${userInfo.firstName} ${userInfo.lastName}`;
        const nameError = "Name is not valid";

        if (!nameRegex.test(nameValue)) {
            toast.error(nameError);
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailValue = userInfo.email;
        const emailError = "Email is not valid";

        const passwordRegex = /^(?=.*?[a-z])(?=.*?[0-9]).{6,}$/
        const passwordValue = userInfo.password;
        const passwordError = "Password conditions:\n Minimum six characters,\n at least one lowercase letter,\n and one number"

        if (!emailRegex.test(emailValue)) {
            toast.error(emailError);
            return;
        }
        if (!passwordRegex.test(passwordValue)) {
            toast.error(passwordError);
            return;
        }

        if (userInfo.password !== userInfo.confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        
        await createUserWithEmailAndPassword(emailValue, passwordValue);
        await updateProfile({ displayName: nameValue });
    }
    return (
        <div className="container">
            <header>
                <Header variant="dark"></Header>
            </header>
            {createLoading ? <h2>Loading...</h2> : <></>}
            <div className='login-container'>
                <h3>Register</h3>
                <form onSubmit={handleSignUp}>
                    <div className="input-group">
                        <input onBlur={handleInputBlur} type="text" name="firstName" id="first-name" placeholder='First Name' />
                        <input onBlur={handleInputBlur} type="text" name="lastName" id="last-name" placeholder='Last Name' />
                        <input onBlur={handleInputBlur} type="text" name="email" id="email" placeholder='Email' />
                        <input onBlur={handleInputBlur} type="password" name="password" id="password" placeholder='Password' />
                        <input onBlur={handleInputBlur} type="password" name="confirmPassword" id="confirm-password" placeholder='Confirm Password' />
                    </div>

                    <input className='login-btn' type="submit" value="Register" />

                    <div>
                        <p>Already have an account? <Link to="/login" className='login-link'>Login</Link></p>
                    </div>
                </form>
            </div>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;