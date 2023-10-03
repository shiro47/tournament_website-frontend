import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";


type AuthContextType = {
  accessToken: string | null;
  refreshToken: string | null;
  setAccessToken: Dispatch<SetStateAction<string | null>>;
  setRefreshToken: Dispatch<SetStateAction<string | null>>;
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    return !!localStorage.getItem("accessToken") && !!localStorage.getItem("refreshToken");
  });
  const navigate = useNavigate();
  useEffect(() => {
    const storedAccessToken = localStorage.getItem("accessToken");
    const storedRefreshToken = localStorage.getItem("refreshToken");

    if (storedAccessToken && storedRefreshToken) {
      setAccessToken(storedAccessToken);
      setRefreshToken(storedRefreshToken);
    }
  }, []);

  const logout = () => {
    setAccessToken(null)
    setRefreshToken(null)
    setIsLoggedIn(false);
    localStorage.clear()
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ accessToken, refreshToken, setAccessToken, setRefreshToken, isLoggedIn, setIsLoggedIn, logout}}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};