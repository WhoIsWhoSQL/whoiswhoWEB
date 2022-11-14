import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react';
import { ClassroomService } from '../../services/classroomService';
export function Classroom({ user }) {
  const { id } = useParams();


  const [classroom, setClassroom] = useState([]);
  useEffect(() => {
    const classroomService = new ClassroomService(user.accessToken);
    classroomService.findOneClassroom(id).then((classroom1) => {
      console.log(JSON.stringify(classroom1));
      setClassroom(classroom1);
    });
  }, [id,user]);

  return (
    <Fragment>
       <a href="." className="btn btn-primary btn-icon-split">
        <span className="icon text-white-50">
          <i className="fas fa-flag"></i>
        </span>
        <span className="text">Añadir nuevo Ejercicio</span>
      </a>
      <hr />
      <div class="col-lg-6" key={classroom.classId}>
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">{classroom.name}</h6>
          </div>
          <div class="card-body">
            <p>hola clase, esta es la clase {classroom.name} con id = {classroom.classId}</p>
            <p>El pin para unirse a la clase es <b>{classroom.pin}</b> </p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
