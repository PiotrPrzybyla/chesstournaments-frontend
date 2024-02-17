import { useEffect, useState } from "react";
import { fetchHandler } from "../utils/fetchHandler";
import { BASE_BACKEND_URL } from "../utils/consts";
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
      url: `${BASE_BACKEND_URL}/api/tournament/isOrganizer/${tournament_id}`,
      method: "GET",
      goodCallback: goodCallback,
    });
  }, [tournament_id]);

  return isOrganizerOfTournament;
};
