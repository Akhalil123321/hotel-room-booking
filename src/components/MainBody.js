/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import Services from '../components/Services'
import ServicesData from "../data/ServicesData"
export default function Home(props) {
    const oneservice = ServicesData.map(item => {
        return<Services
        {...item}
        id={item.id}
        />
    })
return (
    <main>
        <div className="main-content">
        <img 
        src={`../img/jpeg/${props.image}`}
        className='body-img'
        />
        <div className="room-detailes">
            <h1 className="room-title">Luxurious Rooms</h1>
            <hr className="line"/>
            <p className="room-ofers">Deluxe Rooms Starting At $200</p>
            <button className="our-rooms-btn">OUR ROOMS</button>
        </div>
        </div>
        <div className="services">
            <h2 className="head-name">Services</h2>
            <hr className="line mini"/>
            <div className="service-container">
            {oneservice}
        </div>
        </div>
        <div>
            <h2 className="head-name">Featured Rooms</h2>
            <hr className="line mini"/>
            
        </div>
    </main>
)
}