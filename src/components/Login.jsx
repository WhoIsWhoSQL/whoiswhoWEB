import React, { Fragment } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginService } from '../services/userService'



export function Login({ changeUser }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState('');

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    // console.log(email, password);

    try {

      const response = await loginService({ email, password });
      // console.log("respuesta de la api:" + JSON.stringify(response));
      changeUser(response);
      setPassword('');
      setEmail('');
    } catch (error) {
      console.log(error)
    }
  };
  const foto = Math.floor( Math.random() * (23) + 1);
console.log("foto:"+foto);
  return (
    <Fragment>
      <div >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                  <div className="row">
                    <div className="col-lg-6 d-none d-lg-block bg-login-image" style={{backgroundImage: `url(/img/wiw/${foto}.png)` }}></div>
                    <div className="col-lg-6">
                      <div className="p-5">
                        <div className="text-center">
                          <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                        </div>
                        <form className="user" onSubmit={handleSubmitLogin}>
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
                          <a href="index.html" onClick={handleSubmitLogin} className="btn btn-primary btn-user btn-block">
                            login
                          </a>
                          <input type="submit" value="login" className='invisible' />
                        </form>
                        <hr />
                        {/* <div className="text-center">
                          <a className="small" href="forgot-password.html">¿No recuerdas tu contraseña?</a>
                        </div> */}
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

