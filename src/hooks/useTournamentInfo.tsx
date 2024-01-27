import { useEffect, useState } from "react";
import { fetchHandler } from "../utils/fetchHandler";
import { BASE_BACKEND_URL } from "../utils/consts";
import { formatDate } from "../utils/formatDate";
import { getUserId } from "../utils/getUserId";

interface IuseTournamentInfoReturnValue {
  title: string;
  location: string;
  date: string;
  time: string;
  description: string;
  isLoading: boolean;
  isParticipant: boolean;
}
const useTournamentInfo = (
  tournament_id: string | undefined
): IuseTournamentInfoReturnValue => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isParticipant, setIsParticipant] = useState(false);

  const fetchTournamentGoodCallback = async (response: Response) => {
    const data = await response.json();
    setTitle(data.name);
    setLocation(data.address);
    setDate(formatDate(data.date.slice(0, 10)));
    setTime(data.date.slice(11, 16));
    setDescription(data.description);
  };
  const fetchIsMemberGoodCallback = async (response: Response) => {
    const data = await response.json();
    setIsParticipant(data.isMember);
    setIsLoading(false);
  };
  const fetchTournament = () => {
    fetchHandler({
      url: `${BASE_BACKEND_URL}/api/tournament/${tournament_id}`,
      method: "GET",
      goodCallback: fetchTournamentGoodCallback,
    });
  };
  const fetchIsMember = () => {
    fetchHandler({
      url: `${BASE_BACKEND_URL}/api/tournament/isMember/${tournament_id}`,
      method: "GET",
      goodCallback: fetchIsMemberGoodCallback,
    });
  };
  useEffect(() => {
    fetchTournament();
    fetchIsMember();
  }, []);
  return {
    title,
    location,
    date,
    time,
    description,
    isLoading,
    isParticipant,
  };
};

export default useTournamentInfo;
