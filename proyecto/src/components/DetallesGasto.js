import React from 'react';
import { useLocation } from 'react-router-dom';

const DetallesGasto = () => {
    const location = useLocation();
    const { gasto } = location.state || {};
    const gastos = JSON.parse(localStorage.getItem('gastos')) || [];
    
    const gastosPorFecha = gastos.reduce((acc, gasto) => {
        const fecha = new Date(gasto.fecha).toLocaleDateString();
        if (!acc[fecha]) {
            acc[fecha] = [];
        }
        acc[fecha].push(gasto);
        return acc;
    }, {});

    const fechasOrdenadas = Object.keys(gastosPorFecha).sort((a, b) => new Date(b) - new Date(a));

    return (
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">Detalles del Gasto</h5>
                
                {gasto && (
                    <div className="mb-3">
                        <h6>Último Gasto Registrado:</h6>
                        <p>Título: {gasto.titulo}</p>
                        <p>Monto: ${gasto.monto}</p>
                        <p>Pagador: {gasto.pagador}</p>
                        <p>Participantes: {gasto.participantes.join(', ')}</p>
                        <p>Fecha: {new Date(gasto.fecha).toLocaleDateString()}</p>
                    </div>
                )}

                <h5 className="mt-4">Gastos Registrados por Fecha:</h5>
                {fechasOrdenadas.length === 0 ? (
                    <p>No hay gastos registrados.</p>
                ) : (
                    fechasOrdenadas.map(fecha => (
                        <div key={fecha}>
                            <h6>{fecha}</h6>
                            <ul>
                                {gastosPorFecha[fecha].map((gasto, index) => (
                                    <li key={index}>
                                        {gasto.titulo} - ${gasto.monto} - Pagado por: {gasto.pagador}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default DetallesGasto;
