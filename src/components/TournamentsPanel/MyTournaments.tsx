import { Container } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";
import TournamentsList from "./TournamentsList";
import { ListTitle } from "../../styles/Title";
import { useTournaments } from "../../hooks/useTournaments";
import { useUserInfo } from "../../hooks/useUserInfo";
import { getUserId } from "../../utils/getUserId";
import LoadingCircle from "../LoadingCIrcle/LoadingCircle";

interface IMyTournamentsProps {}

const tournamentsTempList = [
  {
    tournament_id: 1,
    title: "Event title",
    location: "Wrocław",
    date: "23.11.2023",
  },
  {
    tournament_id: 1,
    title: "Event title",
    location: "Wrocław",
    date: "23.11.2023",
  },
  {
    tournament_id: 1,
    title: "Event title",
    location: "Wrocław",
    date: "23.11.2023",
  },
  {
    tournament_id: 1,
    title: "Event title",
    location: "Wrocław",
    date: "23.11.2023",
  },
];

const MyTournaments: React.FC<IMyTournamentsProps> = () => {
  const { t } = useTranslation("tournaments");
  const userId = getUserId();
  const { tournaments, isLoading } = useTournaments(
    `/api/tournament/user/${userId}`
  );
  return isLoading ? (
    <LoadingCircle />
  ) : (
    <Container maxWidth={false}>
      <ListTitle> {`${t("myTournaments")}`}</ListTitle>
      <TournamentsList tournaments={tournaments}></TournamentsList>
    </Container>
  );
};

export default MyTournaments;
