import React, { Fragment } from 'react'
import { MasterAbout } from './MasterAbout'

export function Cicd() {
  return (
    <MasterAbout >
      <Fragment>

        <h1>Continuos Integration, Continuos Deployment</h1>

        <h2>Integración continua en Github con GitHub Actions</h2>
        <p>El código tanto de la api como del frontend están subidos a repositorios en github.</p>
        <p>Configurando adecuadamente github Actions y con el Dockerfile adecuado, podemos automatizar la subida de nuestra app web al repositorio de Docker</p>
        <p>Para ello, creamos un archivo llamado <b>docker-publish.yml</b> en la carpeta <b>.github/workflows</b> de nuestro repositorio de github.</p>
        <p>En este archivo, indicamos que queremos que se ejecute cada vez que se haga un pull request en la rama master.</p>
        <p>En el archivo, se ejecutan los siguientes comandos:</p>



        <h2>Coninuo Deployment</h2>
        <p>Para el despliegue de la aplicación, hemos utilizado Oracle Cloud, con una máquina virtual de Ubuntu 20.04</p>
        <p>En esta máquina, hemos instalado Docker y Docker Compose</p>
        <p>Para el despliegue, hemos creado un archivo llamado <b>docker-compose.yml</b> en la carpeta raíz del proyecto.</p>
        <p>En este archivo, se especifica que se van a desplegar dos contenedores, uno para la api y otro para el frontend y otro para la bbdd con MySQL</p>

        <p>Además hemos desplegado un contenedor LetsEncript y otro de nginx-proxy para poder crear los certificados digitales y funcione el HTTPS</p>
        <p> Además, hemos configurado un 4 contenedor llamado WhatchTower, nos actualizará los contenedores descargados de Docker Hub más actualizados cada 5 minutos si hay alguna novedad publicada.</p>

        <h2>Integración Continua, Despliegue Continuo.</h2>
        <p> De esta forma, cuando aprobemos un pull request en Github, GitHub Actions, se encargará de compilar, pasar los test y preparar mi contenedor lanzando el docker build.</p>
        <p> Además, como le hemos dado acceso a GitHub a nuestra cuenta de DockerHub, nos publicará en Docker Hub la nueva imagen con la etiquieta latest.</p>
        <p> Por último, WatchTower se encargará de actualizar el contenedor de la api y el frontend con la nueva imagen de Docker Hub automaticamente en nuestro servidor en OracleCloud.</p>
        <p> De esta forma, cada vez que hagamos un pull request en Github, se actualizará la imagen de Docker Hub y se actualizará el contenedor en nuestro servidor en OracleCloud.</p>
        <p> De esta forma, tenemos una aplicación web que se actualiza automáticamente cada vez que hacemos un pull request en Github.</p>


      </Fragment>
    </MasterAbout>
  )
}
