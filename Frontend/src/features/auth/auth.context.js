import { createContext, useState } from "react";
import { login, register, getMe } from "../auth/services/auth.api";

const authContext = createContext();

export function authProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (email, password) => {
    setLoading(true);

    try {
      const response = await login(email, password);
      setUser(response.user);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (username, email, password) => {
    setLoading(true);
    try {
      const response = await register(username, email, password);
      setUser(response.user);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <authContext.Provider value={{user,loading,handleLogin,handleRegister}}>
        {children}
    </authContext.Provider>
  )
}
