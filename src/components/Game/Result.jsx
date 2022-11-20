import React, { Fragment, useEffect, useState } from 'react'
import { useAuthContext } from '../../context/AuthContextProvider';
import { GameService } from '../../services/gameService ';
import { PreGame } from './PreGame';
import { Score } from './Score';

export function Result({ game ,empezarPartida,acabarPartida}) {
  const { user } = useAuthContext();
  const [players, setPlayers] = useState([]);
  const [refrescar, setRefrescar] = useState(0);
  const [start, setStart] = useState(true);
  useEffect(() => {
    const gameService = new GameService(user.accessToken);
    gameService.getResults(game.gameId).then((playerList) => {
      //  console.log(JSON.stringify(gameList));
      if (playerList.length > 0) {
        setPlayers(playerList);
      }
    });
    (game.end_date) ? setStart(false):<Fragment></Fragment>;
  }, [game, user, refrescar]);
  console.log("Result");
  console.log("players:" + JSON.stringify(players));


  setTimeout(() => {
    if (start) {
      setRefrescar(refrescar + 1);
    }
  }, 5000);

  const handleStart = () => {
    setStart(true);
  };
  const handleStop = () => {
    setStart(false);
  };

 const handleAcabarPartida = () => {
    setStart(false); 
  acabarPartida();
  };

  return <Fragment>
    <div>
     
      <div className='row mb-3'>
        <div className='col-lg-11'>
        <h1 className='primary' > PIN: {game.pin}</h1> </div>
        <div className='col-lg-1'>
          {(!start) ? <button onClick={handleStart} className="btn btn-primary btn-user btn-block"><i className="fas fa-play"></i></button> :
            <button onClick={handleStop} className="btn btn-danger btn-user btn-block"><i className="fas fa-stop"></i></button>}


        </div>

      </div>
      <h3>Número de jugadores:{players.length}</h3>
      
      {(game.start_date === null) ? <PreGame players={players} empezarPartida={empezarPartida} /> : <Score players={players} acabarPartida={handleAcabarPartida} end={start} />}

      <p></p>
    </div>
  </Fragment>
}
