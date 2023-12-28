import { createContext, useEffect, useState, ReactNode } from "react";
import axios from "axios";
import { AuthValuesType, LoginParams, ErrCallbackType, UserDataType } from "./types";
import { redirect } from "react-router-dom";

const defaultProvider: AuthValuesType = {
  user: { id: 1, name: "Agustin", rol: "admin" },
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
};

const AuthContext = createContext(defaultProvider);

type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserDataType | null>(defaultProvider.user);
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading);

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleLogin = (params: LoginParams, errorCallback?: ErrCallbackType) => {
    axios
      .post(`${process.env.API_URL}/api/auth/signin`, params)
      .then((response) => {
        localStorage.setItem("token", response.data.authToken);
        localStorage.setItem("userData", JSON.stringify(response.data.user));
        localStorage.setItem("timestamp", Date.now().toString());

        redirect("/dashboard");
      })
      .catch((err) => {
        if (err.response.data.message == "Invalid credentials") {
          //toast.error("Contraseña incorrecta.");
        } else {
          //toast.error("No es posible ingresar. Contáctese con soporte.");
        }
        if (errorCallback) errorCallback(err);
      });
  };

  function handleLogout() {
    setUser(null);
    localStorage.clear();
    redirect("/login");
  }

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
