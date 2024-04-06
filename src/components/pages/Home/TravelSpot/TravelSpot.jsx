import React from 'react';
import "./TravelSpot.css";

const TraveSpot = ({place}) => {
    const {img, spot} = place;
    return (
        <div className="travel-spot">
                        <img src={img} alt="..." />
                        <h2>{spot}</h2>
                    </div>
    );
};

export default TraveSpot;