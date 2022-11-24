import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';

export function TablaJugadores({ moves }) {
    const [lista, setLista] = useState([]);
    useEffect(() => {
        const jugadores = moves.map(dataItem => dataItem.userId)
        .filter((userId, index, array) => array.indexOf(userId) === index);
    setLista(jugadores);
    }, [moves]);
    return (
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Lista de Alumn@s</h6>
            </div>

            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%">
                        <tbody>                       
                             {lista.map((p) => (
                            <tr key={uuid()}>
                                <td>{moves.filter((m) => (m.userId === p))[0].name} </td>
                                <td>  {moves.filter((m) => (m.userId === p))[0].email}</td>
                                <td> {moves.filter((m) => (m.userId === p)).length}</td>
                                <td>
                                    <Link to={`/user/statistics/student/${p}`} className="btn btn-primary btn-icon-split">
                                        <span className="icon text-white-50">
                                            <i className="fas fa-play"></i>
                                        </span>
                                        <span className="text">Ver Estadísticas Jugador   </span>
                                    </Link>
                                </td>
                            </tr>))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
