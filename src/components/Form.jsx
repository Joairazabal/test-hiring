import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

export default function Form() {
  const [datos, setDatos]= useState([])

  const handleClick= (e)=>{
    e.preventDefault();
    setDatos(
     [ ...datos,{
          name: e.target.nombre.value,
          edad: e.target.edad.value,
          carrera: e.target.carrera.value,
      }]
    )
  }
  let id=0
  return (
    <div className='container'>
      <form onSubmit={handleClick} className='mb-10'>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label >Nombre</label>
      <input type="text" class="form-control" name='nombre'  placeholder="ej: Pedro"/>
    </div>
    <div class="form-group col-md-6">
      <label >Edad</label>
      <input type="number" class="form-control" name='edad' placeholder="ej:18"/>
    </div>
  </div>
  <div class="form-group col-md-6">
    <label >Carreras</label>
    <input type="text" class="form-control"placeholder="ej:ingieneria" name='carrera'/>
  </div>
  <button type="submit" class="btn btn-primary">send</button>
  </form>


 <div>
<table border='1' className='table table-bordered table-hover table-responsive'>
<thead>
  <tr>
    <th>Nombre</th>
    <th>Edad</th>
    <th>Carrera</th>
  </tr>
</thead>

<tbody>
  {datos?.map(el=>{
    return(
      <tr key={id++}>
        <td >{el.name}</td>
        <td>{el.edad}</td>
        <td>{el.carrera}</td>
      </tr>
      
    )
  })}
  
</tbody>
</table>
       
      </div>
      <button className='btn btn-outline-dark '><Link to='/' className='text-decoration-none text-reset'>Atras</Link></button>
    </div>
  )
}

