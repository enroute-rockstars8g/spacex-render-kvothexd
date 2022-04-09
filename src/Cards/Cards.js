import React from "react";
import "./Card.css"


export function Card({rocket}){
   
    return( 
        <div className="card">
            <img alt={rocket.rocket_name} src={rocket.flickr_images[0]} className="image" />
            <div className="container">
                <p className={`status ${rocket.active? "active" : "inactive"}`}>{rocket.active ? "Active" : "Inactive"}</p>
                <h1 className="header">{rocket.rocket_name}</h1>   
                <p className="description">{rocket.description}</p>
                <div className="info">
                    <h2 className="subtitle">Engine info:</h2>
                    <p className="engine">Number of engines: {rocket.engines.number} | Version: {rocket.engines.version}</p>

                </div>
            </div>
     

        </div>
        
    )
}