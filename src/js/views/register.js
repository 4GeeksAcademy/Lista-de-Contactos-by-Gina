import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {

    const [loading, setLoading]= useState(false)
    const navigate = useNavigate()
    const [data,setData] = useState ({})
    const handleChange = (e) =>{
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
       

        const config = {
   
                method: 'POST', 
                body: JSON.stringify(data), 
                headers:{
                  'Content-Type': 'application/json'
                }
              }
              setLoading(true)
              fetch("https://retoolapi.dev/jrJSyd/data", config).then(res => res.json())
              .catch(error => console.error('Error:', error))
              .then(response => {
                setLoading(false)
                 navigate("/")
              });
        }

    

    
return ( 
    <div className="container">
        <div className="row">
            {loading ? "cargando":""}
            <h1>Registro</h1>
            <form onSubmit={handleSubmit}>
                <div className="col-12 ">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Full name" onChange={handleChange}/>
                </div>
                <div className="col-12 ">
                    <label htmlFor="Email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" onChange={handleChange}/>
                </div>
                <div className="col-12 ">
                    <label htmlFor="Number" className="form-label">Phone</label>
                    <input type="number" className="form-control" id="phone" name="phone" placeholder="Enter phone" onChange={handleChange}/>
                </div>
                <div className="col-12 ">
                    <label htmlFor="Address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" name="address" placeholder="Enter address" onChange={handleChange}/>
                </div>
            <button className="btn btn-primary col-12 my-2" type="submit" >save</button>
            <Link to={"home"}>volver a agenda </Link>
            </form>
        </div>
    </div>

    )
}