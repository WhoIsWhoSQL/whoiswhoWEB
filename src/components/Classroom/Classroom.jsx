import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { ClassroomService } from '../../services/classroomService';
import { ClassroomTeacher } from './ClassroomTeacher';
import { Exercise } from '../Exercises/Exercise';
export function Classroom({ user }) {
  const { id } = useParams();


  const [classroom, setClassroom] = useState();
  useEffect(() => {
    RecargarClase(user,id);
   
  }, [id, user]);

  const RecargarClase = (user,id) => {
    const classroomService = new ClassroomService(user.accessToken);
    classroomService.findClassroom(id).then((classroom1) => {
      console.log(JSON.stringify(classroom1));
      setClassroom(classroom1);
    });
  }

  if (user.isTeacher) {
    return <Fragment>
      <ClassroomTeacher user={user} classroom={classroom} RecargarClase={RecargarClase} />
 

      </Fragment> }
  else {
    return (
      <Fragment>
        
      {classroom?  <div className="col-lg-6" key={classroom.classId}>
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">{classroom.name}</h6>

            </div>
            <div className="card-body">
              <p>hola clase, esta es la clase {classroom.name} con id = {classroom.classId}</p>
              <p>El pin para unirse a la clase es <b>{classroom.pin}</b> </p>
              <h4> Lista de ejercicios disponibles:</h4>
                        {classroom.exercises.map((ex) => (
                          <Exercise ex={ex} key={ex.exerciseId} user={user}/>

                        ))}
                        {classroom.exercises.length===0?<p> No hay ejercicios disponibles</p>:null} 
            </div>
          </div>
        </div>:<Fragment></Fragment>}
      </Fragment>
    )
  }
}
