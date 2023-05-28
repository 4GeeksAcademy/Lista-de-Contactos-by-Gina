import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const navigate = useNavigate()
    const [data,setData] = useState ({agenda_slug:"johana_agenda"})
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
              
              fetch("https://assets.breatheco.de/apis/fake/contact/", config).then(res => res.json())
              .catch(error => console.error('Error:', error))
              .then(response => { 
                navigate("/")
              });
        }

    

    
return ( 
    <div className="container">
        <div className="row">

            <h1>Registrate!</h1>
            <form onSubmit={handleSubmit}>
                <div className="col-12 ">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="name" name="full_name" placeholder="Full name" onChange={handleChange}/>
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
            <Link to={"/"}>Volver a la agenda </Link>
            </form>
        </div>
    </div>

    )
}
        <div>
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
        </div>
	