import React, { Fragment } from 'react'
import Gravatar from 'react-gravatar'
import uuid from 'react-uuid'
import { Alert } from 'reactstrap'

export function Score({ players, acabarPartida,end }) {
    return (
        <Fragment>
            <div className='row mb-3'><div className='col-lg-3'>
       {(end)?<button onClick={acabarPartida} className="btn btn-danger btn-user btn-block">Acabar partida</button>
:<Fragment></Fragment>}
            </div></div>
            {players.map((_player, index) => (

                <Alert key={uuid()} color='primary' isOpen={true}>
                    <div className='row'>
                        <div className='col-lg-1'>
                            <h3><b>{index + 1}º</b></h3>
                        </div>
                        <div className='col-lg-1'>
                            <Gravatar email={_player.email} size={50} rating="pg" default="monsterid" className="img-profile rounded-circle" />
                        </div>
                        <div className='col-lg-4' >
                            <h2>{_player.name}</h2>
                            {new Date(_player.date).toLocaleTimeString()}
                        </div>
                        <div className='col-lg-2' >
                            {(_player.result===1)?<Fragment>¡CONSEGUIDO!</Fragment>:
                            <Fragment>    Faltan por resolver: {_player.result}
                            </Fragment>}
                        </div>
                        <div className='col-lg-2' >
                            {(100 * (_player.TiradasVerdes + _player.TiradasAmarillas) /
                                (_player.TiradasVerdes + _player.TiradasAmarillas + _player.TiradasRojas)).toFixed(2)} % Consultas Correctas
                        </div>


                        <div className='col-lg-2' >
                            {_player.TiradasVerdes + _player.TiradasAmarillas + _player.TiradasRojas} Consultas
                        </div>

                    </div>
                </Alert>

            ))}



        </Fragment>
    )
}
