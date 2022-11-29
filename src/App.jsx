import React, { Fragment } from 'react';
// import axios from 'axios';
// import { Container, Row, Col } from 'reactstrap';
/* 
import Post from './components/Post';
import {Header} from './components/Header';
import {LeftCard} from './components/LeftCard'; */
import { Login } from './components/Login';
//import { useEffect } from 'react';
import { Routes, Route, HashRouter as Router } from 'react-router-dom'
import { Docs } from './components/About/Docs';
import { Register } from './components/Register';
import { NotFound } from './components/NotFound';
import { Cicd } from './components/About/Cicd';
import { Bbdd } from './components/About/Bbdd';
import { Docker } from './components/About/Docker';
import { Web } from './components/About/Web';
import { Api } from './components/About/Api';
import { Classroom } from './components/Classroom/Classroom';
import { Game } from './components/Game/Game';
import { Result } from './components/Game/Result';
import { ListExercises } from './components/Exercises/ListExercises';
import { Home } from './components/Home/Home';
import AuthContextProvider from './context/AuthContextProvider';
import { PrivateRoute } from './components/router/PrivateRoute';
import { MyGame } from './components/Game/MyGame';
import { PublicRoute } from './components/router/PublicRoute';
import About from './components/About/About';
import { StatisticStudents } from './components/Statistics/StatisticStudents';
import { StatisticGames } from './components/Statistics/StatisticGames';
import { StatisticClassroom } from './components/Statistics/StatisticClassroom';
import { GameRoute } from './components/router/GameRoute';


const App = () => {

  return (
    <Fragment>
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route path='/user' element={<PrivateRoute />}>
              <Route index element={<Home />} />
              <Route path='/user/classroom/:id' element={<Classroom />} />
              <Route path='/user/game/:id' element={<Game />} />
              <Route path='/user/results/:id' element={<Result />} />
              <Route path='/user/exercises' element={<ListExercises />} />
              <Route path='/user/mygame' element={<MyGame />} />
              <Route path="/user/docs/api" element={<Api />} />
              <Route path="/user/docs/web" element={<Web />} />
              <Route path="/user/docs/docker" element={<Docker />} />
              <Route path="/user/docs/bbdd" element={<Bbdd />} />
              <Route path="/user/docs/cicd" element={<Cicd />} />
              <Route path="/user/about" element={<About />} />
              <Route path="/user/statistics/student/:id" element={<StatisticStudents />} />
              <Route path="/user/statistics/games/:id" element={<StatisticGames />} />
              <Route path="/user/statistics/classroom/:id" element={<StatisticClassroom />} />
            </Route>
            <Route path='/game' element={<GameRoute />}>
              <Route path='/game/:id' element={<Game />} />

            </Route>
            <Route path="/" element={<PublicRoute />}>
              <Route index element={<Login />} />
              <Route path="/docs/api" element={<Api />} />
              <Route path="/docs/web" element={<Web />} />
              <Route path="/docs/docker" element={<Docker />} />
              <Route path="/docs/bbdd" element={<Bbdd />} />
              <Route path="/docs/cicd" element={<Cicd />} />
              <Route path="/register" element={<Register />} />
              <Route path="/docs" element={<Docs />} />

            </Route>


            <Route path="*" element={<NotFound />} />
          </Routes>

        </Router>
      </AuthContextProvider>
    </Fragment>
  );

/* 
  if(user===null)    return <Login cambiarUsuario={changeUser} />;
  else return <Home user={user} />;

 */}
export default App;