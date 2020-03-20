import React, {useState, useEffect} from "react"
import queryString from "query-string"
import io from "socket.io-client"
import {BrowserRouter as Router, Route} from "react-router-dom"

import Join from "../Join/Join"
import InfoBar from '../InfoBar/InfoBar'
import Input from "../Input/Input"
import Messages from "../Messages/Messages"

import './Chat.css'


let socket;
//let err =false
 const Chat =({ location })=> {
    const [name,setName] = useState('')
    const [room,setRoom] = useState('')
    const [error,setError] = useState(false)
    const [message,setMessage] = useState('')
    const [messages,setMessages] = useState([])
    const ENDPOINT = 'localhost:5000'
    useEffect(()=>{
        const {name,room} = queryString.parse(location.search)
         console.log('Location??  ',queryString.parse(location.search))
        setName(name)
        setRoom(room)
       
        socket = io(ENDPOINT)
        
        socket.emit('join',{name,room},(errormessage)=>{
            // console.log(errormessage)
           errormessage ? setError(true) : setError(false)
            //err= true
        })

        return ()=>{
            socket.emit('diconnect')
            socket.off()
        }

    },[ENDPOINT,location.search])

    useEffect(()=>{
        socket.on('message',(message)=>{
            setMessages([...messages,message])
        })
    },[messages])

// function for sending message
const sendMessage = (event) =>{
    event.preventDefault()
    if(message){
        socket.emit('sendMessage',message,()=>{setMessage('')})
    }
}

console.log(messages,message)
console.log(error)
        if(!error){
            return(
                <div className="outerContainer">
                    <div className="container">
                        <InfoBar room={room}/>
                        <Messages messages={messages} name={name}/>
                        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
                    </div>
                </div>
            )
        }else{
            return(
                <Router>
                  <Route  path="/" exact component={Join} /> 
                </Router>
            )
        }
        
    
}

export default Chat