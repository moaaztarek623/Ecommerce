import React, { useEffect, useState } from 'react'

const ProtectedRouteHook = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const [isUser, setIsUser] = useState();
  
  const [isAdmin, setIsAdmin] = useState();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")))
  }, [])

  useEffect(() => {
    if (user !== null) {
        if (user.role === "user") {
            setIsUser(true);
            setIsAdmin(false);
        }else {
            setIsUser(false);
            setIsAdmin(true);
        }
    }else {
        setIsUser(false);
        setIsAdmin(false)
    }
  }, [user])


  return [isAdmin, isUser, user];

}

export default ProtectedRouteHook