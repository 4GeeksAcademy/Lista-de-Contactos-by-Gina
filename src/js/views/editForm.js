import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditForm = () => {
  const { id } = useParams();
  const { actions } = useContext(Context);
  const [contact, setContact] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`);
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchContact();
  }, [id]);

  const handleUpdate = () => {
    fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contact)
    })
      .then((response) => {
        if (response.ok) {
          navigate("/");
        } else {
          throw new Error("Error al actualizar el contacto");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
              value={contact.full_name}
              onChange={(e) => setContact({ ...contact, full_name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Dirección:</label>
            <input
              type="text"
              className="form-control"
              value={contact.address}
              onChange={(e) => setContact({ ...contact, address: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Teléfono:</label>
            <input
              type="text"
              className="form-control"
              value={contact.phone}
              onChange={(e) => setContact({ ...contact, phone: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              value={contact.email}
              onChange={(e) => setContact({ ...contact, email: e.target.value })}
            />
          </div>
          <button type="button" className="btn btn-primary my-2" onClick={handleUpdate}>
            Actualizar
          </button>
        </form>
      )}
    </div>
  );
};