import React, {  useEffect, useState } from 'react'
import Form from './Formulario'

import Tarea from './Tarea'



const Container = () => {
  const [tareas , setTareas] = useState(
   ()=> {
    const tareasGuardadas = window.localStorage.getItem("tareaGuardada")
    if(tareasGuardadas){
      return JSON.parse(tareasGuardadas)
    } else {
      return []
    }
   }
  )

  useEffect(() => {
   window.localStorage.setItem("tareaGuardada", JSON.stringify(tareas))
  }, [tareas])



  const agregarTarea = tarea=> {
    if(tarea.texto.trim()){
      tarea.texto = tarea.texto.trim()
      const actualizarTareas = [tarea, ...tareas]
      setTareas(actualizarTareas)
      
    }
  }
  
  const tareaCompleta = id => {
    const actualizarTareas = tareas.map(tarea => {
      if(tarea.id === id){
        tarea.completa = !tarea.completa
      }
      return tarea
    })
    setTareas(actualizarTareas)
    
  }

  const eliminar = id => {
    const actualizarTareas = tareas.filter(tarea => tarea.id !== id)
    setTareas(actualizarTareas)
  }


  return (
    <div className='container  bg-primary-emphasis bg-gradient p-5 rounded-1'>
          <Form onSubmit =  {agregarTarea }  />
        <div className=" grid gap-3 ">

     
          <div className=" row d-flex gap-3  justify-content-center align-items-center ">
            { 
          
                tareas.map( (tarea) => 
                  <Tarea
                  key={tarea.id}
                  texto={tarea.texto}
                  completa={tarea.completa}
                  tareaCompleta={tareaCompleta}
                  eliminar={eliminar}
                  id={tarea.id}
                  descripcion={tarea.descripcion}
                  
                  />
                
                )
            }
            
          </div>
        
        </div>
    </div>
  )
}

export default Container