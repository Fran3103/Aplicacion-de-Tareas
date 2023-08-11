import React, { useEffect, useState } from 'react'

const Storage = () => {
    const[tareasGuardadas, setTareasGuardadas] = useState('')
  

    const datosGuardados = () =>{
      return localStorage.getItem('tarea')
    }
    
    useEffect(() => {
      setTareasGuardadas(datosGuardados)
    }, [tareasGuardadas])

  return (
    <div>{tareasGuardadas}</div>
  )
}

export default Storage