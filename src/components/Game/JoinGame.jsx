import React, { Fragment, useState } from 'react'
//import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContextProvider';
import { GameService } from '../../services/gameService ';
import { UserService } from '../../services/userService';

export function JoinGame() {
    const { user, login } = useAuthContext();

    const [pin, setPin] = useState('');
    const [nombre, setNombre] = useState('');
    const handlechangeName = (e) => {
        setNombre(e.target.value);
    };

    const handlechangePin = (e) => {
        setPin(e.target.value);
    }

    const handleJoinPartidaNoUser = async (e) => {
        e.preventDefault();
        const userService = new UserService(null);
        const password = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        const email = nombre + '@' + Date.now() + 'game';
        await userService.createUser({ name: nombre, email, password, isTeacher: 0 });
        const user = await userService.getLogin({ email, password });
        
        user.isGamer=1;
        console.log("user", JSON.stringify(user));
        const gameService = new GameService(user.accessToken);
        gameService.join(pin).then((game) => {
            login(user);
            return window.location.href = '/#/game/' + game.gameId;
        });
    };


    const handleJoinPartida = (e) => {
        const gameService = new GameService(user.accessToken);
        gameService.join(pin).then((game) => {
            return window.location.href = '/#/user/game/' + game.gameId;
        });


    }
    if (!user) {
        return (
            <Fragment>
                <div className="text-center">
                    <button value="login" className='btn btn-primary btn-user btn-block botonredondeado mb-2 ml-5' data-toggle="modal" data-target="#newJoinModalNoUser" >Únete a una partida</button>
                </div>

                <div className="modal fade" id="newJoinModalNoUser" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">¿Preparado para unirte?</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">Introduce el PIN
                                <input className="form-control form-control-user" name='pin' placeholder='PIN...' type='text' onChange={handlechangePin} />

                            </div>

                            <div className="modal-body">Introduce tu nombre
                                <input className="form-control form-control-user" name='nombre' placeholder='Nombre...' type='text' onChange={handlechangeName} />

                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                <a className="btn btn-primary" href="." onClick={handleJoinPartidaNoUser} data-dismiss="modal">Crear Partida</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    } else {
        if (user.isTeacher) {

            return <Fragment></Fragment>
        }
        else {
            return (
                <Fragment>
                    <a href="." className="btn btn-primary btn-icon-split m-2" data-toggle="modal" data-target="#newJoinModal">
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
                                <div className="modal-body">Selecciona el tipo de ejercicio que quieres
                                    <input className="form-control form-control-user" name='pin' placeholder='PIN...' type='text' onChange={handlechangePin} />

                                </div>
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
    }
}
