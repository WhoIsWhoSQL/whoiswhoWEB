import React from 'react'
import { useParams } from 'react-router-dom';

export  function Resultados({user,pin}) {
    console.log("Resultados");

    const { id } = useParams();


  return (
    <div>
      resultados de la partida {id}
    </div>
  )
}
