import React, { Fragment, useState, useEffect } from 'react'
import { ClassroomService } from '../services/classroomService';
export function MyClassrooms({ user }) {
    const [classrooms, setClassrooms] = useState([]);
    useEffect(() => {
        console.log("MyClassrooms user: " + JSON.stringify(user));
        const classroomService = new ClassroomService(user.accessToken);
        classroomService.getClassrooms().then((classroomList) => {
            console.log(JSON.stringify(classroomList));
            setClassrooms(classroomList);
        });
    }, [user]);

    return (
        <Fragment>
            <h1>My Classrooms</h1>
            {/* <Classroom key={classroom.classId} classroom={classroom} /> */}
            <div class="row">
                {classrooms.map((classroom) => (
                    <div class="col-lg-6" key={classroom.classId}>
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

                ))}

            </div>



        </Fragment>
    );
};

