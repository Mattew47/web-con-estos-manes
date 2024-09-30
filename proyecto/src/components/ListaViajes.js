import React from 'react';
import { useNavigate } from 'react-router-dom';

const ListaViajes = () => {
    const navigate = useNavigate();
    const viajes = JSON.parse(localStorage.getItem('viajes')) || [];

    return (
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">Lista de Viajes</h5>
                <div className="mb-2">
                    <button 
                        className="btn btn-warning me-2" 
                        onClick={() => navigate('/creacion-viaje')}
                    >
                        Crear Nueva Ruta
                    </button>
                    <button 
                        className="btn btn-info" 
                        onClick={() => navigate('/unirse-viaje')}
                    >
                        Unirse a un Viaje
                    </button>
                </div>
                <ul className="list-group">
                    {viajes.length > 0 ? (
                        viajes.map((viaje, index) => (
                            <li key={index} className="list-group-item d-flex align-items-center">
                                <i className="bi bi-geo-alt me-2" style={{ fontSize: '1.5em' }}></i>
                                <div>
                                    <h6 className="mb-1">{viaje.nombreViaje}</h6>
                                    <p className="mb-0">{viaje.descripcion}</p>
                                    <small className="text-muted">{new Date(viaje.fecha).toLocaleDateString()}</small>
                                </div>
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
