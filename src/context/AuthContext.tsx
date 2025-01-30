import { createContext, ReactNode, useEffect, useState } from "react";
import { login } from "../services/Service";
import { ToastAlerta } from "../utils/ToastAlerta";
import UsuarioLogin from "../models/UsuarioLogin";

interface AuthContextProps {
  usuario: UsuarioLogin;
  handleLogout(): void;
  handleLogin(usuario: UsuarioLogin): Promise<void>;
  isLoading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [usuario, setUsuario] = useState<UsuarioLogin>(() => {
    const usuarioSalvo = localStorage.getItem("usuario");
    //const usuarioSalvo = sessionStorage
    return usuarioSalvo
      ? JSON.parse(usuarioSalvo)
      : {
          id: 0,
          nome: "",
          email: "",
          senha: "",
          altura: 0,
          peso: 0,
          objetivo: "",
          nivelFitness: "",
          token: "",
        };
  });

  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(usuarioLogin: UsuarioLogin) {
    setIsLoading(true);
    try {
      await login(`/usuarios/logar`, usuarioLogin, setUsuario);
      ToastAlerta("Usuário foi autenticado com sucesso!", "sucesso");
    } catch (error) {
      ToastAlerta("Os dados do Usuário estão inconsistentes!", "erro");
      console.log(usuarioLogin);
    }
    setIsLoading(false);
  }
  // guardando o token
  useEffect(() => {
    if (usuario.token) {
      localStorage.setItem("usuario", JSON.stringify(usuario));
    }
  });

  function handleLogout() {
    setUsuario({
      id: 0,
      nome: "",
      email: "",
      senha: "",
      altura: 0,
      peso: 0,
      objetivo: "",
      nivelFitness: "",
      token: "",
    });
    localStorage.removeItem("usuario");
  }

  return (
    <AuthContext.Provider
      value={{ usuario, handleLogin, handleLogout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
