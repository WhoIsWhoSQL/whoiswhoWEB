import React, { Fragment, useState, useEffect } from 'react'
import { ClassroomService } from '../services/classroomService';
import { Classroom } from './Classroom';
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
            <a href="." class="btn btn-primary btn-icon-split">
                <span class="icon text-white-50">
                    <i class="fas fa-flag"></i>
                </span>
                <span class="text">Create New Class</span>
            </a>
            <div class="row">
               
                    {classrooms.map((classroom) => (
                        <Classroom key={classroom.classId} classroom={classroom} />
                    ))}
               
            </div>



        </Fragment>
    );
};

