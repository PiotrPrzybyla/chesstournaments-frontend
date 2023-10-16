import React from "react";
import UIGenerator from "../components/UIGenerator/UIGenerator";
import CreateTournamentPanel from "../components/CreateTournamentPanel/CreateTournamentPanel";
import { Container } from "@mui/material";
interface ICreateTournamentPageProps {}

const CreateTournamentPage: React.FC<ICreateTournamentPageProps> = () => {
  return (
    <UIGenerator>
      <Container maxWidth="sm">
        <CreateTournamentPanel></CreateTournamentPanel>
      </Container>
    </UIGenerator>
  );
};

export default CreateTournamentPage;
