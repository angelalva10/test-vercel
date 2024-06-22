// src/components/Register.js
import React, { useState } from 'react';
import app from '../App';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register(){

  let navigate = useNavigate()

  const [users, setUsers] = useState({
    email:"",
    password:"",
  });

  const{email,password} = users

  const onInputChange=(e)=>{

    setUsers({...users,[e.target.email]:e.target.value})    

  }

  const onSubmit=async (e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/api/users/register",users)
    navigate("/");
  }

  return <div className='container'>
    <div className='row'>
      <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
        <h2 className='text-center m-4'>Crear Cuenta</h2>

        <form onSubmit={(e)=>onSubmit(e)}>
          <div className='mb-3'>
            <label htmlFor='Email' className='"form-label'>Email</label>
            <input type={"text"} className='form-control' placeholder='Ingresa tu email' name='email' value={email} onChange={(e)=>onInputChange(e)}></input>
          </div>
          <div className='mb-3'>
            <label htmlFor='Password' className='"form-label'>Contraseña</label>
            <input type={"text"} className='form-control' placeholder='Ingresa tu contraseña' name='password' value={password} onChange={(e)=>onInputChange(e)}></input>
          </div>
          <button type='submit' className='btn btn-outline-primary'>Crear</button>
          <button type='submit' className='btn btn-outline-danger mx-2'>Cancelar</button>
        </form>

      </div>
    </div>
  </div>
}
