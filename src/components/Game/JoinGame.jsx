import React, { Fragment, useState } from 'react'
//import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContextProvider';
import { GameService } from '../../services/gameService ';

export function JoinGame() {
    const { user } = useAuthContext();

    const [pin, setPin] = useState('');


    const handlechangePin = (e) => {
        setPin(e.target.value);
    }
    const handleJoinPartida = (e) => {

     //   console.log("nueva partida");
     //   console.log("user: " + user.accessToken);

        const gameService = new GameService(user.accessToken);
        gameService.join(pin).then((game) => {
       //     console.log("return to join:" + JSON.stringify(game));
            return window.location.href = '/#/user/game/' + game.gameId;
       
          //  return <Navigate to={"/user/game/" + game.gameId} />;
        });


    }
    if (!user.isTeacher) {
        return (
            <Fragment>
                <a href="." className="btn btn-primary btn-icon-split" data-toggle="modal" data-target="#newJoinModal">
                    <span className="icon text-white-50">
                        <i className="fas fa-flag"></i>
                    </span>
                    <span className="text">Únete a una partida</span>
                </a>

                <div className="modal fade" id="newJoinModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">¿Preparado para unirte?</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">Selecciona el tipo de ejercicio que quieres</div>
                            <input name='pin' placeholder='PIN...' type='text' onChange={handlechangePin} />
                            <div className="modal-footer">
                                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                <a className="btn btn-primary" href="." onClick={handleJoinPartida} data-dismiss="modal">Crear Partida</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
    else {
        <Fragment></Fragment>
    }
}
