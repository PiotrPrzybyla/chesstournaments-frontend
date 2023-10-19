import { Container } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";
import TournamentsList from "./TournamentsList";
import { ListTitle } from "../../styles/Title";

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
  return (
    <Container maxWidth={false}>
      <ListTitle> {`${t("myTournaments")}`}</ListTitle>
      <TournamentsList tournaments={tournamentsTempList}></TournamentsList>
    </Container>
  );
};

export default MyTournaments;
