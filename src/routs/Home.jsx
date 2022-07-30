import React from "react"
import Main from '../components/MainBody'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
export default function Home() {
return (
    <div>
        <NavBar/>
        <Main 
        image='defaultBcg2.jpg'
        />
        <Footer/>
    </div>
)
}