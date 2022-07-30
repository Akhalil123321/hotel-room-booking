import React from "react"
import { Link } from "react-router-dom";
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
    <Link to="/singleRoom">
        <div className={boxShadow}>
            <button className={boxBtn}>
                FEATURE
            </button>
        </div>
    </Link>
    
    </div>
)
}
