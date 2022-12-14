import React, { useEffect, useState } from 'react'
import Gravatar from 'react-gravatar';
import { Link, useParams } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContextProvider';
import { PlayMoveService } from '../../services/playmoveService';
import { Master } from '../Master/Master'
import { Donut } from './Donut';
import { TablaJugadores } from './TablaJugadores';
import { TablaMovimientos } from './TablaMovimientos';

export function StatisticGames() {
    const { user } = useAuthContext();

    const { id } = useParams();


    const [moves, setMoves] = useState();
    const [listaJugadores, setlistaJugadores] = useState([]);


    useEffect(() => {
        const playmoveService = new PlayMoveService(user.accessToken);
        playmoveService.findMoves(id, 0, 0).then((moveslist) => {
            const jugadores = moveslist.map(dataItem => dataItem.studentId)
                .filter((studentId, index, array) => array.indexOf(studentId) === index);
            setlistaJugadores(jugadores);
            setMoves(moveslist);
        });

    }, [id, user]);



    if (moves === undefined) {
        return <Master><div>Loading...</div></Master>
    } else if (moves.length === 0) {
        return <Master><div>Este jugador aún no ha hecho ninguna partida</div></Master>
    } else {
        return (<Master>
            <div>
                <h1 className='text-primary'>{!(moves[0].teacherId)?<span>Práctica Individual</span>:<span>Partida en clase</span>}</h1>
                <h2>Partida Pin: {moves[0].pin}  </h2>
                <h2>Fecha: {moves[0].start_date}</h2>
                <div className='row'>
                    <div className="col-xl-4 col-lg-5">
                        <div className="card shadow mb-4">

                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">¿Cuántos jugadores han jugado?</h6>
                            </div>

                            <div className="card-body">
                                <div className="chart-pie pt-4">


                                    <div className='text-primary grande'><b> {listaJugadores.length}</b></div>

                                </div>
                                <hr />
                                Número total de consultas: {moves.length}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="card shadow mb-4">

                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Consultas Correctas/Incorrectas</h6>
                            </div>

                            <div className="card-body">
                                <div className="chart-pie pt-4">


                                    <Donut moves={moves} />

                                </div>
                                <hr />
                                Consultas correctas: {Math.round((moves.filter(item => item.result >= 0).length * 100)/(moves.length))} %
                          </div>
                        </div>
                    </div>

                    {(moves[0].teacherId)?<div className="col-xl-4 col-lg-5">
                        <div className="card shadow mb-4">

                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Ver Partida</h6>
                            </div>

                            <div className="card-body">
                                <div className="chart-pie pt-4">

                                    <Link to={`/user/game/${id}`} className="btn btn-primary btn-icon-split">
                                        <span className="icon text-white-50">
                                            <i className="fas fa-play"></i>
                                        </span>
                                        <span className="text"> Ver Partida   </span>
                                    </Link>
                                <hr />
                                 <h2 className='text-primary'>{moves[0].nameClassroom}</h2>   

                                </div>
                                <hr />
                                Número total de consultas: {moves.length}
                            </div>
                        </div>
                    </div>
                    :
                    <div className="col-xl-4 col-lg-5">
                        <div className="card shadow mb-4">

                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Ver Partida</h6>
                            </div>

                            <div className="card-body">
                                <div className="chart-pie pt-4">
                                
                                <hr />
                                <h2 className='text-primary'><Gravatar email={moves[0].email} size={100} /> {moves[0].name}</h2>
                                <hr />
                                 <h2 className='text-primary'>{moves[0].email}</h2>   

                                </div>
                                <hr />
                                <span></span>
                            </div>
                        </div>
                    </div>}
                </div>


                <TablaJugadores moves={moves} />

                <TablaMovimientos moves={moves} />


            </div>
        </Master>
        )
    }
}