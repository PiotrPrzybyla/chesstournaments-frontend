import { useEffect, useState } from "react";
import { checkIfOrganizerOfTournament } from "../utils/checkIfOrganizerOfTournament";
import { fetchHandler } from "../utils/fetchHandler";
import { getOrganizerId } from "../utils/getOrganizerId";

export const useIsOrganizerOfTournament = (
  tournament_id: string | undefined
) => {
  const [isOrganizerOfTournament, setIsOrganizerOfTournament] = useState(false);
  const organizerId = getOrganizerId();
  useEffect(() => {
    if (organizerId) {
      fetchHandler({
        url: `http://localhost:8080/api/tournament/${tournament_id}`,
        method: "GET",
      })
        .then((data) => {
          if (parseInt(organizerId) === data.organizer.organizerId)
            setIsOrganizerOfTournament(true);
          else setIsOrganizerOfTournament(false);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setIsOrganizerOfTournament(false);
    }
  }, []);

  return isOrganizerOfTournament;
};
