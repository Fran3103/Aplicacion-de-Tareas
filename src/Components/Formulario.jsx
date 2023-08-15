import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'


const Form = (props) => {

const [texto, setTexto] = useState('')
const[descripcion, setDescripcion] = useState('')




const cambio = e => {
  setTexto(e.target.value)
}

const descrip = e => {
  setDescripcion(e.target.value)
}

const envio = (e) => {
    e.preventDefault()

  
      const tareaNueva = {
        
        id: uuidv4(),
        texto: texto,
        completa: false,
        descripcion: descripcion
      }
      
      props.onSubmit(tareaNueva)
    
    // props.guardar(tareaNueva)
  }




  return (
    <div className='container-sm '>
        <form className='form container-sm' onSubmit={envio}>
            
           
        
        <div className="mb-3">
          
          <input 
              type="text" 
              className="form-control" 
              id="exampleFormControlInput1" 
              placeholder="Titulo de la Tarea "
              value={texto}
              onChange={cambio}/>
                </div>
          <div className="mb-3">
            
            <textarea className="form-control "  id="exampleFormControlTextarea1" rows="3" placeholder='Descripcion de la Tarea' value={descripcion}
            type="text"
            onChange={descrip}
            >

            </textarea>
            <div className="d-grid mt-3">
                <button className='btn btn-success '>agregar tarea</button>
            </div>
          </div>
   </form>
    </div>
  )
}

export default Form