import React, { Fragment, useEffect, useState } from 'react'
import { CharacterService } from '../../services/characterService';
import { PlayMoveService } from '../../services/playmoveService';
import uuid from 'react-uuid';

export function ListCharacters({ user, pin }) {
  const [characters, setCharacters] = useState();
  const [playmoves, setPlayMoves] = useState();
  const [lastMove, setLastMoves] = useState('');
  const [query, setQuery] = useState();

  const refrescarPersonajes = (() => {

    const characterService = new CharacterService(user.accessToken);
    characterService.getCharacters(pin).then((ListCharacters) => {
      //   console.log("ListCharactrs:" + ListCharacters);
      setCharacters(ListCharacters);
    });
    const playmoveService = new PlayMoveService(user.accessToken);
    playmoveService.getPlayMoves(pin).then((playmoveList) => {
      setPlayMoves(playmoveList);
      console.log("playmoves:" + JSON.stringify(playmoveList));
    });

  })
  useEffect(() => {
    try {
      console.log("pin:" + pin);
      if (pin === undefined) {

      } else {
        refrescarPersonajes();
      }
    } catch (error) {
      console.log("error en la api")
    }
  }, [pin, user]);

  useEffect(() => {
    console.log("se han regrescado los movimientos")
    if (playmoves)
      setLastMoves(playmoves[0]);
    setQuery(lastMove.query);
  }, [playmoves])

  useEffect(() => {
    console.log("se han regrescado los movimientos")
    setQuery(lastMove.query);
  }, [lastMove])

  const handlechanguequery = ((e) => {
    setQuery(e.target.value);
  });

  const handleSubmitMove = (() => {
    console.log("enviar movimiento conI query:" + query);
    const playmoveService = new PlayMoveService(user.accessToken);
    playmoveService.setPlayMoves(pin, query).then((result) => {
      console.log("result:" + JSON.stringify(result));
      refrescarPersonajes();
    });
  });


  return (
    <Fragment>
      {(characters) ? <Fragment>
        <div className='row'>
          {characters.map((character) => (
            <Fragment key={character.Id}>
              <div className="col-lg-1">
                <div className="card shadow mb-4">
                  <div className="card-body p-2">
                    <p className="m-0 font-weight-bold text-primary">{character.name}</p>

                    <img src={character.img_picture} alt='imagen' width={'100%'} />

                  </div>
                </div>
              </div>


            </Fragment>))}
        </div>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Tu jugada...</h6>
          </div>
          <div className="card-body">

            {(characters.length > 1) ? <p className="m-0  mb-4">Tu última consulta ha sido:<span className='text-primary'>{(lastMove) ? lastMove.query : <Fragment></Fragment>}</span>.
              Llevas :<span className='text-primary'>{(playmoves) ? playmoves.length : <Fragment></Fragment>} </span>intentos

            </p> : <Fragment>
              <h2 className="m-0 text-primary mb-4"> ¡HAS ACERTADO!</h2>
              <h3>El personaje oculto era {characters[0].name}</h3>
              <img src={characters[0].img_picture} alt='imagen' width={'10%'} />
            </Fragment>}

            <hr />
            {(playmoves) ? playmoves.map((play) => (<Fragment key={uuid()}>
              <p><span className={(play.result < -0) ? 'text-danger' : (play.result === 0) ? 'text-warning' : 'text-primary'}>{play.error}</span> {play.query}  </p>
            </Fragment>)) : <Fragment></Fragment>}


            {(characters.length > 1) ? <Fragment>       <div className="row">
              <div className="col-lg-12">
                <p className="m-0 font-weight-bold text-primary">Escribe tu próxima consulta</p>

              </div>
            </div>

              <div className="row">
                <div className="col-lg-10">
                  <textarea type="text" className="form-control" placeholder="Query...." onChange={handlechanguequery} value={query} ></textarea>
                </div>
                <div className="col-lg-2">
                  <input type="submit" className='btn btn-primary btn-user btn-block' value="enviar" onClick={handleSubmitMove} />
                </div>

              </div></Fragment> : <Fragment></Fragment>}

          </div>
        </div>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <div className='row'>
            <div className='col-lg-8'>  <h6 className="m-0 font-weight-bold text-primary">Tabla resultado</h6></div>
              <div className='col-lg-4'>

              <a href="." className="btn btn-primary btn-icon-split" data-toggle="modal" data-target="#diagramModal">
                    <span className="icon text-white-50">
                        <i className="fas fa-flag"></i>
                    </span>
                    <span className="text">Ver Diagramas</span>
                </a>

                <div className="modal fade" id="diagramModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Diagramas del ejercicio</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body"></div>
                          
                        </div>
                    </div>
                </div>



              </div>
            </div>
          
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered" id="dataTable" width="100%" >
                <thead>
                  <tr>{
                    Object.keys(characters[0]).map((key) => (
                      <th key={uuid()}>{key}
                      </th>
                    ))
                  }
                  </tr>

                </thead>
                <tfoot>
                  <tr>{
                    Object.keys(characters[0]).map((key) => (
                      <th key={uuid()}>{key}
                      </th>
                    ))
                  }
                  </tr>
                </tfoot>
                <tbody>

                  {characters.map((item) => (

                    <tr key={uuid()}>{
                      Object.keys(item).map((key) => (
                        <td key={uuid()}>{item[key]}
                        </td>
                      ))
                    }
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
          </div>
        </div>

      </Fragment> : <Fragment>cargando...</Fragment>}
    </Fragment>
  )
}
