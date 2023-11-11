import { BASE_BACKEND_URL } from "../../utils/consts";
import { fetchHandler } from "../../utils/fetchHandler";

export const joinTournament = (
  tournament_id: string | undefined,
  user_id: string | null
): void => {
  if (user_id === null) {
    console.error("User ID is null");
    return;
  }
  if (!tournament_id || !user_id) {
    console.error("Tournament ID or User ID is null or undefined");
    return;
  }
  const goodCallback = async (response: Response) => {
    window.location.reload();
  };
  fetchHandler({
    url: `${BASE_BACKEND_URL}/api/tournament/join`,
    method: "POST",
    body: { tournamentId: parseInt(tournament_id), userId: parseInt(user_id) },
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    goodCallback: goodCallback,
  });
};
