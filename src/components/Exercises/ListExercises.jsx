import React, { Fragment, useEffect, useState } from 'react'
import { useAuthContext } from '../../context/AuthContextProvider';
import { ExerciseService } from '../../services/exerciseService';
import { GameService } from '../../services/gameService ';
import { Master } from '../Master/Master';
import { Exercise } from './Exercise';


export function ListExercises( ) {
    const { user } = useAuthContext();

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

    const handleCrearPartida = (ExerciseId, e) => {
        //console.log("nueva partida con ejercicio", ExerciseId);
        const gameService = new GameService(user.accessToken);
        gameService.create(ExerciseId).then((game) => {
        //    console.log("game", game);
            return window.location.href = '/game/' + game.id;
        });
    };


    return (
        <Master user={user}>
        <Fragment>

            <h1>Ejercicios disponibles</h1>
            <div className="row">
                {Exercises.map((ex) => (
                   <Exercise key={ex.ExerciseId} user={user} ex={ex} handleCrearPartida={handleCrearPartida} />
                ))}

                
            </div>



        </Fragment></Master>
    );
};

