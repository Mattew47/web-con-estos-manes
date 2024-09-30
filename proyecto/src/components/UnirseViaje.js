import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UnirseViaje = () => {
    const [codigoViaje, setCodigoViaje] = useState('');
    const navigate = useNavigate();

    const manejarUnion = (e) => {
        e.preventDefault();
        const viajes = JSON.parse(localStorage.getItem('viajes')) || [];
        const viajeExistente = viajes.find(viaje => viaje.codigo === codigoViaje);

        if (viajeExistente) {
            alert('¡Te has unido al viaje exitosamente!');
            navigate('/ver-detalles', { state: { viaje: viajeExistente } });
        } else {
            alert('Código de viaje no válido. Intenta nuevamente.');
        }
    };

    return (
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">Unirse a un Viaje</h5>
                <form onSubmit={manejarUnion}>
                    <div className="mb-3">
                        <label htmlFor="codigoViaje" className="form-label">Ingresa el código del viaje:</label>
                        <input
                            id="codigoViaje"
                            type="text"
                            className="form-control"
                            placeholder="Código del viaje"
                            value={codigoViaje}
                            onChange={(e) => setCodigoViaje(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Unirse al Viaje</button>
                </form>
            </div>
        </div>
    );
};

export default UnirseViaje;
