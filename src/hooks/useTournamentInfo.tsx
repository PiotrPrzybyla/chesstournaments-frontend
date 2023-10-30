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

  useEffect(() => {
    fetchHandler({
      url: `${BASE_BACKEND_URL}/api/tournament/${tournament_id}`,
      method: "GET",
    })
      .then((data) => {
        setTitle(data.name);
        setLocation(data.address);
        setDate(formatDate(data.date.slice(0, 10)));
        setTime(data.date.slice(11, 16));
        setDescription(data.description);
      })
      .catch((error) => {
        console.error(error);
      });
    fetchHandler({
      url: `${BASE_BACKEND_URL}/api/tournament/isMember/${getUserId()}/${tournament_id}`,
      method: "GET",
    })
      .then((data) => {
        setIsParticipant(data.isMember);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
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
