import React, { Fragment } from 'react'
import { Link, useParams } from 'react-router-dom'
export function Game({ user }) {
  const { id } = useParams();
  return (
    <Fragment>
      Esta es la partida con PIN {id}
      <Link to={`/result/${id}`} >ver resultados</Link>
    </Fragment>
  )
}
