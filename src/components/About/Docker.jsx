import React, { Fragment } from 'react'
import { MasterAbout } from './MasterAbout'

export function Docker() {
    return (
        <MasterAbout >
            <Fragment>
                <h1>Docker</h1>
                <p>Para la realización de este proyecto, se ha utilizado Docker para la creación de contenedores de la aplicación web y de la api.</p>
                <p>Para ello, se ha creado un archivo <b>Dockerfile</b> en cada uno de los proyectos.</p>
                <p>El archivo Dockerfile de la api, se encuentra en la carpeta <b>src</b> del proyecto.</p>
                <p>El archivo Dockerfile de la aplicación web, se encuentra en la carpeta <b>src</b> del proyecto.</p>
                <p>En ambos archivos, se especifica que se debe crear un contenedor a partir de una imagen de node, y que se deben copiar los archivos necesarios para la ejecución de la aplicación.</p>
                <p>Para la creación de la imagen, se ejecuta el comando <b>docker build</b> en la carpeta del proyecto.</p>
                <p>Para la ejecución del contenedor, se ejecuta el comando <b>docker run</b> en la carpeta del proyecto.</p>

                <h2>Creación de la imagen</h2>
                <p>Para la creación de la imagen, se ejecuta el comando <b>docker build</b> en la carpeta del proyecto.</p>
                <p>En el caso de la api, se ejecuta el siguiente comando:</p>
                <p><b>docker build -t api .</b></p>
                <p>En el caso de la aplicación web, se ejecuta el siguiente comando:</p>
                <p><b>docker build -t web .</b></p>


                <h2>Ejecución del contenedor</h2>
                <p>Para la ejecución de la aplicación, se van a desplegar 3 contenedores Docker, 2 realizados por nosotros, y otro con una bbdd MySql.</p>
                <p>Para facilitar la ejecucuión, se ha escrito un script con Docker-compose con el siguiente contenido</p>

                <pre>
                    <code>
                        version: '3'

                        services:
                        <br />&nbsp;&nbsp;db:
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;image: mysql:5.7
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;container_name: db
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;restart: unless-stopped
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;environment:
                        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MYSQL_ROOT_PASSWORD: passroot
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MYSQL_DATABASE: whoiswho
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MYSQL_USER: user
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MYSQL_PASSWORD: passuser
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;ports:
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- "3306:3306"
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;volumes:
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- ./mysqldata/:/var/lib/mysql
                        <br />&nbsp;&nbsp;api:
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;image: bernat13/whoiswhosql_api:latest
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;container_name: wiw_api
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;restart: unless-stopped
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;environment:
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PORT: 3000
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACCESS_TOKEN_SECRET: YOUR_SECRET
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;REFRESH_TOKEN_SECRET: YOUR_SECRET_2
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TOKEN_SERVER_PORT: 4000
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DB_HOST: db
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DB_USER: user
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DB_PASSWORD: passuser
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DB_DATABASE: whoiswho
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DB_PORT: 3306
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DOMAIN_WEB: https://whoiswhosql.cancargol.net
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CERTIFICATE_PATH_CRT: ./src/certs/whoiswhosql.cancargol.net.crt
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CERTIFICATE_PATH_KEY: ./src/certs/whoiswhosql.cancargol.net.key
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;volumes:
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- certs:/usr/src/app/src/certs:ro
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;ports:
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 3000:3000

                        <br />&nbsp;&nbsp;nginx-proxy:
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;image: jwilder/nginx-proxy
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;restart: always
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;ports:
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- "80:80"
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- "443:443"
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;volumes:
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /var/run/docker.sock:/tmp/docker.sock:ro
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- certs:/etc/nginx/certs:ro
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- vhostd:/etc/nginx/vhost.d
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- html:/usr/share/nginx/html
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;labels:
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- com.github.jrcs.letsencrypt_nginx_proxy_companion.nginx_proxy

                        <br /> &nbsp;&nbsp;letsencrypt:
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;image: jrcs/letsencrypt-nginx-proxy-companion
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;restart: always
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;environment:
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- NGINX_PROXY_CONTAINER=nginx-proxy
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;volumes:
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- certs:/etc/nginx/certs:rw
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- vhostd:/etc/nginx/vhost.d
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- html:/usr/share/nginx/html
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /var/run/docker.sock:/var/run/docker.sock:ro



                        <br />&nbsp;&nbsp;web:
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;image: bernat13/whoiswho:latest
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;container_name: wiw_web
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;restart: unless-stopped
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;environment:
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- VIRTUAL_HOST=whoiswhosql.cancargol.net
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- LETSENCRYPT_HOST=whoiswhosql.cancargol.net
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- LETSENCRYPT_EMAIL=bernat@whoiswho.net
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- REACT_APP_BASE_URL_API= https://whoiswhosql.cancargol.net:3000
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- REACT_APP_TOKEN_URL=https://whoisqhosql.cancargol.net:4000
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;expose:
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 80
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;depends_on:
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- nginx-proxy
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- letsencrypt
                        <br />volumes:
                        <br />&nbsp;&nbsp;dbdata:
                        <br />&nbsp;&nbsp;certs:
                        <br />&nbsp;&nbsp;vhostd:
                        <br />&nbsp;&nbsp;html:


                    </code>
                </pre>

            </Fragment>
        </MasterAbout>
    )
}
