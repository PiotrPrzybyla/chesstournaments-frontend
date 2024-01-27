import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoadingCircle from "../components/LoadingCIrcle/LoadingCircle";

interface IOrganizerRouteProps {
  children: React.ReactNode;
}

const OrganizerRoute: React.FC<IOrganizerRouteProps> = ({ children }) => {
  let location = useLocation();
  const { isOrganizer } = useAuth();
  if (isOrganizer === null) {
    return <LoadingCircle></LoadingCircle>;
  }
  if (isOrganizer) {
    return <>{children}</>;
  }

  return <Navigate to="/profile" state={{ from: location }} replace />;
};

export default OrganizerRoute;
