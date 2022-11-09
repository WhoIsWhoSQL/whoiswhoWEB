import React, { Fragment } from 'react'
import { Columna } from './Columna'
import { Cabecera } from './Cabecera'
import { Pie } from './Pie'
import { Home } from '../Home/Home'
import { Classroom } from '../Classroom/Classroom'
import { Game } from '../Game/Game'
import { About } from '../About'
import { NotFound } from '../NotFound'
export function Master({ user, pag }) {

    return (
        <Fragment>
            <div id="wrapper">
                <Columna user={user} />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Cabecera user={user} />
                        <div className="container-fluid">
                            {
                                (pag === "Home") ?
                                    <Home user={user} />
                                    : (pag === "Classroom") ?
                                        <Classroom user={user} />
                                        : (pag === "Game") ?
                                            <Game user={user} />
                                            : (pag === "About") ?
                                                <About user={user} />
                                                : (pag === "NotFound") ?
                                                    <NotFound user={user} />
                                                    : null
                            }
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
