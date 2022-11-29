import { Navigate, Outlet } from 'react-router-dom';

import { useAuthContext } from '../../context/AuthContextProvider';


export function PublicRoute() {
  const { user } = useAuthContext();

  if (user) {
    if (user.isGamer) {
      return <Navigate to="/game" />;
    } else {
      return <Navigate to='/user' />;
    }
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}