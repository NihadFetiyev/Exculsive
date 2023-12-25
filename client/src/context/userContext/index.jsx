import React, { createContext } from 'react';
import useLocalStorageForUSer from '../../hooks/useLocalStorageForUSer';

export const userContext = createContext();

function UserProvider({ children }) {

  const [user, setUser] = useLocalStorageForUSer("user",null)
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  )
}

export default UserProvider