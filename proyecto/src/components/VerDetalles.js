import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VerDetalles = () => {
    const [tituloGasto, setTituloGasto] = useState(''); // Title of the expense
    const [monto, setMonto] = useState(''); // Amount of the expense
    const [pagador, setPagador] = useState(''); // Person who paid
    const [participantes, setParticipantes] = useState(''); // Participants of the trip
    const navigate = useNavigate(); // Hook for navigation

    const manejarEnvio = (e) => {
        e.preventDefault();
        const gasto = {
            titulo: tituloGasto,
            monto,
            pagador,
            participantes: participantes.split(','), // Split participants into an array
        };
        alert('Gasto registrado con éxito.');
        // Here you can save the expense data to localStorage if needed
    };

    return (
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">Registrar Gasto</h5>
                <form onSubmit={manejarEnvio}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Título del Gasto"
                            value={tituloGasto}
                            onChange={(e) => setTituloGasto(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Monto"
                            value={monto}
                            onChange={(e) => setMonto(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Pagador"
                            value={pagador}
                            onChange={(e) => setPagador(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Participantes (separados por comas)"
                            value={participantes}
                            onChange={(e) => setParticipantes(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Registrar Gasto</button>
                </form>

                {/* Navigation Buttons */}
                <div className="mt-3">
                    <button className="btn btn-info me-2" onClick={() => navigate('/detalles-gasto')}>Ver Detalles</button>
                    <button className="btn btn-warning" onClick={() => navigate('/balances')}>Ver Balances</button>
                </div>
            </div>
        </div>
    );
};

export default VerDetalles;
