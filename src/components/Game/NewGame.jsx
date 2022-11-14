import React, { Fragment, useEffect, useState } from 'react'
import { ExerciseService } from '../../services/exerciseService';
import { GameService } from '../../services/gameService ';

export function NewGame({ user ,recargarPartidas}) {
    const [ExerciseId, setExerciseId] = useState(1);
    const [Exercises, setExercises] = useState([]);

    useEffect(() => {

        const exerciseService = new ExerciseService(user.accessToken);
        exerciseService.getExercises().then((listExercise) => {
            // console.log("lista de ejercicios:" + JSON.stringify(listExercise));
            setExercises(listExercise);

        })

    }, [user]);

    const handleSelectExercise = (e) => {
        setExerciseId(e.target.value);
    }
    const handleNuevaPartida = (e) => {
    
        // console.log("nueva partida");
        const gameService = new GameService(user.accessToken);
        gameService.create(ExerciseId);
        recargarPartidas(user);
    }
    if (user.isTeacher) {

        // console.log("Exercises:" + JSON.stringify(Exercises));

        return (
            <Fragment>
                <a href="." className="btn btn-primary btn-icon-split" data-toggle="modal" data-target="#newGameModal">
                    <span className="icon text-white-50">
                        <i className="fas fa-flag"></i>
                    </span>
                    <span className="text">Crea una nueva partida</span>
                </a>

                <div className="modal fade" id="newGameModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
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
                                <a className="btn btn-primary" href="." onClick={handleNuevaPartida}  data-dismiss="modal">Crear Partida</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>




        )
    }
    else {
        <Fragment></Fragment>
    }
}
