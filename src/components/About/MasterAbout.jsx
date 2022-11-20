import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContextProvider'
import { Cabecera } from '../Master/Cabecera'
import { Columna } from '../Master/Columna'
import { Pie } from '../Master/Pie'

export  function MasterAbout({children}) {
    const { user } = useAuthContext();

    
    return (
        <Fragment>
        <div id="wrapper">
            <Columna  />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Cabecera  />
                    <div className="container-fluid">
                 {!(user)?   <Link to="/docs" >Volver a Documentación</Link>:<Fragment></Fragment>}
                       {children}
                    </div> 
                </div>
                <Pie />
            </div>
        </div>
    </Fragment>
      )
    }
    