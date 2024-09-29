import React from 'react';
import { useNavigate } from 'react-router-dom';

const Balances = ({ balances = [] }) => {
    const navigate = useNavigate();

    return (
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">Balances de Participantes</h5>
                {balances.length === 0 ? (
                    <p>No hay balances para mostrar.</p>
                ) : (
                    <ul className="list-group">
                        {balances.map((balance, index) => (
                            <li key={index} className="list-group-item">
                                {balance.participante}: {balance.saldo >= 0 ? 'A Favor' : 'En Contra'} (${Math.abs(balance.saldo)})
                            </li>
                        ))}
                    </ul>
                )}
                <button className="btn btn-warning mt-2" onClick={() => {/* Lógica para calcular el balance */}}>
                    Balance de Gastos
                </button>
                <button className="btn btn-primary mt-2" onClick={() => navigate('/ver-detalles')}>
                    Ver Detalles
                </button>

            </div>
        </div>
    );
};

export default Balances;
