import React, { Fragment } from 'react'
import { Exercise } from '../Exercises/Exercise'

export  function ClassroomStudent({classroom}) {
  return (
    <Fragment>
        
      {classroom?  <div className="col-lg-12" key={classroom.classId}>
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">{classroom.name}</h6>

            </div>
            <div className="card-body">
              <p>hola clase, esta es la clase {classroom.name} con id = {classroom.classId}</p>
              <p>El pin para unirse a la clase es <b>{classroom.pin}</b> </p>
              <h4> Lista de ejercicios disponibles:</h4>
                        {classroom.exercises.map((ex) => (
                          <Exercise ex={ex} key={ex.exerciseId}/>

                        ))}
                        {classroom.exercises.length===0?<p> No hay ejercicios disponibles</p>:null} 
            </div>
          </div>
        </div>:<Fragment></Fragment>}
      </Fragment>
  )
}
