import { useEffect, useState } from "react";
import { fetchHandler } from "../utils/fetchHandler";
import { BASE_BACKEND_URL } from "../utils/consts";
import { useAuth } from "../context/AuthContext";

interface IUserInfoReturnValue {
  username: string;
  name: string;
  surname: string;
  isLoading: boolean;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setSurname: React.Dispatch<React.SetStateAction<string>>;
}
export const useUserInfo = (
  user_id: string | undefined
): IUserInfoReturnValue => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserGoodCallback = async (response: Response) => {
    const data = await response.json();
    setName(data.name);
    setSurname(data.surname);
    setUsername(data.login);
    setIsLoading(false);
  };

  const fetchUser = () => {
    fetchHandler({
      url: `${BASE_BACKEND_URL}/api/user`,
      method: "GET",
      headers: {
        AccessControlAllowOrigin: "true",
      },
      goodCallback: fetchUserGoodCallback,
    });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return {
    username,
    name,
    surname,
    isLoading,
    setUsername,
    setName,
    setSurname,
  };
};
