import React from 'react'
import axios from "axios"
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Getituser = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:2001/users")
        .then((res)=>{
            console.log(data);
            setData(res.data);
        })
            
           

    },[])

    const navigate = useNavigate();
    function add(){
        navigate("/Addusers")
    }
    function deleteUser(id) {
      axios.delete(`http://localhost:2001/users/${id}`)
          .then((res) => {
              // Filter out the deleted user from the data
              setData(data.filter(user => user.id !== id));
          })
          .catch((error) => {
              console.error('Error deleting user:', error);
          });
  }

  return (
    <>
       <h1>React Crud</h1>
       <button  onClick={add}>Add</button>

       <table border={1}>
        <tbody>
            {data.map((val)=>{
              return(
                    
                  <tr key={val.id}>
                     <td>{val.id}</td>
                      <td>{val.name}</td>
                      <td>{val.email}</td>
                      <td>
                         <Link to={`/Update/${val.id}`}> <button >update</button></Link>
                        <button onClick={() => deleteUser(val.id)}>Delete</button>
                      </td>
                  </tr>
                    
                  )
            }
               
            )}
        </tbody>
       </table>
        
        </>
  )
}

export default Getituser