import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContextProvider';
import { PlayMoveService } from '../../services/playmoveService';
import { Master } from '../Master/Master'
import { Donut } from './Donut';
import { TablaMovimientos } from './TablaMovimientos';

export  function StatisticGames() {
    const { user } = useAuthContext();

    const { id } = useParams();


    const [moves, setMoves] = useState();
    const [listaJugadores, setlistaJugadores] = useState([]);

    const [dataConsultas, setDataConsultas] = useState([]);
    useEffect(() => {
        const playmoveService = new PlayMoveService(user.accessToken);
        playmoveService.findMoves(id, 0, 0).then((moveslist) => {
            //console.log(JSON.stringify(moveslist));

            console.log("moveslist", moveslist);
            const jugadores = moveslist.map(dataItem => dataItem.studentId)
                .filter((studentId, index, array) => array.indexOf(studentId) === index);

                console.log("jugadores", jugadores);
                setlistaJugadores(jugadores);

            const numCorrectas = moveslist.filter(item => item.result >= 0).length;

            const numIncorrectas = moveslist.filter(item => item.result < 0).length;


            const data = {
                labels: ['Correctas', 'Incorrectas',],
                datasets: [
                    {
                        label: '# de Consultas',
                        data: [numCorrectas, numIncorrectas],
                        backgroundColor: [
                            '#02634b',
                            '#e74a3b',
                        ],
                    },
                ],
            };
            setDataConsultas(data);
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
                <h1>Partida Pin: {moves[0].pin}  </h1>
                <h2>Fecha: {moves[0].start_date}</h2>
                <div className='row'>
                    <div className="col-xl-4 col-lg-5">
                        <div className="card shadow mb-4">

                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">¿Cuántas partidas ha jugado?</h6>
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


                                    <Donut data={dataConsultas} />

                                </div>
                                <hr />
                                Número total de consultas: {moves.length}
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-5">
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

                                </div>
                                <hr />
                                Número total de consultas: {moves.length}
                            </div>
                        </div>
                    </div>
                </div>


                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Lista de Jugadores</h6>
                    </div>

                    <div className="card-body">
                        <div className="table-responsive">
                            {listaJugadores.map((p) => (
                            
                            
                            <p>

                                <Link to={`/user/statistics/student/${p}`} className="btn btn-primary btn-icon-split">
                                    <span className="icon text-white-50">
                                        <i className="fas fa-play"></i>
                                    </span>
                                    <span className="text">Ver Estadísticas Partida con PIN:{moves.filter((m)=> (m.studentId===p ))[0].name} y email {moves.filter((m)=> (m.studentId===p ))[0].email}   </span>
                                </Link>
                            </p>))}
                        </div>
                    </div>

                </div>

<TablaMovimientos moves={moves} />

        
            </div>
        </Master>
        )
    }
}