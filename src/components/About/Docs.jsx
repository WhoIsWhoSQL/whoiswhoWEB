import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Cabecera } from '../Master/Cabecera'
import { Columna } from '../Master/Columna'
import { Pie } from '../Master/Pie'
export function Docs({user}) {
    return (

        <Fragment>
            <div id="wrapper">
                <Columna user={user} />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Cabecera user={user} />
                        <div className="container-fluid">
                           
                            <h1>Documentación</h1>

                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Como se ha hecho:</h6>
                                <ul>
                                    <li>

                                        <Link to="/docs/bbdd" className="collapse-item">
                                            La BD con MySQL</Link>
                                    </li>
                                    <li>
                                        <Link to="/docs/api" className="collapse-item">
                                            Una API REST con NodeJS</Link>

                                    </li>
                                    <li>
                                        <Link to="/docs/web" className="collapse-item">Una web con ReactJS</Link>

                                    </li>
                                    <li>
                                        <Link to="/docs/docker" className="collapse-item">Despliegue con Docker</Link>

                                    </li>
                                    <li>
                                        <Link to="/docs/cicd" className="collapse-item">CI/CD con GitHub Actions</Link>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Pie />
                </div>
            </div>
        </Fragment>

    )
}
