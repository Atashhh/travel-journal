import React from "react"

export default function Card(props) {
    return (
        <div className="hero">
            <img className="hero-img" src={props.imgUrl} />
            <div className="hero-info">
                <div className="hero-loc">
                    <h5 className="hero-loc-title"><i className="fa-sharp fa-solid fa-location-dot"></i> {props.locTitle} </h5>
                    <a href={props.googleMap} className="hero-loc-map">View on Google Maps</a>
                </div>
                <h1 className="hero-title">{props.locHeading}</h1>
                <h3 className="hero-date">{props.locDate}</h3>
                <p className="hero-desc">{props.locDescription}</p>
            </div>
        </div>
    )
}