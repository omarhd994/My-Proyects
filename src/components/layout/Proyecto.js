import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from '../data/trabajos';

export const Proyecto = () => {

    const [proyectoSelected, setProyectoSelected] = useState("");
    const params = useParams();

    useEffect (() => {
        let proyectoSelected = trabajos.filter(trabajo => trabajo.id === params.id );
        setProyectoSelected(proyectoSelected[0]);
        
    }, []);

  return (
    <div className='page page-project'>
        <div className='mask'>
              <img src={"/images/"+proyectoSelected.id+".png"}/>
        </div>
    <h1 className='heading'>Proyecto: {proyectoSelected.nombre}</h1>
    <p>{proyectoSelected.tecnologias}</p>
    <p>{proyectoSelected.descripcion}</p>
    <a href={"https://"+proyectoSelected.url} target="_blank">Ir al proyecto</a>



    </div>
  )
}
