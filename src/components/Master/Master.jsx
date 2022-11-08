import React, { Fragment } from 'react'
import { Columna } from './Columna'
import { Cabecera } from './Cabecera'
import { Pie } from './Pie'
import { Home } from '../Home/Home'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import { Classroom } from '../Classroom'
import { Game } from '../Game/Game'
import { About } from '../About'
import { NotFound } from '../NotFound'
export function Master({ user }) {

    return (
        <Fragment>
            <Router>            <div id="wrapper">
                <Columna />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Cabecera user={user} />
                        <div className="container-fluid">
                            
                                <Routes>
                                    <Route path="/" element={<Home user={user} />} />
                                    <Route path="/classroom/:id" element={<Classroom user={user} />} />
                                    <Route path="/about" element={<About user={user} />} />
                                    <Route path="/game/:id" element={<Game user={user} />} />
                                    <Route path="*" element={<NotFound />} />
                                </Routes>
                           
                        </div>
                    </div>
                    <Pie />
                </div>
            </div>
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>
            </Router>

        </Fragment>
    )
}
