import React from 'react'
import {AiFillCloseCircle } from "react-icons/ai";



const Tarea = ({ eliminar, completa, tareaCompleta, tarea}) => {
  return (
    
       <>
       
      
              <div className='card card2 shadow-lg '>
               
                <div className={completa ? 'row   d-flex  completa ' : ' row   d-flex '} onClick={()=> tareaCompleta(tarea.id)}>
                  
                  <div className='card-body text-left'>
                    <h2 className='card-title text-center text-darger'>{tarea.texto}</h2>
                    <p className="card-text">{tarea.descripcion}</p>
                  
                  </div> 
                  
                </div>
                <div className="icono"  onClick={()=>eliminar(tarea.id)}>
                      <AiFillCloseCircle />
                </div>
              </div>
       </>
          
      
        
   
  )
}

export default Tarea