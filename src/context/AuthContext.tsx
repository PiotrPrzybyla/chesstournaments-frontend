import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchHandler } from "../utils/fetchHandler";
import { BASE_BACKEND_URL } from "../utils/consts";

interface IAuthContextType {
  isLoggedIn: boolean | null;
  isOrganizer: boolean | null;
  checkSession: () => void;
}

interface IAuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<IAuthContextType | null>(null);

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [isOrganizer, setIsOrganizer] = useState<boolean | null>(null);
  const loggedGoodCallback = async (response: Response) => {
    setIsLoggedIn(true);
  };
  const loggedBadCallback = async (response: Response) => {
    setIsLoggedIn(false);
  };
  const fetchLogged = async () => {
    await fetchHandler({
      url: `${BASE_BACKEND_URL}/api/user/isLogged`,
      method: "GET",
      headers: {
        AccessControlAllowOrigin: "true",
      },
      goodCallback: loggedGoodCallback,
      badCallback: loggedBadCallback,
    });
  };
  const fetchOrganizerGoodCallback = async (response: Response) => {
    setIsOrganizer(true);
  };
  const fetchOrganizerBadCallback = async (response: Response) => {
    setIsOrganizer(false);
  };
  const fetchOrganizer = async () => {
    await fetchHandler({
      url: `${BASE_BACKEND_URL}/api/organizer/user`,
      method: "GET",
      headers: {
        AccessControlAllowOrigin: "true",
      },
      goodCallback: fetchOrganizerGoodCallback,
      badCallback: fetchOrganizerBadCallback,
    });
  };
  const checkSession = async () => {
    fetchLogged();
    fetchOrganizer();
  };

  useEffect(() => {
    checkSession();
  }, []);
  return (
    <AuthContext.Provider value={{ isLoggedIn, isOrganizer, checkSession }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
