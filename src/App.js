import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import UserList from './components/UserList';
import axios from 'axios';

const app = axios.create({
  baseURL: 'http://localhost:8080/api/users', // Ajusta la URL según tu configuración
});

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="my-4">BANCO A</h1>
        <div className="d-flex justify-content-center mb-4">
          <Link to="/register" className="btn btn-primary mx-2">Abrir Cuenta</Link>
          <Link to="/login" className="btn btn-primary mx-2">Login</Link>
          <Link to="/userlist" className="btn btn-primary mx-2">User List</Link>
        </div>
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/userlist" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
