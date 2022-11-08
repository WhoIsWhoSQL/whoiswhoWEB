import React, { Fragment } from 'react'

export function Classroom({ classroom }) {


  // const classroom = {name:"Clase1"};

  return (
    <Fragment>
      <div class="col-lg-6">
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">{classroom.name}</h6>
          </div>
          <div class="card-body">
            <p>            hola clase, esta es la clase {classroom.name} con id = {classroom.classId}
            </p>
            <p>El pin para unirse a la clase es <b>{classroom.pin}</b></p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
