import { BASE_BACKEND_URL } from "../../utils/consts";
import { fetchHandler } from "../../utils/fetchHandler";

export const joinTournament = (tournament_id: string | undefined): void => {
  if (!tournament_id) {
    console.error("Tournament ID  is null or undefined");
    return;
  }
  const goodCallback = async (response: Response) => {
    window.location.reload();
  };
  fetchHandler({
    url: `${BASE_BACKEND_URL}/api/tournament/join/${tournament_id}`,
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    goodCallback: goodCallback,
  });
};

export const leaveTournament = (tournament_id: string | undefined): void => {
  if (!tournament_id) {
    console.error("Tournament ID  is null or undefined");
    return;
  }
  const goodCallback = async (response: Response) => {
    window.location.reload();
  };
  fetchHandler({
    url: `${BASE_BACKEND_URL}/api/tournament/leave/${tournament_id}`,
    method: "DELETE",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    goodCallback: goodCallback,
  });
};
