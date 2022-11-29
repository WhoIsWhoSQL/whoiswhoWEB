import React, { Fragment } from 'react'
import { Columna } from './Columna'
import { Cabecera } from './Cabecera'
import { Pie } from './Pie'
import { useAuthContext } from '../../context/AuthContextProvider';
export function Master({  children }) {
const { user } = useAuthContext();
    return (
        <Fragment>
            <div id="wrapper">
              {(user && user.isGamer)?<Fragment></Fragment>:<Columna />} 
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
