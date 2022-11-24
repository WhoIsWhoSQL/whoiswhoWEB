import React, { useEffect, useState } from 'react'
import Gravatar from 'react-gravatar';
import { useParams } from 'react-router-dom';
import uuid from 'react-uuid';
import { useAuthContext } from '../../context/AuthContextProvider';
import { PlayMoveService } from '../../services/playmoveService';
import { Master } from '../Master/Master';
import { Donut } from './Donut';
import { TablaMovimientos } from './TablaMovimientos';
import { TablaPartidas } from './TablaPartidas';

export function StatisticStudents() {
    const { user } = useAuthContext();

    const { id } = useParams();


    const [moves, setMoves] = useState();
    const [listaPartidas, setListaPartidas] = useState([]);

    useEffect(() => {
        const playmoveService = new PlayMoveService(user.accessToken);
        playmoveService.findMoves(0, id, 0).then((moveslist) => {

            const partidas = moveslist.map(dataItem => dataItem.gameId)
                .filter((gameId, index, array) => array.indexOf(gameId) === index);
            setListaPartidas(partidas);

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


                                    <Donut moves={moves} key={uuid()} />

                                </div>
                                <hr />
                                Consultas correctas: {Math.round((moves.filter(item => item.result >= 0).length * 100)/(moves.length))} %
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
                                
                                <hr />
                                <h2 className='text-primary'><Gravatar email={moves[0].email} size={100} /> {moves[0].name}</h2>
                                <hr />
                                 <h2 className='text-primary'>{moves[0].email}</h2>   

                                </div>
                                <hr />
                                Número total de partidas: {listaPartidas.length}
                            </div>
                        </div>
                    </div>
                </div>


                <TablaPartidas moves={moves} />

                <TablaMovimientos moves={moves} />


            </div>
        </Master>
        )
    }
}