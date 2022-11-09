import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Cabecera } from '../Master/Cabecera'
import { Columna } from '../Master/Columna'
import { Pie } from '../Master/Pie'

export  function Docker({user}) {
  return (
    <Fragment>
    <div id="wrapper">
        <Columna user={null} />
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <Cabecera user={null} />
                <div className="container-fluid">
                <Link to="/docs" >Volver a Documentación</Link>
                    <h1>Docker</h1>
                    <p> </p>
                </div>
            </div>
            <Pie />
        </div>
    </div>
</Fragment>
  )
}
