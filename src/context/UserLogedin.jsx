import React, { createContext, useState } from 'react'

export const UserLogedinContext = createContext()

const UserLogedin = ({children}) => {
    const [user, setUser] = useState(false)
  return (
    <UserLogedinContext.Provider value={{ user, setUser }}>
      {children}
    </UserLogedinContext.Provider>
  )
}

export default UserLogedin