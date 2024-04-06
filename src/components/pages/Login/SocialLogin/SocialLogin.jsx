import React from 'react';
import "./SocialLogin.css";
import facebookImg from './../../../../images/icons/fb.png';
import googleImg from './../../../../images/icons/google.png';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase/firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname;
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);

    if (googleUser || facebookUser) {
        navigate(from);
    }

    return (
        <div className="w-50 container">
            <div className='social-login-container'>
                <div className='or-style'>
                    <div className="or-hr"></div>
                    <div><p>OR</p></div>
                    <div className="or-hr"></div>
                </div>

                <div>
                    <p>{googleLoading || facebookLoading ? "Loading..." : ""}</p>
                    <p style={{color: "red"}}>{googleError || facebookError ? googleError?.message || facebookError?.message : ""}</p>
                </div>

                <div className="social-btn-group">
                    <button onClick={() => signInWithFacebook()} className="social-btn">
                        <div>
                            <img src={facebookImg} alt="..." />
                            <span>Continue with facebook</span>
                        </div>
                    </button>
                    <button onClick={() => {
                        signInWithGoogle()
                    }} className="social-btn">
                        <div>
                            <img src={googleImg} alt=".." />
                            <span>Continue with Google</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;