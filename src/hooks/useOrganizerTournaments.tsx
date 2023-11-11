import { useEffect, useState } from "react";
import { fetchHandler } from "../utils/fetchHandler";
import { BASE_BACKEND_URL } from "../utils/consts";

interface IOrganizerTournament {
  tournament_id: string;
  title: string;
  participants: number;
  maxParticipants: number;
  description: string;
}
interface ITournamentsListProps {
  tournaments: IOrganizerTournament[];
  isLoading: boolean;
}
export const useOrganizerTournaments = (
  status: string
): ITournamentsListProps => {
  const [tournaments, setTournaments] = useState<IOrganizerTournament[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const goodCallback = async (response: Response) => {
    const data = await response.json();
    setTournaments(
      data.map((tournament: any) => {
        return {
          tournament_id: tournament.tournamentId,
          title: tournament.name,
          participants: tournament.users.length,
          maxParticipants: tournament.participantsAmount,
          description: tournament.description,
        };
      })
    );
    setIsLoading(false);
  };
  useEffect(() => {
    fetchHandler({
      url: `${BASE_BACKEND_URL}/api/tournament/organizer/${status}`,
      method: "GET",
      goodCallback: goodCallback,
    });
  }, []);

  return {
    tournaments,
    isLoading,
  };
};
