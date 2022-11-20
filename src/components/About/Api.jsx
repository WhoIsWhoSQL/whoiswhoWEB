import React, { Fragment } from 'react'

import { MasterAbout } from './MasterAbout'

export function Api() {
    return (
        <MasterAbout >
            <Fragment>
                <h1>API</h1>
                <p>La API de la aplicación se encuentra en la siguiente dirección:</p>
                <p><a href="https://whoiswhosql.cancargol.net:3000/api/v1/">https://whoiswhosql.cancargol.net:3000/api/v1/</a></p>
                <p>La API está desarrollada en NodeJS y se encuentra alojada en un servidor Oracle Cloud con Docker.</p>
                <p>La API está desarrollada con el framework ExpressJS y se conecta a una base de datos MySQL alojada en un servidor en Oracle Cloud con Docker.</p>
                <p>Además, se ha documentado la API con Swagger para facilitar su comprensión</p>
                <p>La documentación de la API se encuentra en la siguiente dirección:</p>
                <p><a href="https://whoiswhosql.cancargol.net:3000/api/v1/docs/">https://whoiswhosql.cancargol.net:3000/api/v1/docs/</a></p>
                <p> El repositorio del código está en GitHub</p>
                <p><a href="https://github.com/WhoIsWhoSQL/whoiswhoAPI">https://github.com/WhoIsWhoSQL/whoiswhoAPI</a></p>
            </Fragment>
        </MasterAbout>

    )
}
