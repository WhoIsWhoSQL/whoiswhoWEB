import React, { Fragment } from 'react'
import { MyClassrooms } from '../MyClassroom'

export function HomeTeacher({ user }) {
  return (
    <Fragment>
      <h1 className="h3 mb-4 text-gray-800">Hola  <b>{user.name}</b></h1>
      <a href="." className="btn btn-primary btn-icon-split">
        <span className="icon text-white-50">
          <i className="fas fa-flag"></i>
        </span>
        <span className="text">Create New Class</span>
      </a>
      <MyClassrooms user={user} />
    </Fragment>
  )
}
