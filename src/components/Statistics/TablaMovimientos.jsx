import React from 'react'
import uuid from 'react-uuid'

export  function TablaMovimientos({moves}) {
  return (
    <div className="card shadow mb-4">
    <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Lista de Movimientos</h6>
    </div>

    <div className="card-body">
        <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" >
                <thead>
                    <tr>{
                        Object.keys(moves[0]).map((key) => (
                            <th key={uuid()}><span className='text-primary'>{key}</span>
                            </th>
                        ))
                    }
                        <th></th>
                    </tr>

                </thead>
                <tfoot>
                    <tr>{
                        Object.keys(moves[0]).map((key) => (
                            <th key={uuid()}><span className='text-primary'>{key}</span>
                            </th>
                        ))
                    }
                        <th></th>
                    </tr>
                </tfoot>
                <tbody>

                    {moves.map((item) => (

                        <tr key={uuid()} className={(item.result < 0) ? 'bg-danger' : 'bg-primary'}>{
                            Object.keys(item).map((key) => (
                                <td key={uuid()}><b className='text-white'>{item[key]}</b>
                                </td>
                            ))
                        }
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    </div>

</div>
  )
}
