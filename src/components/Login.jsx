import React, { Fragment } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserService } from '../services/userService'
// import { useEffect } from 'react';
import Mensajes from './Mensajes';
import { useAuthContext } from '../context/AuthContextProvider';
import { BigHead } from '@bigheads/core'
export function Login() {
  const { login } = useAuthContext();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState('');
  //  const [foto, setFoto] = useState('');
  const [error, setError] = useState('');

  // useEffect(() => {
  //    setFoto(Math.floor( Math.random() * (23) + 1));
  // }, []);

  const setAlert = (msg) => {
    setError(msg);
    setTimeout(() => {
      setError('');
    }, 5000);
  }
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    try {
      const userService = new UserService(null);
      const response = await userService.getLogin({ email, password });

      console.log("respuesta de la api:" + JSON.stringify(response));
      login(response);
      setPassword('');
      setEmail('');
    } catch (error) {
      console.log("error en la api")
      setAlert("Usuario o contraseña incorrectos");
    }
  };
  //console.log("foto:"+foto);
  return (
    <Fragment>
      <div >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                  <div className="row">


                    <BigHead className="col-lg-6 d-none d-lg-block" 
                    
                        />

                    {/* {(foto)?<div className="col-lg-6 d-none d-lg-block bg-login-image" style={{backgroundImage: `url(/img/wiw/${foto}.png)` }}></div>
                   :<div className="col-lg-6 d-none d-lg-block bg-login-image" style={{backgroundImage: `url(/img/wiw/1.png)` }}></div>} */}

                    <div className="col-lg-6">
                      <div className="p-5">
                        <div className="text-center">
                          <h1 className="h4 text-gray-900 mb-4">Bienvenido!</h1>
                        </div>
                        {error ? <Mensajes mensaje={error} tipo="danger"></Mensajes> : <Fragment></Fragment>}
                        <form id="loginForm" className="user" onSubmit={handleSubmitLogin}>
                          <div className="form-group">
                            <input type="email" className="form-control form-control-user"
                              id="exampleInputEmail" aria-describedby="emailHelp" onChange={handleChangeEmail}
                              placeholder="Enter Email Address..." value={email} />
                          </div>
                          <div className="form-group">
                            <input type="password" onChange={handleChangePassword} className="form-control form-control-user"
                              id="exampleInputPassword" placeholder="Password" value={password} />
                          </div>
                          <div className="form-group">
                            <div className="custom-control custom-checkbox small">
                              <input type="checkbox" className="custom-control-input" id="customCheck" />
                              <label className="custom-control-label" htmlFor="customCheck">Recuerdame</label>
                            </div>
                          </div>

                          <input type="submit" value="login" className='btn btn-primary btn-user btn-block' />
                        </form>
                        <hr />
                        <div className="text-center">
                          <Link to="register" className='small'>¡Crea una cuenta!</Link>
                        </div>
                        <div className="text-center">
                          <Link to="docs" className='small'>¿Cómo se ha hecho esta web?</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}