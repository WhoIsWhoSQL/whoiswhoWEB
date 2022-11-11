import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ClassroomService } from '../../services/classroomService';
import { NewClassroom } from './NewClassroom';
export function MyClassrooms({ user }) {
    const [classrooms, setClassrooms] = useState([]);
    useEffect(() => {
        try {
            obtenerClases(user);
        } catch (error) {
            console.log("error en la api")
        }

    }, [user]);


    const obtenerClases = (user) => {

        const classroomService = new ClassroomService(user.accessToken);
        classroomService.getClassrooms().then((classroomList) => {
            setClassrooms(classroomList);

        });
    }
    return (
        <Fragment>

            <h1>My Classrooms</h1>
            <NewClassroom user={user} obtenerClases={obtenerClases} />
            {/* <Classroom key={classroom.classId} classroom={classroom} /> */}
            <div className="row">
                {classrooms.map((classroom) => (
                    <div className="col-lg-6" key={classroom.classId}>
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">{classroom.name}</h6>
                            </div>
                            <div className="card-body">
                                <p>            hola clase, esta es la clase {classroom.name} con id = {classroom.classId}
                                </p>
                                <p>El pin para unirse a la clase es <b>{classroom.pin}</b></p>
                                <Link to={`/classroom/${classroom.classId}`} className="btn btn-primary">Ver clase</Link>
                            </div>
                        </div>
                    </div>

                ))}

            </div>



        </Fragment>
    );
};

