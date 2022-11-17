import React, { Fragment } from 'react'
import { Cabecera } from '../Master/Cabecera'
import { Columna } from '../Master/Columna'
import { Pie } from '../Master/Pie'
import { Link } from 'react-router-dom'

export  function Api({user}) {
  return (
    <Fragment>
    <div id="wrapper">
        <Columna user={user} />
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <Cabecera user={user} />
                <div className="container-fluid">
                <Link to="/docs" >Volver a Documentación</Link>
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
                </div>
            </div>
            <Pie />
        </div>
    </div>
</Fragment>
  )
}
