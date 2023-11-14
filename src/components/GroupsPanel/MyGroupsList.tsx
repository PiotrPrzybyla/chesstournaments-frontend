import React from "react";
import { ListTitle } from "../../styles/Title";
import { Container } from "@mui/material";
import GroupsList from "./GroupsList";
import { useTranslation } from "react-i18next";
import { useGroups } from "../../hooks/useGroups";

interface IMyGroupsListProps {}

const MyGroupsList: React.FC<IMyGroupsListProps> = () => {
  const { t } = useTranslation("groups");
  const groups = useGroups("user");
  return (
    <Container maxWidth={false}>
      <ListTitle>{`${t("myGroups")}`}</ListTitle>
      <GroupsList groups={groups} />
    </Container>
  );
};

export default MyGroupsList;
