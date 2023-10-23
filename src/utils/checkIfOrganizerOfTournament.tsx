import { getOrganizerId } from "./getOrganizerId";

export const checkIfOrganizerOfTournament = (
  tournament_id: string | undefined
) => {
  const organizer_id = getOrganizerId();
  return true;
};
