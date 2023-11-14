import { BASE_BACKEND_URL } from "../../utils/consts";
import { fetchHandler } from "../../utils/fetchHandler";

export const joinGroup = (group_id: string | undefined): void => {
  if (!group_id) {
    console.error("Group ID  is null or undefined");
    return;
  }
  const goodCallback = async (response: Response) => {
    window.location.reload();
  };
  fetchHandler({
    url: `${BASE_BACKEND_URL}/api/group/join/${group_id}`,
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    goodCallback: goodCallback,
  });
};

export const leaveGroup = (group_id: string | undefined): void => {
  if (!group_id) {
    console.error("Group ID  is null or undefined");
    return;
  }
  const goodCallback = async (response: Response) => {
    window.location.reload();
  };
  fetchHandler({
    url: `${BASE_BACKEND_URL}/api/group/leave/${group_id}`,
    method: "DELETE",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    goodCallback: goodCallback,
  });
};
