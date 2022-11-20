import React, { Fragment } from 'react'
import { useAuthContext } from '../../context/AuthContextProvider';
import { GameService } from '../../services/gameService ';

export function RemoveGame({  gameId ,pin,recargarPartidas}) {
    const { user } = useAuthContext();



    const handleRemoveGame = (e) => {
        e.preventDefault();
        console.log("RemoveGame: ", gameId);
        const gameService = new GameService(user.accessToken);
        gameService.remove(gameId).then((game) => {
            console.log("game", game);
            recargarPartidas(user);
        });

    }
        if (user.isTeacher) {




            return (
                <Fragment>
                    <a href="." className="btn btn-primary btn-icon-split" data-toggle="modal" data-target={`#newModalRemoveGame${pin}`}>
                        <span className="icon text-white-50">
                            <i className="fas fa-trash"></i>
                        </span>
                    </a>

                    <div className="modal fade" id={`newModalRemoveGame${pin}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">¿Seguro que quieres borrarlo?</h5>
                                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">Se borrará la partida con pin {pin}. Esta acción no podrá deshacerse.</div>


                                <div className="modal-footer">
                                    <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                    <a className="btn btn-primary" href="." onClick={handleRemoveGame} data-dismiss="modal">Borrar Partida</a>
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

