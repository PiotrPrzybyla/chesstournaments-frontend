import { useEffect, useState } from "react";
import { fetchHandler } from "../utils/fetchHandler";
import { BASE_BACKEND_URL } from "../utils/consts";

export const useGroupInfo = (group_id: string | undefined) => {
  interface IGroupInfo {
    name: string;
    description: string;
  }
  const [groupInfo, setGroupInfo] = useState<IGroupInfo>({
    name: "",
    description: "",
  });
  const [isMember, setIsMember] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const fetchIsMemberGoodCallback = async (response: Response) => {
    const data = await response.json();
    setIsMember(data.isMember);
    setIsLoading(false);
  };
  const groupInfoGoodCallback = async (response: Response) => {
    const data = await response.json();
    setGroupInfo({
      name: data.name,
      description: data.description,
    });
  };
  const fetchGroup = () => {
    fetchHandler({
      url: `${BASE_BACKEND_URL}/api/group/${group_id}`,
      method: "GET",
      goodCallback: groupInfoGoodCallback,
    });
  };
  const fetchIsMember = () => {
    fetchHandler({
      url: `${BASE_BACKEND_URL}/api/group/isMember/${group_id}`,
      method: "GET",
      goodCallback: fetchIsMemberGoodCallback,
    });
  };
  useEffect(() => {
    fetchGroup();
    fetchIsMember();
  }, []);
  return { groupInfo, isMember, isLoading };
};
