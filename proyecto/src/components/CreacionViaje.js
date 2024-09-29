import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreacionViaje = () => {
    const [numeroViajes, setNumeroViajes] = useState(1); // Number of trips
    const [monedaSeleccionada, setMonedaSeleccionada] = useState('COP'); // Selected currency
    const [listaParticipantes, setListaParticipantes] = useState(''); // Participants list
    const navigate = useNavigate(); // Hook for navigation

    // Function to handle form submission
    const manejarEnvio = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Split participants input into an array and limit to the first 20
        const arregloParticipantes = listaParticipantes.split(',').slice(0, 20);

        // Check if the number of participants exceeds the limit
        if (arregloParticipantes.length > 20) {
            alert('El número máximo de participantes es 20.'); // Alert if limit exceeded
            return; // Exit the function
        }

        // Here, you can store the trip data in localStorage if needed

        // Navigate to VerDetalles.js
        navigate('/ver-detalles'); // This line ensures navigation
    };

    return (
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">Crear Nuevo Viaje</h5>
                <form onSubmit={manejarEnvio}>
                    {/* Input for the number of trips (first form input) */}
                    <div className="mb-3">
                        <label htmlFor="numeroViajes" className="form-label">Número de Viajes:</label>
                        <input
                            id="numeroViajes"
                            type="number"
                            min="1"
                            className="form-control"
                            value={numeroViajes}
                            onChange={(e) => setNumeroViajes(e.target.value)} // Update number of trips
                            required
                        />
                    </div>
                    
                    {/* Dropdown for selecting currency */}
                    <div className="mb-3">
                        <label htmlFor="moneda" className="form-label">Selecciona Moneda:</label>
                        <select
                            id="moneda"
                            className="form-select"
                            onChange={(e) => setMonedaSeleccionada(e.target.value)} // Update selected currency
                            value={monedaSeleccionada}
                        >
                            <option value="COP">COP</option>
                            <option value="USD">USD</option>
                        </select>
                    </div>
                    
                    {/* Input for participants list */}
                    <div className="mb-3">
                        <label htmlFor="participantes" className="form-label">Participantes:</label>
                        <input
                            id="participantes"
                            type="text"
                            className="form-control"
                            placeholder="Participantes (separados por comas)"
                            value={listaParticipantes}
                            onChange={(e) => setListaParticipantes(e.target.value)} // Update participants list
                            required
                        />
                    </div>
                    
                    {/* Submit button to create the trip */}
                    <button type="submit" className="btn btn-primary">Crear Viaje</button>
                </form>
            </div>
        </div>
    );
};

export default CreacionViaje;
