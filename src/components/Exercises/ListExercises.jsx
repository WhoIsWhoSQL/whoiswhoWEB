import React, { Fragment, useEffect, useState } from 'react'
import { ExerciseService } from '../../services/exerciseService';
import { GameService } from '../../services/gameService ';


export function ListExercises({ user }) {
    const [Exercises, setExercises] = useState([]);
    useEffect(() => {
        try {
            const exerciseService = new ExerciseService(user.accessToken);
            exerciseService.getExercises().then((exerciseList) => {
                setExercises(exerciseList);
             //   console.log("exerciseList", exerciseList);
            });
        } catch (error) {
            console.log("error en la api")
        }

    }, [user]);

    const handleCrearPartida =  (ExerciseId,e) => {
        console.log("nueva partida con ejercicio", ExerciseId );
        const gameService = new GameService(user.accessToken);
        gameService.create(ExerciseId).then((game) => {
            console.log("game", game);
            return window.location.href = '/game/' + game.id;
        }   );
    };

    
    return (
        <Fragment>

            <h1>Ejercicios disponibles</h1>
            <div className="row">
                {Exercises.map((ex) => (
                    <Fragment key={ex.ExerciseId}>
                        <div className="col-lg-6" >
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">{ex.name}</h6>
                                </div>
                                <div className="card-body">
                                    <p>         {ex.description}
                                        <img src={ex.img_tableDiagram} alt="imagen" width={'50%'} />
                                    </p>
                                
                                    <button className="btn btn-primary btn-icon-split" onClick={(e) =>handleCrearPartida(ex.ExerciseId, e)}  value={ex.ExerciseId} >
                                        <span className="icon text-white-50" value={ex.ExerciseId}>
                                            <i value={ex.ExerciseId}  className="fas fa-flag" ></i>
                                        </span>
                                        <span className="text" value={ex.ExerciseId} >Crea una nueva partida</span>
                                    </button>
                                   
                                </div>
                            </div>
                        </div>


                    </Fragment>
                ))}

            </div>



        </Fragment>
    );
};

