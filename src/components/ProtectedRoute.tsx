import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

interface ProtectedRouteProps {
    children: ReactNode;
  }
  
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { isLoggedIn } = useAuth();

    if (!isLoggedIn) {
      // user is not authenticated
      return <Navigate to="/login" />;
    }
  
    return <>{children}</>;
  };
  
  export default ProtectedRoute;