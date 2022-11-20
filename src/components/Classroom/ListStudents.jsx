import React, { Fragment } from 'react'
import uuid from 'react-uuid'

export function ListStudents({ Students }) {

    if (Students && Students.length > 0) {
        return (
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Lista de alumn@s</h6>
                </div>

                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" >
                            <thead>
                                <tr>{
                                    Object.keys(Students[0]).map((key) => (
                                        <th key={uuid()}><span className='text-primary'>{key}</span>
                                        </th>
                                    ))
                                }
                                    <th></th>
                                </tr>

                            </thead>
                            <tfoot>
                                <tr>{
                                    Object.keys(Students[0]).map((key) => (
                                        <th key={uuid()}><span className='text-primary'>{key}</span>
                                        </th>
                                    ))
                                }
                                    <th></th>
                                </tr>
                            </tfoot>
                            <tbody>

                                {Students.map((item) => (

                                    <tr key={uuid()}>{
                                        Object.keys(item).map((key) => (
                                            <td key={uuid()}><b>{item[key]}</b>
                                            </td>
                                        ))
                                    }
                                        <td>
                                            <button className="btn btn-primary btn-icon-split">
                                                <span className="icon text-white-50">
                                                    <i className="fas fa-info"></i>
                                                </span>
                                                <span className="text">Ver Estadísticas</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        )
    } else {
        return <Fragment><Fragment>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">No hay ningún alumn@...</h6>
                </div>
                <div className="card-body"><h2>Aún no hay ningún alumn@</h2>
                </div>
            </div></Fragment>:</Fragment>
    }

}
