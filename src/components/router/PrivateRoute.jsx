import {Navigate, Outlet} from 'react-router-dom';

import { useAuthContext } from '../../context/AuthContextProvider';


export  function PrivateRoute() {
  //  console.log("PrivateRoute");
  const {user} = useAuthContext();

  if (!user) {
    return <Navigate to={'/'} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}