import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

const MY_AUTH_APP = 'App.WiWSQL.user';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(window.localStorage.getItem(MY_AUTH_APP));


  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('App.WiWSQL.user'));
    if (item) {
      const now = new Date()
      if (now.getTime() > item.expiry) {
        localStorage.removeItem(MY_AUTH_APP)
        return null;
      }

      const user = JSON.parse(item.value);
      if (user) {

        setUser(user);
      }
    }
  }, []);

  const login = useCallback(function (_user) {
    var minutos = 60*24*7;
    if(_user.isGamer){
      minutos = 10;
    }
    const item = {
      value: JSON.stringify(_user),
      expiry: Date.now() + 1000 * 60 * minutos,
    }
    window.localStorage.setItem(MY_AUTH_APP, JSON.stringify(item));
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