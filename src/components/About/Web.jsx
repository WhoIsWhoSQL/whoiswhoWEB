import React, { Fragment } from 'react'
import { Cabecera } from '../Master/Cabecera'
import { Columna } from '../Master/Columna'
import { Pie } from '../Master/Pie'
import { Link } from 'react-router-dom'

export  function Web({user}) {
  return (
    <Fragment>
    <div id="wrapper">
        <Columna user={user} />
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <Cabecera user={user} />
                <div className="container-fluid">
                <Link to="/docs" >Volver a Documentación</Link>
                    <h1>Web con ReactJs</h1>
                    <p> </p>
                </div>
            </div>
            <Pie />
        </div>
    </div>
</Fragment>
  )
}
