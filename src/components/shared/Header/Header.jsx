import React from 'react';
import "./Header.css";
import dark from './HeaderDark.module.css';
import light from './HeaderLight.module.css';
import logo from './../../../images/logo.png';
import { Link, useNavigate, } from 'react-router-dom';
import auth from '../../../firebase/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = ({ variant }) => {
    const [user, loading, error] = useAuthState(auth,);
    if (error) {
        toast(error?.message);
    }
    const navLinks = [
        { id: 1, to: "/news", name: "News", },
        { id: 2, to: "/destination", name: "Destination", },
        { id: 3, to: "/blog", name: "Blog", },
        { id: 4, to: "/contact", name: "Contact", },
    ]


    const navigate = useNavigate();
    return (
        <div className="container">
            <div className='navbar'>
                <div className="w-50">
                    <div className="nav-left">
                        <div onClick={() => navigate("/")} className="nav-logo">
                            <img src={logo} alt="Loading..." className={variant === "light" ? light["logo-white"] : ""} />
                        </div>

                        <div className="nav-search">
                            <input className={variant === "light" ? `${light["border-white"]} ${light["color-white"]}` : `${dark["border-dark"]} ${dark["color-dark"]}`} type="text" placeholder='Type your destination...' />

                        </div>
                    </div>
                </div>
                <div className="w-50">
                    <div className={`nav-links`}>
                        {navLinks.map(link => <Link className={`${variant === "light" ? light["color-white"] : dark['color-black']}`} key={link.id} to={link.to}>{link.name}</Link>)}
                        {user ? <Link onClick={() => signOut(auth)} to="/" className='login-btn' style={{ backgroundColor: "red" }}>Sign Out</Link> : loading ? <p>Loading...</p> : <Link to="/login" className='login-btn'>Login</Link>}
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Header;