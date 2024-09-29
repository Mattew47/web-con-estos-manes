import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Registro = () => {
    const [email, setEmail] = useState('');
    const [numero, setNumero] = useState('');
    const [contrasena, setContrasena] = useState('');

    const manejarEnvio = (e) => {
        e.preventDefault();
        if (contrasena.length >= 6) {
            localStorage.setItem('usuario', JSON.stringify({ email, numero, contrasena }));
            alert('Registro exitoso.');
        } else {
            alert('La contraseña debe tener al menos 6 caracteres.');
        }
    };

    return (
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">Registro</h5>
                <form onSubmit={manejarEnvio}>
                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Número" value={numero} onChange={(e) => setNumero(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" placeholder="Contraseña" value={contrasena} onChange={(e) => setContrasena(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn btn-primary">Registrarse</button>
                </form>
                <p className="mt-3">¿Ya tienes una cuenta? <Link to="/iniciar-sesion">Inicia sesión aquí</Link>.</p>
            </div>
        </div>
    );
};

export default Registro;
