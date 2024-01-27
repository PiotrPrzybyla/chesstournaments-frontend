import { useEffect, useState } from "react";
import { fetchHandler } from "../utils/fetchHandler";
export const useIsOrganizerOfTournament = (
  tournament_id: string | undefined
): boolean => {
  const [isOrganizerOfTournament, setIsOrganizerOfTournament] = useState(false);
  const goodCallback = async (response: Response) => {
    const data = await response.json();
    setIsOrganizerOfTournament(data.isOrganizer);
  };
  useEffect(() => {
    fetchHandler({
      url: `http://localhost:8080/api/tournament/isOrganizer/${tournament_id}`,
      method: "GET",
      goodCallback: goodCallback,
    });
  }, [tournament_id]);

  return isOrganizerOfTournament;
};
