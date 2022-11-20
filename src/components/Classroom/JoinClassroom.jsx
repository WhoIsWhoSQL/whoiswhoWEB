import React, { Fragment, useState } from 'react'
//import { redirect } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContextProvider';
import { ClassroomService } from '../../services/classroomService';
//
export function JoinClassroom() {
    const { user } = useAuthContext();

    const [pin, setPin] = useState('');


    const handlechangePin = (e) => {
        setPin(e.target.value);
    }
    const handleJoinClase = (e) => {
        e.preventDefault();
        console.log("pin:" + pin);
        const classroomService = new ClassroomService(user.accessToken);
        classroomService.join(pin).then((result) => {
           // console.log("result:" + JSON.stringify(result));
            return window.location.href = '/#/user/classroom/' + result.classId;
          //  return redirect("/#/classroom/" + result.classId);
        }
        );
    }

    if (!user.isTeacher) {
        return (
            <Fragment>
                <a href="." className="btn btn-primary btn-icon-split" data-toggle="modal" data-target="#newJoinClassModal">
                    <span className="icon text-white-50">
                        <i className="fas fa-flag"></i>
                    </span>
                    <span className="text">Únete a una clase</span>
                </a>

                <div className="modal fade" id="newJoinClassModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">¿Preparado para unirte?</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">Introduce el pin de la clase:</div>
                            <input name='pin' placeholder='PIN...' type='text' onChange={handlechangePin} />
                            <div className="modal-footer">
                                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                <a className="btn btn-primary" href="." onClick={handleJoinClase} data-dismiss="modal">Unirte a la clase</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
    else {
        return <Fragment></Fragment>
    }

}
