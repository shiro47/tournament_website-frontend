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
  getNewAccessToken: () => void;
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

  const getNewAccessToken = async () => {
    if (!refreshToken) {
      return;
    }
  
    try {
      const response = await fetch("http://localhost:8000/auth/login/refresh/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refresh: refreshToken }),
      });
  
      if (response.ok) {
        const data = await response.json();

        localStorage.setItem("accessToken", data.access)
        localStorage.setItem("refreshToken", data.refresh)

        setAccessToken(data.access);
        setRefreshToken(data.refresh)
        setIsLoggedIn(true);
      } else {
        console.error("Error refreshing access token");
        setAccessToken(null);
        setRefreshToken(null);
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error("Error refreshing access token:", error);
      setAccessToken(null);
      setRefreshToken(null);
      setIsLoggedIn(false);
    }
  };

  const logout = () => {
    setAccessToken(null)
    setRefreshToken(null)
    setIsLoggedIn(false);
    localStorage.clear()
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ accessToken, refreshToken, setAccessToken, setRefreshToken, isLoggedIn, setIsLoggedIn, logout, getNewAccessToken}}>
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