import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { ClassroomService } from '../../services/classroomService';
import { ClassroomTeacher } from './ClassroomTeacher';
import { useAuthContext } from '../../context/AuthContextProvider';
import { Master } from '../Master/Master';
import { ClassroomStudent } from './ClassroomStudent';
export function Classroom() {
  const { user } = useAuthContext();

  const { id } = useParams();


  const [classroom, setClassroom] = useState();
  useEffect(() => {
    RecargarClase(user, id);

  }, [id, user]);

  const RecargarClase = (user, id) => {
    const classroomService = new ClassroomService(user.accessToken);
    classroomService.findClassroom(id).then((classroom1) => {
      console.log(JSON.stringify(classroom1));
      setClassroom(classroom1);
    });
  }


  return <Master>{(user.isTeacher) ?
    <ClassroomTeacher classroom={classroom} RecargarClase={RecargarClase} />


    :
    <ClassroomStudent classroom={classroom} />
  }
  </Master>

}
