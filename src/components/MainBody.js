/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import { Link } from "react-router-dom";
import Services from '../components/Services'
import ServicesData from "../data/ServicesData"
import FeaturedRooms from './FeaturedRooms'
import RoomData from '../data/RoomData'
export default function Home(props) {
    const oneservice = ServicesData.map(serviceItem => {
        return<Services
        id={serviceItem.id}
        {...serviceItem}
        />
    })
    const roomData = RoomData.map(rommItem => {
        return<FeaturedRooms
        id={rommItem.id}
        {...rommItem}
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
            <Link to="/rooms"><button className="our-rooms-btn">OUR ROOMS</button></Link>
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
            <div className="featured-room-container">
            {roomData}
            </div>
        </div>
    </main>
)
}