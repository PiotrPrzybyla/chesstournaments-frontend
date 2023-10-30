import { Container } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import TournamentsList from "./TournamentsList";
import { ListTitle } from "../../styles/Title";
import { useTournaments } from "../../hooks/useTournaments";
import LoadingCircle from "../LoadingCIrcle/LoadingCircle";

interface IOtherTournamentsProps {}

const OtherTournaments: React.FC<IOtherTournamentsProps> = () => {
  const { t } = useTranslation("tournaments");
  const { tournaments, isLoading } = useTournaments();
  return isLoading ? (
    <LoadingCircle />
  ) : (
    <Container maxWidth={false}>
      <ListTitle> {`${t("otherTournaments")}`}</ListTitle>
      <TournamentsList tournaments={tournaments}></TournamentsList>
    </Container>
  );
};

export default OtherTournaments;
