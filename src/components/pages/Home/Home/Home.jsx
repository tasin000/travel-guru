import React from 'react';
import "./Home.css";
import Header from '../../../shared/Header/Header';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const travel_spots = [
        {
            "id": 1,
            "img": "./../../../../images/Sajek.png",
            "spot": "Sajek",
            "desc": "Sajek Valley, known as the ‘Queen of Hills’, is a serene tourist spot in Bangladesh, nestled among the Kasalong range of mountains. Perched at 450 meters above sea level, it offers stunning views of natural landscapes and is home to diverse ethnic communities. The valley is accessible via Dighinala in Khagrachari district"
        }, {
            "id": 2,
            "img": "./../../../../images/Sreemongol.png",
            "desc": "Sreemangal, dubbed the 'tea capital' of Bangladesh, is an upazila in the Sylhet Division. It's famed for its sprawling tea gardens and rich biodiversity. The area also produces rubber, pineapple, and wood, contributing to its economy",
            "spot": "Sreemongol"
        }, {
            "id": 3,
            "img": "./../../../../images/sundorbon.png",
            "spot": "Sundorbon",
            "desc": "Sundarbans is the largest mangrove forest in the world, straddling Bangladesh and India. This UNESCO World Heritage Site is a complex network of tidal waterways, home to a myriad of species including the Royal Bengal Tiger. It showcases the dynamic nature of deltaic ecosystems"
        }
    ]

    const navigate = useNavigate();
    return (
        <div className="bg">
            <div className="container">
            <div className='home-container'>
                <header>
                    <Header variant="light"></Header>
                </header>
                <div style={{width: "50%", margin: "20px auto", padding: "20px 0", cursor: "pointer"}}>
                    <div className="login-btn" onClick={() => navigate("/booking")}>Book now!!!</div>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default Home;