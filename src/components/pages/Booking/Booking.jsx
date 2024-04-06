import React from 'react';
import Header from '../../shared/Header/Header';
import "./Booking.css";
import { useNavigate } from 'react-router-dom';

const Booking = () => {
    const navigate = useNavigate();
    return (
        <div className="bg">
            <div className="container">
                <header>
                    <Header variant="light"></Header>
                </header>
                <div className='booking-container'>
                    <div className="w-50 booking-detail">
                        <h1>Lorem, ipsum dolor.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel corrupti perspiciatis obcaecati fugit corporis, asperiores commodi fuga doloremque modi vitae saepe? Dignissimos quisquam dolorem incidunt, natus et expedita libero suscipit labore repellat harum minima dicta eos, nam reprehenderit reiciendis asperiores. Hic inventore illo autem libero eligendi enim assumenda commodi laborum nemo! Perspiciatis, eaque quisquam. </p>
                    </div>

                    <div className="w-50 booking-info">
                        <div className="booking-input">
                            <p>Origin</p>
                            <input type="text" value="Dhaka" />
                        </div>
                        <div className="booking-input">
                            <p>Destination</p>
                            <input type="text" value="Cox's Bazar" />
                        </div>
                        <div className="booking-date">
                            <div className="booking-input">
                                <p>From</p>
                                <input type="text" value="01/09" />
                            </div>
                            <div className="booking-input">
                                <p>To</p>
                                <input type="text" value="12/09" />
                            </div>
                        </div>
                        <button onClick={() => navigate("/search")} className="login-btn">Start Booking</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;