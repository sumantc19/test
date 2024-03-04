import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import App from "../App.css"

const Update = () => {
    let {id} = useParams()
    let [value,setValue] = useState({name:"",email:""})


    useEffect(()=>{
        axios.get('http://localhost:2001/users/'+ id).then((res)=>{
            setValue(res.data)
        })
    },[])

    let change = (e) =>{
        setValue({...value,[e.target.name]:[e.target.value]})
    }
    const navigate = useNavigate();
    function update(e){
      e.preventDefault();
      axios.put("http://localhost:2001/users/" + id,value).then((res)=>{
        console.log(res);
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
        <button className='add-user' onClick={update}>Update</button>

      </form>
   </div>
     </div>
    </>
  )
}

export default Update