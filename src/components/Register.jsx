import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContextProvider';
import { UserService } from '../services/userService';
import Mensajes from './Mensajes';
import { BigHead } from '@bigheads/core'

export function Register() {
    const { login } = useAuthContext();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
   // const [foto, setFoto] = useState('');
    const [isTeacher, setIsTeacher] = useState(false);
    const [error, setError] = useState('');

    // useEffect(() => {
    //     setFoto(Math.floor(Math.random() * (23) + 1));
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

    const handleChangePassword2 = (e) => {
        setPassword2(e.target.value);
    };

    const handleChangeIsTeacher = (e) => {
        if (e.target.checked) {
            setIsTeacher(1);
        }
        else {
            setIsTeacher(0);
        };
    };
    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleSubmitRegister = async (e) => {
        e.preventDefault();
        console.log("handleSubmitRegister");
        try {
            console.log("name:" + name);
            console.log("email:" + email);
            console.log("password:" + password);
            console.log("password2:" + password2);
            console.log("isTeacher:" + isTeacher);

            if (password === password2) {
                if (name === '') {
                    setAlert('Debes rellenar el nombre');
                }
                else if (email === '') {
                    setAlert('Debes rellenar el email');
                } else if (password === '') {
                    setAlert('Debes rellenar el password');
                }
                else if (password2 === '') {
                    setAlert('Debes rellenar el password2');
                } else {
                    const userService = new UserService(null);
                    const response = await userService.createUser({ name, email, password, isTeacher });
                    console.log("respuesta de la api:" + JSON.stringify(response));
                    const user = await userService.getLogin({ email, password });
                    login(user);
                  //  return <Navigate to="/user" />
                    return window.location.href = '/';
                }
            }
            else {
                setAlert("Contraseñas no coinciden");
            }
        } catch (error) {
            console.log(error)
            setAlert("Error al crear usuario");
        }
    };
    return (
        <Fragment>
            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    <div className="row">
                    <BigHead className="col-lg-5 d-none d-lg-block bg-login-image" />

                        {/* <div className="col-lg-5 d-none d-lg-block bg-register-image" style={{ backgroundImage: `url(/img/wiw/${foto}.png)` }}></div> */}
                        <div className="col-lg-7">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">¡Crea una cuenta!</h1>
                                </div>

                                {error ? <Mensajes mensaje={error} tipo="danger"></Mensajes> : <Fragment></Fragment>}
                                <form className="user" onSubmit={handleSubmitRegister}>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input type="text" className="form-control form-control-user" id="exampleFirstName" value={name} onChange={handleChangeName} placeholder="Name" />
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <div className="custom-control custom-checkbox form-control-lg">
                                                <input type="checkbox" className="custom-control-input" id="customCheck" onChange={handleChangeIsTeacher} />
                                                <label className="custom-control-label" htmlFor="customCheck"  >¿Eres Profesor?</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                            placeholder="Email Address" value={email} onChange={handleChangeEmail} />
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input type="password" className="form-control form-control-user"
                                                id="exampleInputPassword" value={password} placeholder="Password" onChange={handleChangePassword} />
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="password" className="form-control form-control-user"
                                                id="exampleRepeatPassword" placeholder="Repeat Password" value={password2} onChange={handleChangePassword2} />
                                        </div>
                                    </div>
                                    <input type="submit" value="¡Registrate!" className='btn btn-primary btn-user btn-block' />
                                </form>
                                <hr />
                                <div className="text-center">
                                    <Link to="/" className="small">¿Ya tienes una cuenta? </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </Fragment >
    )
}
