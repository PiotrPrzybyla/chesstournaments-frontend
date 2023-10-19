import React from "react";
import { ListTitle } from "../../styles/Title";
import { Container } from "@mui/material";
import GroupsList from "./GroupsList";
import { useTranslation } from "react-i18next";

interface IMyGroupsListProps {}
const groupsTempList = [
  {
    group_id: 1,
    name: "Group 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc.",
  },
  {
    group_id: 1,
    name: "Group 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc.",
  },
  {
    group_id: 1,
    name: "Group 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc.",
  },
  {
    group_id: 1,
    name: "Group 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc.",
  },
  {
    group_id: 1,
    name: "Group 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc.",
  },
  {
    group_id: 1,
    name: "Group 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc.",
  },
  {
    group_id: 1,
    name: "Group 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc.",
  },
  {
    group_id: 1,
    name: "Group 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc.",
  },
  {
    group_id: 1,
    name: "Group 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc.",
  },
  {
    group_id: 1,
    name: "Group 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc.",
  },
  {
    group_id: 1,
    name: "Group 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc.",
  },
  {
    group_id: 1,
    name: "Group 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc.",
  },
  {
    group_id: 1,
    name: "Group 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc.",
  },
  {
    group_id: 1,
    name: "Group 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc.",
  },
  {
    group_id: 1,
    name: "Group 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc.",
  },
  {
    group_id: 1,
    name: "Group 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc.",
  },
  {
    group_id: 1,
    name: "Group 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc.",
  },
  {
    group_id: 1,
    name: "Group 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc.",
  },
  {
    group_id: 1,
    name: "Group 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc.",
  },
];

const MyGroupsList: React.FC<IMyGroupsListProps> = () => {
  const { t } = useTranslation("groups");
  return (
    <Container maxWidth={false}>
      <ListTitle>{`${t("myGroups")}`}</ListTitle>
      <GroupsList groups={groupsTempList} />
    </Container>
  );
};

export default MyGroupsList;
