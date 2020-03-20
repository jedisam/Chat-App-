import React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"

import Join from "./Components/Join/Join"
import Chat from "./Components/Chat/Chat"
import Home from "./Components/Home/Home"

export default class App extends React.Component{
    render(){
        return(
            <Router>
            <Route  path="/" exact component={Home}/>
            <Route  path="/join" component={Join}/> 
            <Route path="/chat" component={Chat}/>
         </Router>
        )
    }
}