/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import { Link } from "react-router-dom";
export default function Single(props) {
return (
    <main>
        <div className="main-content">
        <img 
        src={`../img/jpeg/${props.image}`}
        className='ourroom-img'
        />
        <div className="room-detailes single-room">
            <h1 className="our-room-title single-room-width">{props.type} Room</h1>
            <hr className="line"/>
            <p className="our-room-ofers single-offer">Deluxe Rooms Starting At $200</p>
            <Link to="/rooms"><button className="our-rooms-btn">BACK TO {props.back}</button></Link>
        </div>
        </div>
        <div className="single-room-ditailes-container">
            <img src={`../img/jpeg/${props.image1}`} className="single-room-image"/>
            <img src={`../img/jpeg/${props.image2}`} className="single-room-image"/>
            <img src={`../img/jpeg/${props.image3}`} className="single-room-image"/>
        </div>
        <div className="single-room-d-i-container">
        <div className="single-room-detail">
            <h3 className="single-room-detail-h">Details:</h3>
            <p className="single-room-detail-p">{props.ditailes}</p>
        </div>
        <div className="single-room-info">
            <h3 className="single-room-info-h">Information:</h3>
            <p className="single-room-info-p">Price : {props.price} $</p>
            <p className="single-room-info-p">Size : {props.size} SQFT</p>
            <p className="single-room-info-p">Max Capacity : {props.Guests}</p>
            <p className="single-room-info-p">{props.Pets ?"Pets Allowed":"No Pets Allowed"}</p>
        </div>
        </div>
        <div className="extras">
            <h4 className="extras-h">Extras:</h4>
            <div className="extras-p-container">
                <p className="extras-p">- Plush pillows and breathable bed linens</p>
                <p className="extras-p">- Soft, oversized bath towels</p>
                <p className="extras-p">- Full-sized, pH-balanced toiletries</p>
                <p className="extras-p">- Complimentary refreshments</p>
                <p className="extras-p">- Adequate safety/security</p>
                <p className="extras-p">- Internet</p>
                <p className="extras-p">- Comfortable beds</p>
            </div>
        </div>
    </main>
)
}