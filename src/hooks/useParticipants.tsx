import { useEffect, useState } from "react";
import { fetchHandler } from "../utils/fetchHandler";
import { BASE_BACKEND_URL } from "../utils/consts";

interface IParticipant {
  user_id: string;
  name: string;
  surname?: string;
}

interface IUseParticipantsReturnValue {
  participants: IParticipant[];
}
export const useParticipants = (
  tournament_id: string | undefined
): IUseParticipantsReturnValue => {
  const [participants, setParticipants] = useState<IParticipant[]>([]);
  const goodCallback = async (response: Response) => {
    const data = await response.json();
    setParticipants(
      data.map((user: any) => ({
        user_id: user.userId,
        name: user.name,
        surname: user.surname,
      }))
    );
  };
  const fetchData = () => {
    fetchHandler({
      url: `${BASE_BACKEND_URL}/api/tournament/users/${tournament_id}`,
      method: "GET",
      goodCallback: goodCallback,
    });
  };
  useEffect(() => {
    fetchData();
  }, [tournament_id]);
  return {
    participants,
  };
};
