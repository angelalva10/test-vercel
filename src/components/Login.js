// src/components/Login.js
import React, { useState } from 'react';
import app from '../App';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await app.post('/login', { username, password });
      alert('Inicio de sesión exitoso');
    } catch (error) {
      console.error('Error al iniciar sesión', error);
      alert('Nombre de usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Login</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
