import { Container } from "@mui/material";
import React from "react";
import ActiveTournaments from "./ActiveTournaments";
import PastTournaments from "./PastTournaments";

interface IOrganizerPanelProps {}

const OrganizerPanel: React.FC<IOrganizerPanelProps> = () => {
  return (
    <Container maxWidth={false}>
      <ActiveTournaments />
      <PastTournaments />
    </Container>
  );
};

export default OrganizerPanel;
