import { Container } from "@mui/material";
import React from "react";
import MyTournaments from "./MyTournaments";
import OtherTournaments from "./OtherTournaments";

interface ITournamentsPanelProps {}

const TournamentsPanel: React.FC<ITournamentsPanelProps> = () => {
  return (
    <Container maxWidth={false}>
      <MyTournaments />
      <OtherTournaments />
    </Container>
  );
};

export default TournamentsPanel;
