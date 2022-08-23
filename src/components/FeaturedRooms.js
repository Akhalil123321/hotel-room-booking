import React from "react"
import { Link } from "react-router-dom";
import SingleRoomData from '../data/SingleRoomData'
export default function Services(props) {
    const[shadowProperty,setShadowProperty]=React.useState(false)
function mouseEnter(){
    setShadowProperty(true)
}
function mouseLeave(){
    setShadowProperty(false)
}
const boxShadow = shadowProperty?'box-shadow':''
const boxBtn = shadowProperty?'onscreen-btn':'onscreen-btn over'
function handleClick(){
    SingleRoomData.push(props)
    SingleRoomData.shift()
}
return (
    <div 
    className="featured-room-one-container" 
    onMouseEnter={mouseEnter}
    onMouseLeave={mouseLeave}
    >
    <div className="featured-room-price">
        <p>$ {props.price}</p>
        <span>per night</span>
        </div>
    <img src={`./img/jpeg/${props.image}`} alt='' className="featured-room-image"/>
    <div className="featured-room-type"><p>{props.type}</p></div>
        <div className={boxShadow}>
            <Link to="/singleRoom" className="card-btn-link">
                <button className={boxBtn} onClick={handleClick}>
                    FEATURE
                </button>
            </Link>
        </div>
    
    </div>
)
}
