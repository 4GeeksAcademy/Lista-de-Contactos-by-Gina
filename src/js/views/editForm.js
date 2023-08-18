import React, {useState, useContext, useEffect} from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const EditForm = () => {
	const { actions, store } = useContext(Context);
	const navigate = useNavigate();

	
	const [contact, setContact] = useState(store.contact);
	
	
    const handleChange = (event) =>{
		setContact({...contact, [event.target.name]: event.target.value});
		
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const config = {
            method: "PUT",
            body: JSON.stringify(contact),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        console.log(contact)
		fetch(`https://playground.4geeks.com/apis/fake/contact/${contact.id}`, config)
			.then((response) => response.text())
			.catch(error => console.log('error', error))
			.then(response => {
				actions.loadContacts();
				navigate("/");
			});
    }

    return(
        <form className="container" onSubmit={handleSubmit}>
			<div className="mb-3">
				<label htmlFor="imputName" className="form-label">Full Name</label>
				<input type="name" name="full_name" className="form-control" id="imputName" value={contact.full_name} placeholder="Full Name" 
					onChange={(e) => handleChange(e)} 
					/>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleInputEmail1" className="form-label">Email</label>
				<input type="email" name="email" className="form-control" id="exampleInputEmail1" value={contact.email} placeholder="email"
	    			onChange={(e) => handleChange(e)} 
					/>
			</div>
			<div className="mb-3">
				<label htmlFor="inputPhone" className="form-label">Phone</label>
				<input type="phone" name="phone" className="form-control" id="inputPhone" value={contact.phone}  placeholder="Enter Phone"
					onChange={(e) => handleChange(e)} 
					/>
			</div>
			<div className="mb-3">
				<label htmlFor="inputAddress" className="form-label">Address</label>
				<input type="address" name="address" className="form-control" id="inputAddress" value={contact.address}  placeholder="Enter Address"
					onChange={(e) => handleChange(e)}  
					/>
			</div>
      <div className="form-group mt-3">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to={"/"} type="button" className="btn btn-danger">
          Cancel
        </Link>
      </div>
		</form>
    )
}