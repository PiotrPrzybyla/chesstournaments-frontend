import { Container } from "@mui/system";
import React from "react";
import { ListTitle } from "../../styles/Title";
import OrganizerTournamentsList from "./OrganizerTournamentsList";
import { useTranslation } from "react-i18next";
import { useOrganizerTournaments } from "../../hooks/useOrganizerTournaments";
import LoadingCircle from "../LoadingCIrcle/LoadingCircle";

interface IActiveTournamentsProps {}

const ActiveTournaments: React.FC<IActiveTournamentsProps> = () => {
  const { t } = useTranslation("organizerPanel");
  const { tournaments, isLoading } = useOrganizerTournaments("active");
  return isLoading ? (
    <LoadingCircle />
  ) : (
    <Container maxWidth={false}>
      <ListTitle>{`${t("activeTournaments")}`}</ListTitle>
      <OrganizerTournamentsList organizerTournaments={tournaments} />
    </Container>
  );
};

export default ActiveTournaments;
