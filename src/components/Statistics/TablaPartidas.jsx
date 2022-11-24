import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';

export function TablaPartidas({ moves }) {
    const [listaPartidas, setListaPartidas] = useState([]);
    useEffect(() => {
        const partidas = moves.map(dataItem => dataItem.gameId)
            .filter((gameId, index, array) => array.indexOf(gameId) === index);
        setListaPartidas(partidas);
    }, [moves]);
    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Lista de Partidas</h6>
            </div>

            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%">
                        <tbody>                       
                             {listaPartidas.map((p) => (
                            <tr key={uuid()}>
                                <td>{moves.filter((m) => (m.gameId === p))[0].start_date} </td>
                                <td> Partida Pin: {moves.filter((m) => (m.gameId === p))[0].pin}</td>
                                <td>Movimientos: {moves.filter((m) => (m.gameId === p)).length}</td>
                                <td>
                                    <Link to={`/user/statistics/games/${p}`} className="btn btn-primary btn-icon-split">
                                        <span className="icon text-white-50">
                                            <i className="fas fa-play"></i>
                                        </span>
                                        <span className="text">Ver Estadísticas Partida   </span>
                                    </Link>
                                </td>
                                <td>{!(moves.filter((m) => (m.gameId === p))[0].teacherId)?<span>Práctica Individual</span>:<span>Partida en clase</span>}</td>
                            </tr>))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
