import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchHandler } from "../utils/fetchHandler";
import { BASE_BACKEND_URL } from "../utils/consts";

interface IAuthContextType {
  isLoggedIn: boolean | null;
  checkSession: () => void;
}

interface IAuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<IAuthContextType | null>(null);

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  const checkSession = async () => {
    const goodCallback = async (response: Response) => {
      setIsLoggedIn(true);
    };
    const badCallback = async (response: Response) => {
      setIsLoggedIn(false);
    };
    await fetchHandler({
      url: `${BASE_BACKEND_URL}/api/user/isLogged`,
      method: "GET",
      headers: {
        AccessControlAllowOrigin: "true",
      },
      goodCallback: goodCallback,
      badCallback: badCallback,
    });
  };

  useEffect(() => {
    checkSession();
  }, []);
  return (
    <AuthContext.Provider value={{ isLoggedIn, checkSession }}>
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
