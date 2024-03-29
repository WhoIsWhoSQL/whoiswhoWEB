import React, { Fragment, useEffect, useState } from 'react'
import { CharacterService } from '../../services/characterService';
import { PlayMoveService } from '../../services/playmoveService';
import uuid from 'react-uuid';
import { useAuthContext } from '../../context/AuthContextProvider';
import { Faces } from './Faces';

export function ListCharacters({ game }) {
  const { user } = useAuthContext();
  const [characters, setCharacters] = useState();
  const [playmoves, setPlayMoves] = useState();
  const [lastMove, setLastMoves] = useState('');
  const [query, setQuery] = useState();
  const [refrescar, setRefrescar] = useState(0);
  const [numDeletes, setNumDeletes] = useState(0);
  useEffect(() => {
    try {
      //      console.log("pin:" + game);
      if (game === undefined) {

      } else {
        if (game.pin === undefined) {
          //console.log("no hay pin");
        } else {
          // console.log("refrescarPersonajes: pin " + game.pin + "user:" + user);
          const characterService = new CharacterService(user.accessToken);
          characterService.getCharacters(game.pin).then((ListCharacters) => {
            //  console.log("ListCharactrs:" + ListCharacters);
            setCharacters(ListCharacters);
          });
          const playmoveService = new PlayMoveService(user.accessToken);
          playmoveService.getPlayMoves(game.pin).then((playmoveList) => {
            setPlayMoves(playmoveList);
            //   console.log("playmoves:" + JSON.stringify(playmoveList));
          });
        }
        //console.log("start_date:" + game.start_date);

      }
    } catch (error) {
      //console.log("error en la api", error)
    }
  }, [game, user, refrescar]);

  useEffect(() => {
    // console.log("se han regrescado los movimientos")
    if (playmoves)
      setLastMoves(playmoves[0]);

    // console.log("lastMove:" + JSON.stringify(playmoves));
    if (playmoves) {
      const deletes = playmoves.filter((playmove) => contieneDelete(playmove.query));
      setNumDeletes(deletes.length);
      // console.log("deletes:" + JSON.stringify(deletes));
    }
  }, [playmoves])

  useEffect(() => {
    // console.log("se han regrescado los movimientos")
    setQuery(lastMove.query);
  }, [lastMove])
  const contieneDelete = ((query) => {
    return (query.toLowerCase().includes("delete"));

  });
  const handlechanguequery = ((e) => {
    setQuery(e.target.value);
  });

  const handleSubmitMove = (() => {
    //  console.log("enviar movimiento conI query:" + query);
    const playmoveService = new PlayMoveService(user.accessToken);
    playmoveService.setPlayMoves(game.pin, query).then((result) => {
      //  console.log("result:" + JSON.stringify(result));
      setRefrescar(refrescar + 1);
    });
  });


  return (
    <Fragment>
      {(characters) ? <Fragment>
        <div className='row'>
          {characters.map((character) => (
            <Fragment key={character.Id}>
              <div className="col-lg-1 p-1">
                <div className="card shadow mb-1">
                  <div className="card-body p-1">
                    <p className="m-0 font-weight-bold text-primary">{character.nombre}</p>
                    <Faces character={character} alt='imagen' width={'100%'} />
                    {/* <img src={character.img_picture} alt='imagen' width={'100%'} /> */}

                  </div>
                </div>
              </div>


            </Fragment>))}
        </div>

        <Fragment>
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Tu jugada...</h6>
            </div>
            <div className="card-body">

              {(characters.length > 1) ? <p className="m-0  mb-4">Tu última consulta ha sido:<span className='text-primary'>{(lastMove) ? lastMove.query : <Fragment></Fragment>}</span>.
                Llevas :<span className='text-primary'>{(playmoves) ? playmoves.length : <Fragment></Fragment>} </span>intentos

              </p> : <Fragment>
                <h2 className="m-0 text-primary mb-4"> ¡HAS ACERTADO!</h2>
                <h3>El personaje oculto era {characters[0].nombre}</h3>
                <Faces character={characters[0]} alt='imagen' width={'20%'} />
              </Fragment>}

              <hr />
              {(playmoves) ? playmoves.map((play) => (<Fragment key={uuid()}>
                <p><span className={(play.result < -0) ? 'text-danger' : (play.result === 0) ? 'text-warning' : 'text-primary'}>{play.error}</span> {play.query}  </p>
              </Fragment>)) : <Fragment></Fragment>}

              {(numDeletes > 0) ? <Fragment>
                <div className="row">
                  <div className="col-lg-12">
                    <p className="m-0 font-weight-bold text-primary">¿Estás intentando un delete?</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/i_cVJgIz_Cs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>





              </Fragment> : <Fragment>
                {(characters.length > 1) ? <Fragment>
                  <div className="row">
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
              </Fragment>}

            </div>
          </div>
        </Fragment>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <div className='row'>
              <div className='col-lg-8'>  <h6 className="m-0 font-weight-bold text-primary">Tabla resultado</h6></div>
              <div className='col-lg-4'>

                <a href="." className="btn btn-primary btn-icon-split" data-toggle="modal" data-target="#diagramModal">
                  <span className="icon text-white-50">
                    <i className="fas fa-flag"></i>
                  </span>
                  <span className="text"> Algunas pistas</span>
                </a>

                <div className="modal fade" id="diagramModal"  tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                  aria-hidden="true">
                  <div className="modal-dialog modalejercicios"  role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Diagramas del ejercicio</h5>
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                         <img src="/img/wiw/er1.png" alt="imagen" width="100%" />
                      </div>

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
                    Object.keys(characters[0]).map((key, index) => (
                      (index === 0) ? <Fragment key={uuid()}></Fragment> : <th key={uuid()}>{key}
                      </th>
                    ))
                  }
                  </tr>

                </thead>
                <tfoot>
                  <tr>{
                    Object.keys(characters[0]).map((key, index) => (
                      (index === 0) ? <Fragment key={uuid()}></Fragment> : <th key={uuid()}>{key}
                      </th>
                    ))
                  }
                  </tr>
                </tfoot>
                <tbody>

                  {characters.map((item) => (

                    <tr key={uuid()}>{
                      Object.keys(item).map((key, index) => (
                        (index === 0) ? <Fragment key={uuid()}></Fragment> : <td key={uuid()}>{item[key]}
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
