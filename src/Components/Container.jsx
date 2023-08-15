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

  const [editar, setEditar] = useState(null)


  useEffect(() => {
   window.localStorage.setItem("tareaGuardada", JSON.stringify(tareas))
  }, [tareas])



  const editarTarea = editar => {
    console.log(editar)
    // const tareaEditada = tareas.map((tarea) => (tarea.id === editar.id ? tarea : editar))
    const tareaEditada2 = tareas.map (tarea=>{ if (tarea.id === editar[0]){ editar=tarea }
      return tarea
    })
    setTareas(tareaEditada2)
    setEditar(null)
    console.log(tareaEditada2)
  }

  const agregarTarea = tarea=> {
    if(tarea.texto && tarea.descripcion){
      
      const actualizarTareas = [tarea, ...tareas]
      setTareas(actualizarTareas)
      setEditar(null)
      
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
          <Form onSubmit =  {agregarTarea } editar={editar} setEditar={setEditar} editarTarea={editarTarea} />
        <div className=" grid gap-3 ">

     
          <div className=" row d-flex gap-3  justify-content-center align-items-center ">
            { 
          
                tareas.map( (tarea) => 
                  <Tarea
                  key={tarea.id}
                
                  completa={tarea.completa}
                  tareaCompleta={tareaCompleta}
                  eliminar={eliminar}
                 
             
                  setEditar={setEditar}
                  editarTarea={editarTarea}
                  tarea={tarea}
                  />
                
                )
            }
            
          </div>
        
        </div>
    </div>
  )
}

export default Container