import { Container } from "@mui/material";
import React from "react";
import { SectionTitle } from "./styles";
import { useTranslation } from "react-i18next";
import TournamentsList from "./TournamentsList";

interface IOtherTournamentsProps {}

const tournamentsTempList = [
  { title: "Event title", location: "Wrocław", date: "23.11.2023" },
  { title: "Event title", location: "Wrocław", date: "23.11.2023" },
  { title: "Event title", location: "Wrocław", date: "23.11.2023" },
  { title: "Event title", location: "Wrocław", date: "23.11.2023" },
  { title: "Event title", location: "Wrocław", date: "23.11.2023" },
  { title: "Event title", location: "Wrocław", date: "23.11.2023" },
  { title: "Event title", location: "Wrocław", date: "23.11.2023" },
  { title: "Event title", location: "Wrocław", date: "23.11.2023" },
  { title: "Event title", location: "Wrocław", date: "23.11.2023" },
  { title: "Event title", location: "Wrocław", date: "23.11.2023" },
  { title: "Event title", location: "Wrocław", date: "23.11.2023" },
  { title: "Event title", location: "Wrocław", date: "23.11.2023" },
  { title: "Event title", location: "Wrocław", date: "23.11.2023" },
  { title: "Event title", location: "Wrocław", date: "23.11.2023" },
  { title: "Event title", location: "Wrocław", date: "23.11.2023" },
  { title: "Event title", location: "Wrocław", date: "23.11.2023" },
  { title: "Event title", location: "Wrocław", date: "23.11.2023" },
  { title: "Event title", location: "Wrocław", date: "23.11.2023" },
];

const OtherTournaments: React.FC<IOtherTournamentsProps> = () => {
  const { t } = useTranslation("tournaments");
  return (
    <Container maxWidth={false}>
      <SectionTitle> {`${t("otherTournaments")}`}</SectionTitle>
      <TournamentsList tournaments={tournamentsTempList}></TournamentsList>
    </Container>
  );
};

export default OtherTournaments;
