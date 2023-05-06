import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
    const initialState = {
        name: "",
        email: "",
        message: ""
    };

    const [data, setData] = useState(initialState);
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState("")
    
    let navigate = useNavigate();

    const handleInputChange = (event) => {
        if (data.name.length + 1 < 3) {
            setMessage('El nombre debe tener al menos 3 caracteres')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };
    
 const handleSubmit = (e) => {
    e.preventDefault();
    setData(initialState);

    // Obtener los datos del localStorage
    let storedData = JSON.parse(localStorage.getItem("contactos")) || [];

    // Si storedData no es un array, inicializar como un array vacío
    if (!Array.isArray(storedData)) {
        storedData = [];
    }

    // Agregar los nuevos datos
    storedData.push(data);

    // Guardar los datos actualizados en el localStorage
    localStorage.setItem("contactos", JSON.stringify(storedData));

    navigate("/");
};

    return (
        <div className="contact-container">
            <div className="contact-form-wrapper">
                <h1 className="contact-form-title">Contacto</h1>
                <div className="contact-form-container">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className="contact-form-label" htmlFor="name">Nombre:</label>
                            <input
                                type="text"
                                placeholder="Escribe tu nombre aquí"
                                className="contact-form-input"
                                onChange={handleInputChange}
                                name="name"
                                value={data.name}
                            />
                            {message && <div className="contact-form-message">{message}</div>}
                        </div>

                        <div>
                            <label className="contact-form-label" htmlFor="email">Correo electrónico:</label>
                            <input
                                type="email"
                                placeholder="Escribe tu correo electrónico aquí"
                                className="contact-form-input"
                                onChange={handleInputChange}
                                name="email"
                                value={data.email}
                            />
                        </div>
                        <div>
                            <label className="contact-form-label" htmlFor="message">Mensaje:</label>
                            <textarea
                                placeholder="Escribe tu mensaje aquí"
                                className="contact-form-textarea"
                                onChange={handleInputChange}
                                name="message"
                                value={data.message}
                            />
                        </div>
                        <button type="submit" className={`contact-form-button ${btnDisabled ? "disabled" : ""}`} disabled={btnDisabled}>Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
