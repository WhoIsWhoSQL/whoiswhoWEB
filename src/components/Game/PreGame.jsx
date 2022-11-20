import React, { Fragment } from 'react'
import Gravatar from 'react-gravatar'
import uuid from 'react-uuid'
import { Alert } from 'reactstrap'

export function PreGame({ players,empezarPartida }) {

   

    return (
        <Fragment>
            <h2>Uniéndose....</h2>
            <div className='row mb-3'><div className='col-lg-3'>
            <button onClick={empezarPartida} className="btn btn-primary btn-user btn-block">Empezar Partida</button>
                
                </div></div>
            <div className='row'>
                {players.map((_player) => (
                    <div className='col-lg-2' key={uuid()}>
                        <Alert  color='primary' isOpen={true}>
                            <div className='row'>
                                <div className='col-lg-2'>
                                    <Gravatar email={_player.email} size={30} rating="pg" default="monsterid" className="img-profile rounded-circle" />
                                </div>
                                <div className='col-lg-10' >
                                    <h4>{_player.name}</h4>
                                </div>
                            </div>
                        </Alert>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}
