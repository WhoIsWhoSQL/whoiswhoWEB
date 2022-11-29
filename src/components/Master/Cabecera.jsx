import React, { Fragment } from 'react'
import Gravatar from 'react-gravatar';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContextProvider';

export function Cabecera() {
    const { user } = useAuthContext();

    //  console.log("user:" + user);
    const handleLogout = () => {
        localStorage.removeItem('App.WiWSQL.user');
        return window.location.href = '/';
    }


    return (
        <Fragment>
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <ul className="navbar-nav ml-auto">
                    {(user === null) ? <Fragment>    </Fragment> :
                        <li className="nav-item dropdown no-arrow">
                            {(user.isTeacher) ?
                                <p className="nav-link dropdown-toggle" >
                                    Docente
                                </p> :
                                <p className="nav-link dropdown-toggle" >
                                    Estudiante
                                </p>}
                        </li>}
                    <div className="topbar-divider d-none d-sm-block"></div>
                    {(user === null) ?
                        <li className="nav-item dropdown no-arrow">
                            <Link className="nav-link dropdown-toggle" to="/">
                                <span className="mr-2 d-none d-lg-inline text-gray-600 small">Login</span>

                            </Link>
                        </li>
                        :
                        <Fragment>
                            {(user.isGamer) ? <Fragment>

                                <div className="text-center m-5">
                                    <button  className='btn btn-primary btn-user btn-block botonredondeado mb-2' onClick={handleLogout}>Volver a Jugar</button>
                                </div>
    </Fragment> :
                                <li className="nav-item dropdown no-arrow">
                                    <a className="nav-link dropdown-toggle" href="." id="userDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Hola <b>{user.name}</b></span>

                                        <Gravatar email={user.email} size={50} rating="pg" default="monsterid" className="img-profile rounded-circle" />
                                        {/* <img className="img-profile rounded-circle"
                                    src="img/undraw_profile.svg" alt='' /> */}
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="userDropdown">
                                        <a className="dropdown-item" href=".">
                                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Profile
                                        </a>
                                        {/* <a className="dropdown-item" href=".">
                                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Settings
                                </a>
                                <a className="dropdown-item" href=".">
                                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Activity Log
                                </a> */}
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="." data-toggle="modal" data-target="#logoutModal">
                                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Logout
                                        </a>
                                    </div>
                                </li>
                            }
                        </Fragment>

                    }
                </ul>


            </nav>


            <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                            <a className="btn btn-primary" href="." onClick={handleLogout}>Logout</a>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
