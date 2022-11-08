import React, { Fragment } from 'react'
import { MyClassrooms } from './MyClassroom'

export  function Home({user}) {
  return (
    <Fragment>
        <h1 className="h3 mb-4 text-gray-800">Hola  <b>{user.name}</b></h1>
        <MyClassrooms user={user} />
    </Fragment>
  )
}
