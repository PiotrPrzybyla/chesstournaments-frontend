import { Container } from "@mui/material";
import React from "react";
import { ListTitle } from "../../styles/Title";
import OrganizerTournamentsList from "./OrganizerTournamentsList";
import { useTranslation } from "react-i18next";

interface IPastTournamentsProps {}
const pastTournamentsTempList = [
  {
    tournament_id: "1",
    title: "Tournament",
    participants: 10,
    maxParticipants: 20,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc.",
  },
  {
    tournament_id: "1",
    title: "Tournament",
    participants: 10,
    maxParticipants: 20,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc.",
  },
  {
    tournament_id: "1",
    title: "Tournament",
    participants: 10,
    maxParticipants: 20,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc.",
  },
  {
    tournament_id: "1",
    title: "Tournament",
    participants: 10,
    maxParticipants: 20,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc.",
  },
  {
    tournament_id: "1",
    title: "Tournament",
    participants: 10,
    maxParticipants: 20,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc.",
  },
  {
    tournament_id: "1",
    title: "Tournament",
    participants: 10,
    maxParticipants: 20,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc.",
  },
  {
    tournament_id: "1",
    title: "Tournament",
    participants: 10,
    maxParticipants: 20,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl sit amet nunc.",
  },
];

const PastTournaments: React.FC<IPastTournamentsProps> = () => {
  const { t } = useTranslation("organizerPanel");
  return (
    <Container maxWidth={false}>
      <ListTitle>{`${t("pastTournaments")}`}</ListTitle>
      <OrganizerTournamentsList
        organizerTournaments={pastTournamentsTempList}
      />
    </Container>
  );
};

export default PastTournaments;
