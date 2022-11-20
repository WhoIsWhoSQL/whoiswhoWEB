import {createContext, useCallback, useContext, useEffect, useMemo, useState} from 'react';
import PropTypes from 'prop-types';

const MY_AUTH_APP = 'App.WiWSQL.user';

export const AuthContext = createContext();

export default function AuthContextProvider({children}) {
  const [user, setUser] = useState(window.localStorage.getItem(MY_AUTH_APP));


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('App.WiWSQL.user'));
    if (user) {
      setUser(user);
    }
  }, []);

  const login = useCallback(function (_user) {
    window.localStorage.setItem(MY_AUTH_APP, JSON.stringify(_user));
    setUser(_user);
  }, []);

  const logout = useCallback(function () {
    window.localStorage.removeItem(MY_AUTH_APP);
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({
      login,
      logout,
      user
    }),
    [user, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthContextProvider.propTypes = {
  children: PropTypes.object
};

export function useAuthContext() {
  return useContext(AuthContext);
}