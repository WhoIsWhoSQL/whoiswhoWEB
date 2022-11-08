import React, { Fragment } from 'react';
import { Login } from './components/Login';
import { Master } from './components/Master/Master';
import { useState, useEffect } from 'react';


const App = () => {
  const [user, setUser] = useState(null);



  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('App.WiWSQL.user'));
    if (user) {
      setUser(user);
    }
  }, []);

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