import React from 'react';
import { useLocation } from 'react-router-dom';

const DetallesGasto = () => {
    const location = useLocation();
    const { gasto } = location.state || {}; // Safely access state

    if (!gasto) {
        return <div>No hay detalles de gasto disponibles.</div>; // Handle missing data
    }

    return (
        <div>
            <h5>Título del Gasto: {gasto.titulo}</h5>
            <p>Monto: {gasto.monto}</p>
            <p>Pagador: {gasto.pagador}</p>
            <p>Participantes: {gasto.participantes.join(', ')}</p>
        </div>
    );
};

export default DetallesGasto;
