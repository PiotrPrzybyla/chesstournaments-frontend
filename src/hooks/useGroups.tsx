import { useEffect, useState } from "react";
import { fetchHandler } from "../utils/fetchHandler";
import { BASE_BACKEND_URL } from "../utils/consts";

interface IGroup {
  group_id: number;
  name: string;
  description: string;
}
export const useGroups = (type: string) => {
  const [groups, setGroups] = useState<IGroup[]>([]);
  const goodCallback = async (response: Response) => {
    const data = await response.json();

    setGroups(
      data.map((group: any) => ({
        group_id: group.groupId,
        name: group.name,
        description: group.description,
      }))
    );
  };
  const fetchData = () => {
    fetchHandler({
      url: `${BASE_BACKEND_URL}/api/group/${type}`,
      method: "GET",
      goodCallback: goodCallback,
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return groups;
};
