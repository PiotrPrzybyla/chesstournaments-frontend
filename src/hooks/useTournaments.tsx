import { useEffect, useState } from "react";
import { fetchHandler } from "../utils/fetchHandler";
import { BASE_BACKEND_URL } from "../utils/consts";
import { ITournament } from "../components/TournamentsPanel/types";
import { formatDate } from "../utils/formatDate";

interface ITournamentsListProps {
  tournaments: ITournament[];
  isLoading: boolean;
}
type TournamentData = {
  tournamentId: number;
  name: string;
  address: string;
  date: string;
};

export const useTournaments = (path: string): ITournamentsListProps => {
  const [tournaments, setTournaments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const goodCallback = async (response: Response) => {
    const data = await response.json();
    setTournaments(
      data.map(({ tournamentId, name, address, date }: TournamentData) => {
        return {
          tournament_id: tournamentId,
          title: name,
          location: address,
          date: formatDate(date.slice(0, 10)),
        };
      })
    );
    setIsLoading(false);
  };
  useEffect(() => {
    fetchHandler({
      url: `${BASE_BACKEND_URL}${path}`,
      method: "GET",
      goodCallback: goodCallback,
    });
  }, []);
  return {
    tournaments,
    isLoading,
  };
};
