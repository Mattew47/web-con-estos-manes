import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Balances = ({ participantes = [] }) => {
    const [resultado, setResultado] = useState('');
    const [balances, setBalances] = useState(participantes.reduce((acc, participante) => {
        acc[participante] = 0;
        return acc;
    }, {}));
    const navigate = useNavigate();

    const equilibrarGastos = () => {
        const usuario = 'Nombre del Usuario';
        const usuarioBalance = balances[usuario];

        if (usuarioBalance !== undefined) {
            if (usuarioBalance > 0) {
                setResultado(`Le deben a ${usuario}: $${usuarioBalance}`);
            } else if (usuarioBalance < 0) {
                setResultado(`${usuario} debe: $${Math.abs(usuarioBalance)}`);
            } else {
                setResultado(`${usuario} está equilibrado.`);
            }
        } else {
            setResultado(`No se encontró el balance de ${usuario}.`);
        }
    };

    const manejarCambioBalance = (participante, nuevoBalance) => {
        setBalances((prevBalances) => ({
            ...prevBalances,
            [participante]: nuevoBalance
        }));
    };

    return (
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">Balances de Participantes</h5>
                {Object.keys(balances).length === 0 ? (
                    <p>No hay balances para mostrar.</p>
                ) : (
                    <ul className="list-group">
                        {Object.entries(balances).map(([participante, saldo]) => (
                            <li key={participante} className="list-group-item d-flex justify-content-between align-items-center">
                                <span>{participante}</span>
                                <input
                                    type="number"
                                    value={saldo}
                                    onChange={(e) => manejarCambioBalance(participante, parseFloat(e.target.value) || 0)}
                                    className="form-control w-25"
                                />
                                <span>{saldo >= 0 ? 'A Favor' : 'En Contra'} (${Math.abs(saldo)})</span>
                            </li>
                        ))}
                    </ul>
                )}
                <button className="btn btn-warning mt-2" onClick={equilibrarGastos}>
                    Equilibrar Gastos
                </button>
                {resultado && <p className="mt-2">{resultado}</p>}
                <button className="btn btn-primary mt-2" onClick={() => navigate('/ver-detalles')}>
                    Ver Detalles
                </button>
            </div>
        </div>
    );
};

export default Balances;
