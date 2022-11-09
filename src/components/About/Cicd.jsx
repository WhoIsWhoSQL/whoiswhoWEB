import React, { Fragment } from 'react'
import { Cabecera } from '../Master/Cabecera'
import { Columna } from '../Master/Columna'
import { Pie } from '../Master/Pie'

export  function Cicd({user}) {
  return (
    <Fragment>
    <div id="wrapper">
        <Columna user={user} />
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <Cabecera user={user} />
                <div className="container-fluid">
                <Link to="/docs" >Volver a Documentación</Link>
                    <h1>Continuos Integration, Continuos Deployment</h1>
                    <p> </p>
                </div>
            </div>
            <Pie />
        </div>
    </div>
</Fragment>
  )
}
