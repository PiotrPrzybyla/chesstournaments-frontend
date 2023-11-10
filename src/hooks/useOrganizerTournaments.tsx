import { useEffect, useState } from "react";
import { fetchHandler } from "../utils/fetchHandler";
import { BASE_BACKEND_URL } from "../utils/consts";
import { getOrganizerId } from "../utils/getOrganizerId";

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
  const organizerId = getOrganizerId();
  useEffect(() => {
    fetchHandler({
      url: `${BASE_BACKEND_URL}/api/tournament/organizer/${status}/${organizerId}`,
      method: "GET",
    }).then((data) => {
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
      console.log(data);
      setIsLoading(false);
    });
  }, []);

  return {
    tournaments,
    isLoading,
  };
};
