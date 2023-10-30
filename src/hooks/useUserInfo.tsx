import { useEffect, useState } from "react";
import { fetchHandler } from "../utils/fetchHandler";
import { BASE_BACKEND_URL } from "../utils/consts";

interface IUserInfoReturnValue {
  username: string;
  name: string;
  surname: string;
  isOrganizer: boolean;
  isLoading: boolean;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setSurname: React.Dispatch<React.SetStateAction<string>>;
  setIsOrganizer: React.Dispatch<React.SetStateAction<boolean>>;
}
export const useUserInfo = (
  user_id: string | undefined
): IUserInfoReturnValue => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [isOrganizer, setIsOrganizer] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchHandler({
      url: `${BASE_BACKEND_URL}/api/user/${user_id}`,
      method: "GET",
    })
      .then((data) => {
        setName(data.name);
        setSurname(data.surname);
        setUsername(data.login);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
    fetchHandler({
      url: `${BASE_BACKEND_URL}/api/organizer/user/${user_id}`,
      method: "GET",
    })
      .then(() => {
        setIsOrganizer(true);
      })
      .catch((error) => {
        setIsOrganizer(false);
      });
  }, []);

  return {
    username,
    name,
    surname,
    isOrganizer,
    isLoading,
    setUsername,
    setName,
    setSurname,
    setIsOrganizer,
  };
};
