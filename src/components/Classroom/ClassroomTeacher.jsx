import React, { Fragment, useEffect, useState } from 'react'
import { ExerciseService } from '../../services/exerciseService';
import { Exercise } from '../Exercises/Exercise';

export function ClassroomTeacher({ user, classroom, RecargarClase }) {
    const [ExerciseId, setExerciseId] = useState(1);
    const [Exercises, setExercises] = useState([]);
    const exerciseService = new ExerciseService(user.accessToken);
    useEffect(() => {


        exerciseService.getExercises().then((listExercise) => {
            // console.log("lista de ejercicios:" + JSON.stringify(listExercise));
            setExercises(listExercise);

        })

    }, [user]);

    const handleSelectExercise = (e) => {
        setExerciseId(e.target.value);
    }
    const handleNuevaPartida = (e) => {

        console.log("añadir ejercicio:" + ExerciseId);
        console.log("classroom:" + JSON.stringify(classroom));
        exerciseService.addExerciseToClassroom(classroom.classId, ExerciseId).then((listExercise) => {
            console.log("añadido:" + JSON.stringify(listExercise));
            RecargarClase(user, classroom.Id);
        })
    }
    return (
        <Fragment>
            <a href="." className="btn btn-primary btn-icon-split" data-toggle="modal" data-target="#newEjercicioModal">
                <span className="icon text-white-50">
                    <i className="fas fa-flag"></i>
                </span>
                <span className="text">Añade un ejercicio</span>
            </a>

            <div className="modal fade" id="newEjercicioModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">¿Lo unimos a tu clase?</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">Selecciona el tipo de ejercicio que quieres</div>
                        <select onChange={handleSelectExercise}>
                            {Exercises.map((ex) => (
                                <Fragment key={ex.ExerciseId} >
                                    <option value={ex.ExerciseId}>Ejercicio {ex.name}</option>
                                </Fragment>))}
                        </select>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                            <a className="btn btn-primary" href="." onClick={handleNuevaPartida} data-dismiss="modal">Añade Ejercicio</a>
                        </div>
                    </div>
                </div>
            </div>


            {classroom?<div className="col-lg-12" >
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">{classroom.name}</h6>
                        <h2 className="m-0 font-weight-bold text-primary">PIN: {classroom.pin}</h2>
                    </div>
                    <div className="card-body">
                        <p>hola clase, esta es la clase {classroom.name} con id = {classroom.classId}</p>
                        <p>El pin para unirse a la clase es <b>{classroom.pin}</b> </p>
                        <h4> Lista de ejercicios disponibles:</h4>
                        {classroom.exercises.map((ex) => (
                          <Exercise ex={ex} key={ex.exerciseId} user={user} />

                        ))}
                        {classroom.exercises.length===0?<p> No hay ejercicios disponibles</p>:null} 
                    </div>
                </div>
            </div>:<div></div>}


        </Fragment>

    )
}
