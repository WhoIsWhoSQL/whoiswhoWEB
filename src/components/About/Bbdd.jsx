import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { Cabecera } from '../Master/Cabecera'
import { Columna } from '../Master/Columna'
import { Pie } from '../Master/Pie'

export function Bbdd({user}) {
    console.log("user : " + JSON.stringify(user));
  

    return (
        <Fragment>
            <div id="wrapper">
                <Columna user={user} />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Cabecera user={user} />
                        <div className="container-fluid">
                        <Link to="/docs" >Volver a Documentación</Link>
                            <h1>Base de datos</h1>
                            <p>La base de datos se ha creado con MySQL Workbench y se ha exportado a un fichero .sql</p>
                            <p>Se ha creado una base de datos llamada <b>game</b> y una tabla llamada <b>users</b> con los siguientes campos:</p>
                            <ul>
                                <li>id: int, primary key, autoincrement</li>
                                <li>username: varchar(255)</li>
                                <li>password: varchar(255)</li>
                                <li>email: varchar(255)</li>
                                <li>role: varchar(255)</li>
                            </ul>
                            <p>Se ha creado una tabla llamada <b>classrooms</b> con los siguientes campos:</p>
                            <ul>
                                <li>classId: int, primary key, autoincrement</li>
                                <li>name: varchar(255)</li>
                                <li>pin: varchar(255)</li>
                            </ul>
                        </div>
                    </div>
                    <Pie />
                </div>
            </div>
        </Fragment>

    )
}
