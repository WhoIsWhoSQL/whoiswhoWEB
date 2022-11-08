import React, { Fragment } from 'react';
import { useState } from 'react';
import { loginService  } from '../services/userService'



export function Login({changeUser}) {
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
    console.log(email, password);

    try {
      
    const response = await loginService({email,password});
    console.log("respuesta de la api:" + JSON.stringify(response));
    changeUser(response);
    setPassword('');
    setEmail('');
  } catch (error) {
   console.log(error)   
  }
  };
  return (
    <Fragment>
      <div >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                  <div className="row">
                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
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
                              <label className="custom-control-label" htmlFor="customCheck">Remember
                                Me</label>
                            </div>
                          </div>
                          <a href="index.html" onClick={handleSubmitLogin} className="btn btn-primary btn-user btn-block">
                            login
                          </a>
                          <input type="submit" value="login" className='invisible' />
                        </form>
                        <hr />
                        <div className="text-center">
                          <a className="small" href="forgot-password.html">Forgot Password?</a>
                        </div>
                        <div className="text-center">
                          <a className="small" href="register.html">Create an Account!</a>
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

