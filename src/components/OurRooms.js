/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import { Link } from "react-router-dom";
import FeaturedRooms from './FeaturedRooms'
import AllRoomData from '../data/AllRoomData'
export default function Home(props) {
    // form State
    const [roomsArray,setRoomsArray]=React.useState(AllRoomData)
    const[forms,setForms]=React.useState({
        RoomsType :'',
        Guests:'',
        pets:false,
        Breakfast:false
    })
    console.log(forms);
React.useEffect(()=>{
    // room type
    forms.RoomsType ==='single' && setRoomsArray(roomsArray.filter(item=>item.RoomsType.includes('single')))
    forms.RoomsType ==='double' && setRoomsArray(roomsArray.filter(item=>item.RoomsType.includes('double')))
    forms.RoomsType ==='family' && setRoomsArray(roomsArray.filter(item=>item.RoomsType.includes('family')))
    forms.RoomsType ==='Presidential' && setRoomsArray(roomsArray.filter(item=>item.RoomsType.includes('Presidential')))
    // Room Guests
    forms.Guests ==='2' && setRoomsArray(roomsArray.filter(item=>item.Guests >= 2))
    forms.Guests ==='3' && setRoomsArray(roomsArray.filter(item=>item.Guests >= 3))
    forms.Guests ==='4' && setRoomsArray(roomsArray.filter(item=>item.Guests >= 4))
    forms.Guests ==='5' && setRoomsArray(roomsArray.filter(item=>item.Guests >= 5))
    forms.Guests ==='6' && setRoomsArray(roomsArray.filter(item=>item.Guests >= 6))
    forms.Guests ==='10' && setRoomsArray(roomsArray.filter(item=>item.Guests === 10))
    // room pets
    forms.pets && setRoomsArray(roomsArray.filter(item=>item.Pets === true))
    // room Breakfast
    forms.Breakfast && setRoomsArray(roomsArray.filter(item=>item.Breakfast === true))
},[forms])

    const allRoomData = roomsArray.map(allRommItem => {
        return<FeaturedRooms
        id={allRommItem.id}
        {...allRommItem}
        />
    })

function handleCange(event){
    const{name, value, type, checked} = event.target
    setForms(prevForms=>{
        return{
            ...prevForms,
            [name]:type === 'checkbox' ? checked : value
        }
    })
    setRoomsArray(AllRoomData)
}
return (
    <main>
        <div className="main-content">
        <img 
        src={`../img/jpeg/${props.image}`}
        className='ourroom-img'
        />
        <div className="room-detailes our-room">
            <h1 className="our-room-title room-width">Our Rooms</h1>
            <hr className="line"/>
            <p className="our-room-ofers">Deluxe Rooms Starting At $200</p>
            <Link to="/"><button className="our-rooms-btn">RETURN HOME</button></Link>
        </div>
        </div>
        <div className="search-forms">
            <h2 className="head-name">Search Rooms</h2>
            <hr className="line mini"/>
       {/* forms */}
        <form className="form-container">
        <div className="select-1-container">
            <p>Rooms Type</p>
            <select 
            id="roomsType"
            className="select-box"
            onChange={handleCange}
            name="RoomsType"
            value={forms.RoomsType}
            >
                
                <option value="" >All</option>
                <option value="single">single</option>
                <option value="double">double</option>
                <option value="family">family</option>
                <option value="Presidential">Presidential</option>
            </select>
            </div>
            <div className="select-2-container">
            <p>Guests</p>
            <select 
            id="Guests"
            className="select-box"
            onChange={handleCange}
            name="Guests"
            value={forms.Guests}
            >
                <option value="">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value='10'>10</option>
            </select>
            </div>
            <div className="check-boxes-container">
                <div className="checkbox-one-container">
                <input 
                type='checkbox'
                id="pets"
                className="checkbox"
                onChange={handleCange}
                name="pets"
                checked={forms.pets}
                />
                
                <label htmlFor=''>  pets</label>
                </div>
                <div className="checkbox-one-container">
                <input 
                type='checkbox'
                id="Breakfast"
                className="checkbox"
                onChange={handleCange}
                name="Breakfast"
                checked={forms.Breakfast}
                />
                <label htmlFor='Breakfast'>  Breakfast</label>
                </div>
            </div>
        </form>
        {/* end of forms */}
        </div>
        <div>
            <div className="featured-room-container">
            {allRoomData}
            </div>
        </div>
    </main>
)
}
