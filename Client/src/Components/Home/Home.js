import React from "react"

import "./Home.css"

const Home = () =>{
    return(
        <div>
            <nav className="nav1">
                <ul>
                    <li>Chat-E</li>
                </ul>
            </nav>
            <h1 className="heading1">Let's Chat!</h1>
            <hr className="hrl1" />
            <p className="par1">Connect with friends today!</p>
            <p className="par2">Just type user name and the room u wanna have a chat...</p>
            <div className="container1">
                <a href="/join"><button className="mbtn1">Start Chatting!</button>  </a> 
            </div>
        </div>
    )
} 

export default Home