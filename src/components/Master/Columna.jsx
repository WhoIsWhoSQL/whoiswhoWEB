import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
export function Columna({ user }) {
    return (
        <Fragment>


            <ul className="navbar-nav bg-gradient-green sidebar sidebar-dark accordion" id="accordionSidebar">

                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">WhoIsWho<sup>SQL</sup></div>
                </a>

                <hr className="sidebar-divider my-0" />

                <li className="nav-item">

                    <Link to="/" className="nav-link">                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Inicio</span>
                    </Link>

                </li>
                {(user === null) ?
                    <Fragment>
                    </Fragment>
                    :
                    <Fragment>
                        <hr className="sidebar-divider" />

                        <div className="sidebar-heading">
                            Clases
                        </div>

                        <li className="nav-item active">
                            <a className="nav-link collapsed" href="." data-toggle="collapse" data-target="#collapseTwo"
                                aria-expanded="true" aria-controls="collapseTwo">
                                <i className="fas fa-fw fa-cog"></i>
                                <span>Clase</span>
                            </a>
                            <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Personalizar clases:</h6>
                                    <a className="collapse-item" href="buttons.html">Mis Clases</a>
                                    <a className="collapse-item" href="cards.html">Añadir Clase</a>
                                </div>
                            </div>
                        </li>
                        <hr className="sidebar-divider" />

                        <div className="sidebar-heading">
                            Partidas
                        </div>
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="." data-toggle="collapse" data-target="#collapseUtilities"
                                aria-expanded="true" aria-controls="collapseUtilities">
                                <i className="fas fa-fw fa-wrench"></i>

                                <span>Partidas</span>
                            </a>
                            <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                                data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Personalizar partidas:</h6>
                                    <a className="collapse-item" href="utilities-color.html">Nueva Partida</a>
                                    <a className="collapse-item" href="utilities-border.html">Mis Partidas</a>
                                </div>
                            </div>
                        </li>

                        <hr className="sidebar-divider" />

                        <div className="sidebar-heading">
                            Ejercicios
                        </div>

                        <li className="nav-item ">
                            <a className="nav-link" href="." data-toggle="collapse" data-target="#collapsePages" aria-expanded="true"
                                aria-controls="collapsePages">
                                <i className="fas fa-fw fa-folder"></i>
                                <span>Exercises</span>
                            </a>
                            <div id="collapsePages" className="collapse " aria-labelledby="headingPages"
                                data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Ejercicios disponibles:</h6>
                                    <a className="collapse-item" href="login.html">Nivel 1 WHERE</a>
                                    <a className="collapse-item" href="register.html">Nivel 2 INNER JOIN</a>

                                </div>
                            </div>
                        </li>
                        <hr className="sidebar-divider" />

                        <div className="sidebar-heading">
                            Como se ha hecho
                        </div>
                        <li className="nav-item ">
                            <Link to="about" className="nav-link"><i className="fas fa-fw fa-folder"></i>
                                <span>Sobre Nosotros</span></Link>

                        </li>


                        <li className="nav-item ">
                            <a className="nav-link" href="." data-toggle="collapse" data-target="#collapseComoSeHaHecho" aria-expanded="true"
                                aria-controls="collapsePages">
                                <i className="fas fa-fw fa-folder"></i>
                                <span>Como se ha hecho</span>
                            </a>
                            <div id="collapseComoSeHaHecho" className="collapse " aria-labelledby="headingPages"
                                data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Como se ha hecho:</h6>
                                    <Link to="/docs/bbdd" className="collapse-item">
                                        La BD con MySQL</Link>
                                    <Link to="/docs/api" className="collapse-item">
                                        Una API REST con NodeJS</Link>
                                    <Link to="/docs/web" className="collapse-item">Una web con ReactJS</Link>
                                    <Link to="/docs/docker" className="collapse-item">Despliegue con Docker</Link>
                                    <Link to="/docs/cicd" className="collapse-item">CI/CD con GitHub Actions</Link>

                                </div>
                            </div>
                        </li>
                    </Fragment>
                }
                <hr className="sidebar-divider d-none d-md-block" />

                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>


            </ul>
        </Fragment>
    )
}
