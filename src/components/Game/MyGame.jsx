import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { GameService } from '../../services/gameService ';
import { NewGame } from './NewGame';
import { RemoveGame } from './RemoveGame';
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
            <h1>Mis partidas</h1>
            {(user.isTeacher)?<NewGame   user={user} recargarPartidas={obtenerPartidas} />:<Fragment></Fragment>}
            {/* <Classroom key={classroom.classId} classroom={classroom} /> */}
            <div className="row">
                {games.map((game) => (
                    <div className="col-lg-6" key={game.gameId}>
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <div className='row'>
                                    <div className='col-lg-11'>
                                        <h6 className="m-0 font-weight-bold text-primary">Partida del dia {game.start_date} con el ejercicio {game.ExerciseId}</h6>
                                    </div>
                                    <div className='col-lg-1'>
                                        <RemoveGame  user={user} gameId={game.gameId} recargarPartidas={obtenerPartidas} pin={game.pin} />
                                    </div>
                                </div>

                            </div>
                            <div className="card-body">
                                <h2>{game.pin}</h2>

                                <p>El pin para unirse a la partida es <b>{game.pin}</b></p>
                                <p>El ejercicio es <b>{game.ExerciseId}</b></p>
                                <p>La partida empieza el <b>{game.start_date}</b></p>
                                <p>La partida termina el <b>{game.end_date}</b></p>
                                <Link to={`/game/${game.gameId}`} className="btn btn-primary">Ver partidas</Link>

                            </div>
                        </div>
                    </div>

                ))}

            </div>



        </Fragment>
    );
};

