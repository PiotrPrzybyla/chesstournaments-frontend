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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchHandler({
          url: `http://localhost:8080/api/tournament/users/${tournament_id}`,
          method: "GET",
        });

        setParticipants(
          response.map((user: any) => ({
            user_id: user.userId,
            name: user.name,
          }))
        );
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [tournament_id]);
  return {
    participants,
  };
};
