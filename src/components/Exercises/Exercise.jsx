import React, { Fragment } from 'react'
import { ExerciseService } from '../../services/exerciseService';




export function Exercise({user, ex,handleCrearPartida }) {

const handlePracticar =((ExerciseId, e) => {
    //console.log("nueva partida con ejercicio", ExerciseId);
    const exerciseService = new ExerciseService(user.accessToken);
    exerciseService.startExercise(ExerciseId).then((ejercicio) => {
       console.log("gameeeeeeee:", JSON.stringify(ejercicio));
        return window.location.href = '/#/game/' + ejercicio.id;
    });
});
  return (
    <Fragment>
      <div className="col-lg-6" key={ex.exerciseId} >
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">{ex.name}</h6>
          </div>
          <div className="card-body">
            <p>         {ex.description}
              <img src={ex.img_tableDiagram} alt="imagen" width={'50%'} />
            </p>

        {handleCrearPartida?    <button className="btn btn-primary btn-icon-split" onClick={(e) => handleCrearPartida(ex.exerciseId, e)} value={ex.exerciseId} >
              <span className="icon text-white-50" value={ex.exerciseId}>
                <i value={ex.exerciseId} className="fas fa-flag" ></i>
              </span>
              <span className="text" value={ex.exerciseId} >Crea una nueva partida</span>
            </button>:<Fragment>  </Fragment>}
        {!user.isTeacher?<Fragment>

          <button className="btn btn-primary btn-icon-split" onClick={(e) => handlePracticar(ex.exerciseId, e)} value={ex.exerciseId} >
              <span className="icon text-white-50" value={ex.ExerciseId}>
                <i value={ex.ExerciseId} className="fas fa-flag" ></i>
              </span>
              <span className="text" value={ex.ExerciseId} >Practicar</span>
            </button>

        </Fragment>:<Fragment>
          
          
          </Fragment>}
          </div>
        </div>
      </div>
    </Fragment>
  )
}
