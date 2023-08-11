import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams, useNavigate } from "react-router-dom";

export const EditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { actions } = useContext(Context);
  const [contact, setContact] = useState({
    full_name: "",
    address: "",
    phone: "",
    email: ""
  });

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`);
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchContact();
  }, [id]);

  const handleChange = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const config = {
      method: "PUT",
      body: JSON.stringify(contact),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch(`https://playground.4geeks.com/apis/fake/contact/${contact.id}`, config)
      .then((response) => response.text())
      .catch(error => console.log('error', error))
      .then(response => {
        actions.loadContacts();
        navigate("/");
      });
  };

  const handleEdit = () => {
    actions.seeContact(contact);
    navigate(`/editForm/${contact.id}`);
  };

  return (
    <div className="container">
      {contact && (
        <form>
          <div className="form-group">
            <label>Nombre completo:</label>
            <input
              type="text"
              className="form-control"
              name="full_name"
              value={contact.full_name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Dirección:</label>
            <input
              type="text"
              className="form-control"
              name="address"
              value={contact.address}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Teléfono:</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={contact.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={contact.email}
              onChange={handleChange}
            />
          </div>
          <button type="button" className="btn btn-primary my-2" onClick={handleSubmit}>
            Actualizar
          </button>
          
        </form>
      )}
    </div>
  );
};