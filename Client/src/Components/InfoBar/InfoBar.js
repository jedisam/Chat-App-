import React from 'react'

import './InfoBar.css'

import onlineIcon from '../../Icon/onlineIcon.png'
import closeIcon from '../../Icon/closeIcon.png'

const InfoBar = ({room}) =>{
    return(
       <div className="infoBar">
           <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="Online Img" />
                <h3>{room}</h3>
           </div>
           <div className="rightInnerContainer">
               <a href="/"><img src={closeIcon} className="closeIcon" alt="Close Img" /></a>
            </div>       
       </div>
    )
}

export default InfoBar