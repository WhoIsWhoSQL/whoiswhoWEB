import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContextProvider';
import { PlayMoveService } from '../../services/playmoveService';
import { Master } from '../Master/Master'
import { Donut } from './Donut';
import { TablaJugadores } from './TablaJugadores';
import { TablaMovimientos } from './TablaMovimientos';
import { TablaPartidas } from './TablaPartidas';

export function StatisticClassroom() {
    const { user } = useAuthContext();

    const { id } = useParams();


    const [moves, setMoves] = useState();
    const [listaJugadores, setlistaJugadores] = useState([]);
    const [listaPartidas, setListaPartidas] = useState([]);


    useEffect(() => {
        const playmoveService = new PlayMoveService(user.accessToken);
        playmoveService.findMoves(0, 0, id).then((moveslist) => {
            const jugadores = moveslist.map(dataItem => dataItem.studentId)
                .filter((studentId, index, array) => array.indexOf(studentId) === index);
            setlistaJugadores(jugadores);

            const partidas = moveslist.map(dataItem => dataItem.gameId)
                .filter((gameId, index, array) => array.indexOf(gameId) === index);
            setListaPartidas(partidas);
            setMoves(moveslist);
        });

    }, [id, user]);



    if (moves === undefined) {
        return <Master><div>Loading...</div></Master>
    } else if (moves.length === 0) {
        return <Master><div>Este clase aún no ha hecho ninguna partida</div></Master>
    } else {
        return (<Master>
            <div>
            <hr />
                                    <h1 className='text-primary'>{moves[0].nameClassroom}</h1>
                                    <hr />
            <Link to={`/user/classroom/${id}`} className="btn btn-primary btn-icon-split">
                                        <span className="icon text-white-50">
                                            <i className="fas fa-play"></i>
                                        </span>
                                        <span className="text"> Ver Clase   </span>
                                    </Link>

                <div className='row'>
                <div className="col-xl-4 col-lg-5">
                        <div className="card shadow mb-4">

                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">¿Cuántas partidas ha jugado?</h6>
                            </div>

                            <div className="card-body">
                                <div className="chart-pie pt-4">


                                    <div className='text-primary grande'><b> {listaPartidas.length}</b></div>

                                </div>
                                <hr />
                                Número total de consultas: {moves.length}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="card shadow mb-4">

                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">¿Cuántos alumn@s han jugado?</h6>
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
                                Consultas correctas: {Math.round((moves.filter(item => item.result >= 0).length * 100) / (moves.length))} %
                            </div>
                        </div>
                    </div>

                  
                </div>


                <TablaJugadores moves={moves} />
                <TablaPartidas moves={moves} />
                <TablaMovimientos moves={moves} />


            </div>
        </Master>
        )
    }
}