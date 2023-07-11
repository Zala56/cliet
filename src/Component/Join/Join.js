import React, { useState } from 'react'
import "./join.css"
import { Link } from 'react-router-dom'

let user;
const send=()=>{
  user	= document.getElementById("first").value;
  document.getElementById("first").value="";
}


function Join() {

  const [name, setname] = useState("")
  console.log(name);
 
  return (
    <div className='Joinpage'>
        <div className='JoinContainer'>
          <h1>C Chat</h1>
          <h2>Enter The  Detail</h2>
          <input onChange={(e)=>setname(e.target.value)} maxLength='15' placeholder='Enter your name' type="text" id="first" required/>
         <Link onClick={(event)=> !name ? event.preventDefault():null} to ="/chat"><button onClick={send} className='joinbtn'>Login In</button></Link>
        </div>
       </div>
  )
}

export default Join
export {user}