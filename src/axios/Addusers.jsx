import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import App from "../App.css"

const Addusers = () => {
    let [value,setValue] = useState({name:"",email:""})

    let change = (e) =>{
        setValue({...value,[e.target.name]:[e.target.value]})
    }
    const navigate = useNavigate();
    function send(e){
      e.preventDefault();
      axios.post("http://localhost:2001/users",value).then((res)=>{
        navigate("/")
      })
    }
    
  return (
    <>
     <div className="conti-add">
     <div className="cont-add">
   <form className='form1'>
        <input  className="inp-name" type="text" name='name' placeholder='enter your name' value={value.name} onChange={change}/>
        <br />
        <input  className="inp-name1" type="email" name='email' placeholder='enter your email' value={value.email} onChange={change} />
        <br />
        <button className='add-user' onClick={send}>Add user</button>

      </form>
   </div>
     </div>
    </>
  )
}

export default Addusers