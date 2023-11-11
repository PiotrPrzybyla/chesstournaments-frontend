import { useEffect, useState } from "react";
import { fetchHandler } from "../utils/fetchHandler";

interface IParticipant {
  user_id: string;
  name: string;
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
      }))
    );
  };
  useEffect(() => {
    const fetchData = () => {
      fetchHandler({
        url: `http://localhost:8080/api/tournament/users/${tournament_id}`,
        method: "GET",
        goodCallback: goodCallback,
      });
    };

    fetchData();
  }, [tournament_id]);
  return {
    participants,
  };
};
