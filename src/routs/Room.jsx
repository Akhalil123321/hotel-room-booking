import React from "react"
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import OurRooms from '../components/OurRooms'
export default function Room() {
return (
    <div>
        <NavBar/>
        <OurRooms
        image='room-2.jpeg'
        />
        <Footer/>
    </div>
)
}