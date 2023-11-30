import { useEffect, useState } from "react";
import { fetchHandler } from "../utils/fetchHandler";
import { BASE_BACKEND_URL } from "../utils/consts";

interface IGroup {
  group_id: number;
  name: string;
  description: string;
  rating?: number;
}
export const useGroups = (type: string) => {
  const [groups, setGroups] = useState<IGroup[]>([]);
  const goodCallback = async (response: Response) => {
    const data = await response.json();
    console.log(data);
    setGroups(
      data.map((group: any) => ({
        group_id: group.groupId,
        name: group.name,
        description: group.description,
        rating: group.rating,
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
