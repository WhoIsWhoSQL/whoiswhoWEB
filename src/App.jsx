import React, { Fragment } from 'react';
// import axios from 'axios';
// import { Container, Row, Col } from 'reactstrap';
/* 
import Post from './components/Post';
import {Header} from './components/Header';
import {LeftCard} from './components/LeftCard'; */
import { Login } from './components/Login';
import { Master } from './components/Master/Master';
//import {Home} from './components/Home'
import { useState } from 'react';
//import { useEffect } from 'react';
const App = () => {
  const [user, setUser] = useState(null);

  const changeUser = (user) => {
    setUser(user);
    localStorage.setItem('App.WiWSQL.user', JSON.stringify(user));
  }
  console.log("App user: " + user);

  return (
    <Fragment>
      {(user === null) ?
        <Login changeUser={changeUser} />
        :
        <Master user={user} />
      }

    </Fragment>
  );

/* 
  if(user===null)    return <Login cambiarUsuario={changeUser} />;
  else return <Home user={user} />;

 */}
export default App;