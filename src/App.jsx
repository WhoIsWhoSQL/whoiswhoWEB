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
import { useState, useEffect } from 'react';
//import { useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import { Docs } from './components/About/Docs';
import { Register } from './components/Register';
import { NotFound } from './components/NotFound';
import { Cicd } from './components/About/Cicd';
import { Bbdd } from './components/About/Bbdd';
import { Docker } from './components/About/Docker';
import { Web } from './components/About/Web';
import { Api } from './components/About/Api';

const App = () => {
  const [user, setUser] = useState(null);



  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('App.WiWSQL.user'));
    if (user) {
      setUser(user);
    }
  }, []);

  const changeUser = (user) => {
    console.log("changeUser", user);
    setUser(user);
    localStorage.setItem('App.WiWSQL.user', JSON.stringify(user));
  }
  // console.log("App user: " + user);

  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={
            (user === null) ?
              <Login changeUser={changeUser} />
              :
              <Master user={user} pag="Home" />
          } />
          <Route path="/register" element={<Register changeUser={changeUser} />} />
          <Route path="/docs" element={<Docs user={user} />} />
          <Route path="/classroom/:id" element={
            (user === null) ?
              <Login changeUser={changeUser} />
              :
              <Master user={user} pag="Classroom" />
          } />
          <Route path="/mygame" element={
            (user === null) ?
              <Login changeUser={changeUser} />
              :
              <Master user={user} pag="MyGame" />
          } />

          <Route path="/exercises" element={
            (user === null) ?
              <Login changeUser={changeUser} />
              :
              <Master user={user} pag="ListExercises" />
          } />

          <Route path="/docs/api" element={<Api user={user} />} />
          <Route path="/docs/web" element={<Web user={user} />} />
          <Route path="/docs/docker" element={<Docker user={user} />} />
          <Route path="/docs/bbdd" element={<Bbdd user={user} />} />
          <Route path="/docs/cicd" element={<Cicd user={user} />} />
          <Route path="/game/:id" element={
            (user === null) ?
              <Login changeUser={changeUser} />
              :
              <Master user={user} pag="Game" />
          } />


          <Route path="/result/:id" element={
            (user === null) ?
              <Login changeUser={changeUser} />
              :
              <Master user={user} pag="Result" />
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </Router>
    </Fragment>
  );

/* 
  if(user===null)    return <Login cambiarUsuario={changeUser} />;
  else return <Home user={user} />;

 */}
export default App;