import { Container } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";
import { SectionTitle } from "./styles";
import TournamentsList from "./TournamentsList";

interface IMyTournamentsProps {}

const tournamentsTempList = [
  { title: "Event title", location: "Wrocław", date: "23.11.2023" },
  { title: "Event title", location: "Wrocław", date: "23.11.2023" },
  { title: "Event title", location: "Wrocław", date: "23.11.2023" },
  { title: "Event title", location: "Wrocław", date: "23.11.2023" },
];

const MyTournaments: React.FC<IMyTournamentsProps> = () => {
  const { t } = useTranslation("tournaments");
  return (
    <Container maxWidth={false}>
      <SectionTitle> {`${t("myTournaments")}`}</SectionTitle>
      <TournamentsList tournaments={tournamentsTempList}></TournamentsList>
    </Container>
  );
};

export default MyTournaments;
