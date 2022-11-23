import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContextProvider';
import { PlayMoveService } from '../../services/playmoveService';
import { Master } from '../Master/Master';
import { Donut } from './Donut';
import { TablaMovimientos } from './TablaMovimientos';

export function Students() {
    const { user } = useAuthContext();

    const { id } = useParams();


    const [moves, setMoves] = useState();
    const [listaPartidas, setListaPartidas] = useState([]);

    const [dataConsultas, setDataConsultas] = useState([]);
    useEffect(() => {
        const playmoveService = new PlayMoveService(user.accessToken);
        playmoveService.findMoves(0, id, 0).then((moveslist) => {
            //console.log(JSON.stringify(moveslist));

            console.log("moveslist", moveslist);
            const partidas = moveslist.map(dataItem => dataItem.gameId)
                .filter((gameId, index, array) => array.indexOf(gameId) === index);
            console.log("partidas", partidas);


            setListaPartidas(partidas);

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
                <h1>Estudiante: {moves[0].name}  </h1>
                <h2>Email: {moves[0].email}</h2>
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
                </div>


                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Lista de Partidas</h6>
                    </div>

                    <div className="card-body">
                        <div className="table-responsive">
                            {listaPartidas.map((p) => (
                            
                            
                            <p>

                                <Link to={`/user/statistics/games/${p}`} className="btn btn-primary btn-icon-split">
                                    <span className="icon text-white-50">
                                        <i className="fas fa-play"></i>
                                    </span>
                                    <span className="text">Ver Estadísticas Partida con PIN:{moves.filter((m)=> (m.gameId===p ))[0].pin}  y fecha: {moves.filter((m)=> (m.gameId===p ))[0].start_date} </span>
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