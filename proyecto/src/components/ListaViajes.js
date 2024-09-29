// src/components/ListaViajes.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ListaViajes = () => {
    const navigate = useNavigate(); // Initialize the navigate function
    const viajes = JSON.parse(localStorage.getItem('viajes')) || [];

    return (
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">Lista de Viajes</h5>
                <div className="mb-2">
                    <button 
                        className="btn btn-warning me-2" 
                        onClick={() => navigate('/creacion-viaje')} // Navigate to CreacionViaje
                    >
                        Crear Nueva Ruta
                    </button>
                    <button 
                        className="btn btn-info" 
                        onClick={() => navigate('/unirse-viaje')} // Navigate to UnirseViaje
                    >
                        Unirse a un Viaje
                    </button>
                </div>
                <ul className="list-group">
                    {viajes.length > 0 ? (
                        viajes.map((viaje, index) => (
                            <li key={index} className="list-group-item">
                                <h6>{viaje.nombreViaje}</h6>
                                <p>{viaje.descripcion}</p>
                                <small>{viaje.fecha}</small>
                            </li>
                        ))
                    ) : (
                        <li className="list-group-item">No hay viajes creados.</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ListaViajes;
