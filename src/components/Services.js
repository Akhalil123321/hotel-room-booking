import React from "react"
export default function Services(props) {
return (
    <div className="service-one-container">
        <div className="service-icon">{props.icon}</div>
        <p className="service-name">{props.sevice}</p>
        <p className="service-discription">{props.whatService}</p>
    </div>
)
}
