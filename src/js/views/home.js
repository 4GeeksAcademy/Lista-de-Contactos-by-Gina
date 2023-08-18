import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrashAlt, faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  const { actions } = useContext(Context);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://playground.4geeks.com/apis/fake/contact/agenda/johana_agenda")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);

    fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
        } else {
          throw new Error("Error al eliminar el elemento");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleEdit = (contact) => {
    actions.seeContact(contact);
    navigate(`/editForm/${contact.id}`);
  };

  return (
    <div className="container">
      <div className="row">
        {data.map((contact, index) => (
          <div className="card col-md-12 mb-2" key={contact.id} style={{ lineHeight: "3" }}>
            <div id={`agenda-${contact.id}`}>
              <div className="d-flex align-items-center">
                <div className="col-sm-3">
                  <img
                    src="https://2.bp.blogspot.com/-3CFngKHGQ2A/TaPJUyTkhzI/AAAAAAAABsc/U8klpvVbnAs/s1600/d_silhouette_Homer_Simpson.jpg"
                    alt=""
                    className="rounded-circle"
                  />
                </div>
                <div className="col-sm-6">
                  <h4>{contact.full_name}</h4>
                  <p>
                    <FontAwesomeIcon icon={faLocationDot} /> {contact.address}
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faEnvelope} /> {contact.email}
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faPhone} /> {contact.phone}
                  </p>
                </div>
                <div className="col-sm-3">
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => handleEdit(contact)}
                  >
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(contact.id)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};