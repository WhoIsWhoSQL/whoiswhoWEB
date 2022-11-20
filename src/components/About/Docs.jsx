import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { MasterAbout } from './MasterAbout'
export function Docs() {
    return (
        <MasterAbout>
            <Fragment>
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
            </Fragment>
        </MasterAbout>


    )
}
