import React from "react";
import UIGenerator from "../components/UIGenerator/UIGenerator";
import { Container } from "@mui/material";
import TournamentPanel from "../components/Tournament/TournamentPanel";

interface ITournamentPageProps {}

const TournamentPage: React.FC<ITournamentPageProps> = () => {
  return (
    <UIGenerator>
      <Container maxWidth="md">
        <TournamentPanel />
      </Container>
    </UIGenerator>
  );
};

export default TournamentPage;
