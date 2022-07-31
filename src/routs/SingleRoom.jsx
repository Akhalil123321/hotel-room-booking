import React from "react"
import Single from '../components/single'
import NavBar from '../components/NavBar'
import SingleRoomData from '../data/SingleRoomData'
import Footer from '../components/Footer'
export default function SingleRoom() {

    const singleRoom = SingleRoomData.map(sngleItem => {
        return<Single
        id={sngleItem.id}
        {...sngleItem}
        />
    })

return (
    <div>
        <NavBar/>
        {singleRoom}
        <Footer/>
    </div>
)
}