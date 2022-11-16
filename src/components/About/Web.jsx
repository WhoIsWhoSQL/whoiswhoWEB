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
                    <p>En esta sección se explica como se ha desarrollado la parte web de la aplicación.</p>
                    <p>La aplicación web está desarrollada con ReactJs, utilizando el framework Materialize.</p>
                    <p>Para el desarrollo de la aplicación web, se ha utilizado el framework ReactJs, que nos permite crear componentes reutilizables y que nos permite crear una aplicación web de forma sencilla.</p>
                    <p>Para el diseño de la aplicación web, se ha utilizado el framework Materialize, que nos permite crear una aplicación web con un diseño responsive y con un diseño atractivo.</p>
                    
                    <h2>Componentes</h2>
                    <p>La aplicación web está compuesta por varios componentes, que se encuentran en la carpeta src/components.</p>
                    <p>Los componentes que se han utilizado son:</p>
                    <ul>
                        <li>Master: contiene los componentes que se utilizan en todas las páginas de la aplicación web, como la cabecera, el pie de página, la columna de la izquierda, etc.</li>
                        <li>Exercises: contiene los componentes que se utilizan para mostrar los ejercicios.</li>   
                        <li>Classroom: contiene los componentes que se utilizan para mostrar las clases.</li>
                        <li>Users: contiene los componentes que se utilizan para mostrar los usuarios.</li>
                        <li>Docs: contiene los componentes que se utilizan para mostrar la documentación.</li>
                        <li>Home: contiene los componentes que se utilizan para mostrar la página principal.</li>
                        <li>Auth: contiene los componentes que se utilizan para mostrar la página de autenticación.</li>
                        <li>About: contiene los componentes que se utilizan para mostrar la página de información.</li>
                    </ul>
                    <p>En la siguiente imagen se puede ver la estructura de la aplicación web:</p>
                    <img src="https://i.imgur.com/4ZQ2Z7M.png" alt="Estructura de la aplicación web" />
                    <p>En la siguiente imagen se puede ver la estructura de la carpeta src/components:</p>
                    <img src="https://i.imgur.com/4ZQ2Z7M.png" alt="Estructura de la carpeta src/components" />
                    <p>En la siguiente imagen se puede ver la estructura de la carpeta src/components/Master:</p>
                    <img src="https://i.imgur.com/4ZQ2Z7M.png" alt="Estructura de la carpeta src/components/Master" />
                    <p>En la siguiente imagen se puede ver la estructura de la carpeta src/components/Exercises:</p>
                    <img src="https://i.imgur.com/4ZQ2Z7M.png" alt="Estructura de la carpeta src/components/Exercises" />
                    <p>En la siguiente imagen se puede ver la estructura de la carpeta src/components/Classroom:</p>
                    <img src="https://i.imgur.com/4ZQ2Z7M.png" alt="Estructura de la carpeta src/components/Classroom" />
                    <p>En la siguiente imagen se puede ver la estructura de la carpeta src/components/Users:</p>
                    <img src="https://i.imgur.com/4ZQ2Z7M.png" alt="Estructura de la carpeta src/components/Users" />
                    <p>En la siguiente imagen se puede ver la estructura de la carpeta src/components/Docs:</p>
                    <img src="https://i.imgur.com/4ZQ2Z7M.png" alt="Estructura de la carpeta src/components/Docs" />
                    <p>En la siguiente imagen se puede ver la estructura de la carpeta src/components/Home:</p>
                    <img src="https://i.imgur.com/4ZQ2Z7M.png" alt="Estructura de la carpeta src/components/Home" />
                    <p>En la siguiente imagen se puede ver la estructura de la carpeta src/components/Auth:</p>
                    <img src="https://i.imgur.com/4ZQ2Z7M.png" alt="Estructura de la carpeta src/components/Auth" />
                    <p>En la siguiente imagen se puede ver la estructura de la carpeta src/components/About:</p>
                    <img src="https://i.imgur.com/4ZQ2Z7M.png" alt="Estructura de la carpeta src/components/About" />

                    <h2>Estilos</h2>
                    <p>La aplicación web está compuesta por varios estilos, que se encuentran en la carpeta src/styles.</p>
                    <p> Para el estilo, se ha usado bootstrap con una plantilla con licencia libre llamada SB Admin 2</p>
                    <p> </p>
                </div>
            </div>
            <Pie />
        </div>
    </div>
</Fragment>
  )
}
