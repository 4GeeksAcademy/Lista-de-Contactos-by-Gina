import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";


export const Home = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
	  fetch('https://assets.breatheco.de/apis/fake/contact/agenda/johana_agenda')
		.then(response => response.json())
		.then(data => {
		  setData(data);
		})
		.catch(error => {
		  console.error('Error:', error);
		});
	}, []);
	const handleDelete = (id) => {
		
			const updatedTodos = todos.filter((todo) => todo.id !== id);
			setTodos(updatedTodos);
		fetch("https://assets.breatheco.de/apis/fake/contact/", {
		  method: 'DELETE',
		})
		  .then(response => {
			if (response.ok) {
	
			} else {
			  throw new Error('Error al eliminar el elemento');
			}
		  })
		  .catch(error => {
			console.error('Error:', error);
		  });
	  };
	  
	  
	  
	  
	  
	  
	  
  
	return (
		<div className="container">
  <div className="row">
    {data.map(item => (
      <div className="card col-md-12" key={item.id}>
        <div id={`agenda-${item.id}`}>
        </div>
        <div className="d-flex align-items-center">
          <div className="col-sm-3">
            <img src="https://2.bp.blogspot.com/-3CFngKHGQ2A/TaPJUyTkhzI/AAAAAAAABsc/U8klpvVbnAs/s1600/d_silhouette_Homer_Simpson.jpg" alt="" className="rounded-circle" />
          </div>
          <div className="col-sm-9">
            <div className="d-flex justify-content-between align-items-center">
              <h3>{item.full_name}</h3>
              <button className="delete-button" onClick={() => handleDelete()}>
                <i className="fa fa-trash fa-lg"></i>
              </button>
            </div>
            <p className="email">
              <i className="fas fa-envelope"></i>
              {item.email}
            </p>
            <p className="contact-info">
              <i className="fas fa-phone"></i>
              {item.phone}
            </p>
            <p className="contact-info">
              <i className="fas fa-map-marker-alt"></i> {item.address}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
		
				);
				}