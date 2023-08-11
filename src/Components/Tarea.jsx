import React from 'react'
import {AiFillCloseCircle } from "react-icons/ai";


const Tarea = ({descripcion, texto, id , eliminar, completa, tareaCompleta}) => {
  return (
    
       <>
       
      
              <div className='card card2 shadow-lg '>
                <div className={completa ? 'row   d-flex  completa ' : ' row   d-flex '} onClick={()=> tareaCompleta(id)}>
                  
                  <div className='card-body text-left'>
                    <h2 className='card-title text-center text-darger'>{texto}</h2>
                    <p className="card-text">{descripcion}</p>
                  
                  </div> 
                  
                </div>
                <div className="icono"  onClick={()=>eliminar(id)}>
                      <AiFillCloseCircle />
                </div>
              </div>
       </>
          
      
        
   
  )
}

export default Tarea