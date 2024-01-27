import { Container } from "@mui/material";
import React from "react";
import { ListTitle } from "../../styles/Title";
import OrganizerTournamentsList from "./OrganizerTournamentsList";
import { useTranslation } from "react-i18next";
import { useOrganizerTournaments } from "../../hooks/useOrganizerTournaments";
import LoadingCircle from "../LoadingCIrcle/LoadingCircle";

interface IPastTournamentsProps {}

const PastTournaments: React.FC<IPastTournamentsProps> = () => {
  const { t } = useTranslation("organizerPanel");
  const { tournaments, isLoading } = useOrganizerTournaments("past");
  return isLoading ? (
    <LoadingCircle />
  ) : (
    <Container maxWidth={false}>
      <ListTitle>{`${t("pastTournaments")}`}</ListTitle>
      <OrganizerTournamentsList organizerTournaments={tournaments} />
    </Container>
  );
};

export default PastTournaments;
