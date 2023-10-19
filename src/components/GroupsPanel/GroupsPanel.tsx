import { Container } from "@mui/system";
import React from "react";
import SuggestionsList from "./SuggestionsList";
import MyGroupsList from "./MyGroupsList";

interface IGroupsPanelProps {}

const GroupsPanel: React.FC<IGroupsPanelProps> = () => {
  return (
    <Container maxWidth={false}>
      <SuggestionsList />
      <MyGroupsList />
    </Container>
  );
};

export default GroupsPanel;
