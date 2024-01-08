import React, { createContext, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import useLocalStorage from '../../hooks/useLocalStorage'

export const userContext = createContext()

function UserProvider({ children }) {
  const [token, setToken] = useLocalStorage("user", null)
  const [decodedToken, setDecodedToken] = useState(token ? jwtDecode(token) : null)

  function removeToken() {
    setToken(null)
    setDecodedToken(null)
    localStorage.removeItem("user")
  }
  return (
    <userContext.Provider value={{ token, setToken, decodedToken, setDecodedToken, removeToken }}>
      {children}
    </userContext.Provider>
  )
}

export default UserProvider





















// import React, { createContext } from 'react';
// import useLocalStorageForUSer from '../../hooks/useLocalStorageForUSer';

// export const userContext = createContext();

// function UserProvider({ children }) {

//   const [user, setUser] = useLocalStorageForUSer("user",null)
//   return (
//     <userContext.Provider value={{ user, setUser }}>
//       {children}
//     </userContext.Provider>
//   )
// }

// export default UserProvider