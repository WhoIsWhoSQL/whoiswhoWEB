import {Navigate, Outlet} from 'react-router-dom';

import { useAuthContext } from '../../context/AuthContextProvider';


export  function PublicRoute() {
  const {user} = useAuthContext();

  if (user) {
    return <Navigate to='/user' />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}