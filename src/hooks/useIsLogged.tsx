import { useEffect, useState } from "react";
import { BASE_BACKEND_URL } from "../utils/consts";
import { fetchHandler } from "../utils/fetchHandler";

export const useIsLogged = (): boolean => {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    fetchHandler({
      url: `${BASE_BACKEND_URL}/api/user/isLogged`,
      method: "GET",
      headers: {
        AccessControlAllowOrigin: "true",
      },
    })
      .then((response) => {
        setIsLogged(true);
      })
      .catch((error) => {
        console.error("Błąd podczas sprawdzania sesji:", error);
      });
  }, [isLogged]);

  return isLogged;
};
