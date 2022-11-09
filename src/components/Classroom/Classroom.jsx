import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
export function Classroom({ user }) {
  const { id } = useParams();
  return (
    <Fragment>
      Esta es la clase {id}
    </Fragment>
  )
}
