import React from "react";
import { ListTitle } from "../../styles/Title";
import { Container } from "@mui/material";
import GroupsList from "./GroupsList";
import { useTranslation } from "react-i18next";
import { useGroups } from "../../hooks/useGroups";

interface ISuggestionsListProps {}

const SuggestionsList: React.FC<ISuggestionsListProps> = () => {
  const { t } = useTranslation("groups");
  const groups = useGroups("suggestions");
  return (
    <Container maxWidth={false}>
      <ListTitle>{`${t("suggestions")}`}</ListTitle>
      <GroupsList groups={groups} />
    </Container>
  );
};

export default SuggestionsList;
