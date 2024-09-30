import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const VerDetalles = () => {
    const [tituloGasto, setTituloGasto] = useState('');
    const [monto, setMonto] = useState('');
    const [pagador, setPagador] = useState('');
    const [participantes, setParticipantes] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const manejarEnvio = (e) => {
        e.preventDefault();
        
        const gasto = {
            titulo: tituloGasto,
            monto: parseFloat(monto),
            pagador,
            participantes: participantes.split(',').map(participante => participante.trim()),
            fecha: new Date().toISOString(),
        };
        
        const gastosPrevios = JSON.parse(localStorage.getItem('gastos')) || [];
        gastosPrevios.push(gasto);
        localStorage.setItem('gastos', JSON.stringify(gastosPrevios));
        
        alert('Gasto registrado con éxito.');
        
        setTituloGasto('');
        setMonto('');
        setPagador('');
        setParticipantes('');
    };

    const verDetalles = () => {
        const gastos = JSON.parse(localStorage.getItem('gastos')) || [];
        if (gastos.length === 0) {
            alert('No hay gastos registrados para mostrar.');
            return;
        }
        
        const ultimoGasto = gastos[gastos.length - 1];
        navigate('/detalles-gasto', { state: { gasto: ultimoGasto } });
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

                <div className="mt-3">
                    <button className="btn btn-info me-2" onClick={verDetalles}>Ver Detalles</button>
                    <button className="btn btn-warning" onClick={() => navigate('/balances')}>Ver Balances</button>
                </div>
            </div>
        </div>
    );
};

export default VerDetalles;
