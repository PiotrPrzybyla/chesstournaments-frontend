import { Container } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import TournamentsList from "./TournamentsList";
import { ListTitle } from "../../styles/Title";

interface IOtherTournamentsProps {}

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

const OtherTournaments: React.FC<IOtherTournamentsProps> = () => {
  const { t } = useTranslation("tournaments");
  return (
    <Container maxWidth={false}>
      <ListTitle> {`${t("otherTournaments")}`}</ListTitle>
      <TournamentsList tournaments={tournamentsTempList}></TournamentsList>
    </Container>
  );
};

export default OtherTournaments;
