import { fetchHandler } from "./fetchHandler";
import { getOrganizerId } from "./getOrganizerId";

export const checkIfOrganizerOfTournament = (
  tournament_id: string | undefined
): boolean => {
  const organizerId = getOrganizerId();
  if (!organizerId) return false;
  fetchHandler({
    url: `http://localhost:8080/api/tournament/${tournament_id}`,
    method: "GET",
  })
    .then((data) => {
      if (parseInt(organizerId) === data.organizer.organizerId) return true;
      else return false;
    })
    .catch((error) => {
      console.error(error);
    });

  return false;
};
