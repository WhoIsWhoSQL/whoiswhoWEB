import React, { Fragment } from 'react'
import { useAuthContext } from '../../context/AuthContextProvider';
import { MyClassrooms } from '../Classroom/MyClassroom'

export function HomeTeacher() {  
    const { user } = useAuthContext();

  return (
    <Fragment>
      <h1 className="h3 mb-4 text-gray-800">Hola  <b>{user.name}</b></h1>

      <MyClassrooms />

      
    </Fragment>
  )
}
