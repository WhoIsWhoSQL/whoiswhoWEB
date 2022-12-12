import React, { Fragment, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContextProvider';
import { GameService } from '../../services/gameService ';
import { Master } from '../Master/Master';
import { ListCharacters } from './ListCharacters';
import { Result } from './Result';
export function Game() {
  const { user } = useAuthContext();

  const { id } = useParams();


  const [game, setGame] = useState([]);
  const [recargar, setRecargar] = useState(0);
  const [start, setStart] = useState(false);
  useEffect(() => {
    const gameService = new GameService(user.accessToken);
    gameService.findGame(id).then((gameList) => {
      setGame(gameList);


      //   console.log("game",gameList);
      if ((!(gameList === undefined) && gameList.start_date == null)) {
      } else {
        setStart(true);
      }
    });
  }, [id, user, recargar]);



  setTimeout(() => {
    //console.log("mirar valor de start:" + start);
    if (!start) {
      setRecargar(recargar + 1);
      //  console.log("recargar:" + recargar);
    }
  }, 5000);

  const empezarPartida = () => {
    const gameService = new GameService(user.accessToken);

    gameService.updateStart(id,).then((gameList) => {
      setGame(gameList);
    });
  }


  const acabarPartida = () => {

    const gameService = new GameService(user.accessToken);
    gameService.updateStop(id).then((gameList) => {
      // setGame(gameList);
    });
  }

  return (
    <Master >
      <Fragment>
        {(game) ? <Fragment>



          {(!user.isTeacher) ?
            <Fragment>
              {(!start) ? <Fragment>
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Esperando...</h6>
                  </div>
                  <div className="card-body"><h2>Esperando que empiece la partida</h2>
                  </div>
                </div></Fragment> :
                <ListCharacters game={game} />}
            </Fragment> : <Fragment>
              <Result game={game} empezarPartida={empezarPartida} acabarPartida={acabarPartida} />
              <Link to={`/user/statistics/games/${game.gameId}`} className="btn btn-primary btn-icon-split">
                <span className="icon text-white-50">
                  <i className="fas fa-play"></i>
                </span>
                <span className="text">Ver Estadísticas Partida  </span>
              </Link>
            </Fragment>}
        </Fragment>
          : <Fragment>
          </Fragment>
        }
      </Fragment>
    </Master>
  )
}
