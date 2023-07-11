import React, { useEffect } from 'react'
import {user} from "../Join/Join";
import socketIo from "socket.io-client";
import "./chat.css"

const Endpoint = "http://localhost:2000/";


function Chat() {


  const socket = socketIo(Endpoint,{transports:['websocket']});

  useEffect(()=>{
    socket.on('connect',()=>{
      alert("connected");
  
    })

    socket.emit('joined',{user})
    return ()=>{
      
    }

  },[])

 

  return (
    <div className= "chatPage">
      <div className='chatContainer'>
        <div className='header'></div>
        <div className='chatbox'></div>
        <div className='inputbox'>
        <input type="text" className="chatInput"></input>
        <button className='send'>Send</button>
        </div>

      </div>
      </div>
  )
}

export default Chat