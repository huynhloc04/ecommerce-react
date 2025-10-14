import { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(
    JSON.parse(Cookies.get('userInfo') || null)
  );

  const handleLogOut = () => {
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    Cookies.remove('userInfo');
    window.location.reload();
  };

  return (
    <StoreContext.Provider value={{ userInfo, handleLogOut, setUserInfo }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
