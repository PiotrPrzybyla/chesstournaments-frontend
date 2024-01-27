import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoadingCircle from "../components/LoadingCIrcle/LoadingCircle";

interface IProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<IProtectedRouteProps> = ({ children }) => {
  let location = useLocation();
  const { isLoggedIn } = useAuth();
  if (isLoggedIn === null) {
    return <LoadingCircle></LoadingCircle>;
  }
  if (isLoggedIn) {
    return <>{children}</>;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};
export default ProtectedRoute;
