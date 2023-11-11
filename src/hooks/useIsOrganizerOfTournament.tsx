import { useEffect, useState } from "react";
import { fetchHandler } from "../utils/fetchHandler";
import { getOrganizerId } from "../utils/getOrganizerId";

export const useIsOrganizerOfTournament = (
  tournament_id: string | undefined
): boolean => {
  const organizerId = getOrganizerId();
  const [isOrganizerOfTournament, setIsOrganizerOfTournament] = useState(false);
  const goodCallback = async (response: Response) => {
    const data = await response.json();
    if (parseInt(organizerId || "") === data.organizer.organizerId) return true;
    else return false;
  };
  useEffect(() => {
    if (!organizerId) setIsOrganizerOfTournament(false);
    fetchHandler({
      url: `http://localhost:8080/api/tournament/${tournament_id}`,
      method: "GET",
      goodCallback: goodCallback,
    });
  }, [tournament_id, organizerId, goodCallback]);

  return isOrganizerOfTournament;
};
