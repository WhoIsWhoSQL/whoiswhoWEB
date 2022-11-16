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
                            <p> Como la app se basa en un juego para SQL, hemos planteado la aplicación con varias BBDD.</p>
                            <ul>
                                <li>BBDD de la App WhoisWho</li>
                             <li> BBDD Para Cada uno de los Niveles del juego</li>
                            </ul>
                            <h2>BBDD de la APP</h2>
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

                            <h2>BBDD Nivel 1</h2>
                                <p>Para el juego, se han creado varias bbdd una para cada nivel con su bbdd correspondiente.</p>
                                <p> También se ha creado un usuario para lanzar las querys de los jugadores que SOLO tiene acceso a esa bbdd y solo con permisos para hacer Selects</p>
                                <p> De esta forma, nos aseguramos de que los jugadores, no puedan rompernos la app ni hacer trampas.</p>
                                
                        </div>
                    </div>
                    <Pie />
                </div>
            </div>
        </Fragment>

    )
}
