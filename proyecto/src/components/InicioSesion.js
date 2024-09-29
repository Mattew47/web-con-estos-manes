import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InicioSesion = () => {
    const navigate = useNavigate(); 
    const [email, setEmail] = useState('');
    const [contrasena, setContrasena] = useState('');

    const manejarEnvio = (e) => {
        e.preventDefault();
        const usuario = JSON.parse(localStorage.getItem('usuario'));
        if (usuario && usuario.email === email && usuario.contrasena === contrasena) {
            alert('Inicio de sesión exitoso.');
            navigate('/lista-viajes'); // Cambiar aquí a la ruta correcta
        } else {
            alert('Email o contraseña incorrectos.');
        }
    };

    return (
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">Iniciar Sesión</h5>
                <form onSubmit={manejarEnvio}>
                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" placeholder="Contraseña" value={contrasena} onChange={(e) => setContrasena(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn btn-success">Iniciar Sesión</button>
                </form>
            </div>
        </div>
    );
};

export default InicioSesion;
