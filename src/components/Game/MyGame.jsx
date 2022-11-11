import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { GameService } from '../../services/gameService ';
import { NewGame } from './NewGame';
export function MyGame({ user }) {
    const [games, setGames] = useState([]);
    useEffect(() => {
        obtenerPartidas(user);

    }, [user]);

    const obtenerPartidas = (user) => {
        const gameService = new GameService(user.accessToken);
        gameService.getGames().then((gameList) => {
            console.log(JSON.stringify(gameList));
            setGames(gameList);
        });
    };
    return (
        <Fragment>
            <h1>My Games</h1>

            <NewGame user={user} recargarPartidas={obtenerPartidas} />
            {/* <Classroom key={classroom.classId} classroom={classroom} /> */}
            <div class="row">
                {games.map((game) => (
                    <div class="col-lg-6" key={game.gameId}>
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Partida del dia {game.start_date} con el ejercicio {game.ExerciseId}</h6>
                            </div>
                            <div class="card-body">
                                <h2>{game.pin}</h2>

                                <p>El pin para unirse a la partida es <b>{game.pin}</b></p>
                                <p>El ejercicio es <b>{game.ExerciseId}</b></p>
                                <p>La partida empieza el <b>{game.start_date}</b></p>
                                <p>La partida termina el <b>{game.end_date}</b></p>
                                <Link to={`/game/${game.gameId}`} className="btn btn-primary">Ver partida</Link>
                            </div>
                        </div>
                    </div>

                ))}

            </div>



        </Fragment>
    );
};

