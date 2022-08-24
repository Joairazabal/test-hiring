import React from 'react'
import { getPersonas } from '../api/db'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'



export default function Table() {

  const[personas,setPersonas]= useState(getPersonas) 
  let key = 0
  return (
    <div className='d-flex flex-column align-items-center justify-content-center vh-100 container gap-3' >
      <button className='btn btn-outline-dark '><Link to='/' className='text-decoration-none text-reset'>Atras</Link></button>
      <table border='1' className='table table-bordered table-hover table-responsive'>

        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Carrera</th>
            <th>Hobbie</th>
          </tr>
        </thead>

        <tbody>
          {personas?.map(el=>{
            return(
              <tr key={key++}>
                <td >{el.nombre}</td>
                <td>{el.edad}</td>
                <td>{el.carrera}</td>
                <td>{el.hobbie}</td>
              </tr>
              
            )
          })}
          
        </tbody>
      </table>
      
    </div>
  )
}
