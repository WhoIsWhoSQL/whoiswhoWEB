import React, { Fragment,  useState } from 'react'
import { useAuthContext } from '../../context/AuthContextProvider';
import { ClassroomService } from '../../services/classroomService';

export function NewClassroom({ obtenerClases }) {
    const { user } = useAuthContext();

    const [name, setName] = useState('');
    //   const [Exercises, setExercises] = useState([]);


    const handleChangeName = (e) => {
        setName(e.target.value);
    }
    const handleNuevaClase = (e) => {

        // console.log("nueva partida");
        const classroomService = new ClassroomService(user.accessToken);
        classroomService.create(name);
        obtenerClases(user);
    }
    if (user.isTeacher) {

        // console.log("Exercises:" + JSON.stringify(Exercises));

        return (
            <Fragment>
                <a href="." className="btn btn-primary btn-icon-split" data-toggle="modal" data-target="#newClassModal">
                    <span className="icon text-white-50">
                        <i className="fas fa-flag"></i>
                    </span>
                    <span className="text">Crea una nueva clase</span>
                </a>

                <div className="modal fade" id="newClassModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">¿Preparado para crear una clase?</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">

                                <div className="form-group row">
                                    <div className="col-sm-12 mb-12 mb-sm-12">
                                        <input type="text" className="form-control form-control-user" id="exampleFirstName" value={name} onChange={handleChangeName} placeholder="Class name" />
                                    </div>
                                 
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                <button className="btn btn-primary"  onClick={handleNuevaClase} data-dismiss="modal">Crear Partida</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>




        )
    }
    else {
        <Fragment></Fragment>
    }
}
