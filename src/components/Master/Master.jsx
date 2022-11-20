import React, { Fragment } from 'react'
import { Columna } from './Columna'
import { Cabecera } from './Cabecera'
import { Pie } from './Pie'
export function Master({  children }) {

    return (
        <Fragment>
            <div id="wrapper">
                <Columna  />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Cabecera />
                        <div className="container-fluid">
                        {children}
                        </div>
                    </div>
                    <Pie />
                </div>
            </div>
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>


        </Fragment>
    )
}
