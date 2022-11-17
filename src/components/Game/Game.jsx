import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GameService } from '../../services/gameService ';
import { ListCharacters } from './ListCharacters';
export function Game({ user }) {
  const { id } = useParams();


  const [game, setGame] = useState([]);
  useEffect(() => {
    const gameService = new GameService(user.accessToken);
    gameService.findGame(id).then((gameList) => {
    //  console.log(JSON.stringify(gameList));
      setGame(gameList);
    });

  }, [id,user]);



  

  return (
    <Fragment>
      {(game) ? <Fragment>
        <h1>Partida {game.pin}</h1>
        

        {(!user.isTeacher) ? <ListCharacters user={user} game={game} />: <Fragment></Fragment>}
      </Fragment>
        : <Fragment>
        </Fragment>
      }
    </Fragment>
  )
}
