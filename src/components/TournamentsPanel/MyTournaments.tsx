import { Container } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";
import TournamentsList from "./TournamentsList";
import { ListTitle } from "../../styles/Title";
import { useTournaments } from "../../hooks/useTournaments";
import LoadingCircle from "../LoadingCIrcle/LoadingCircle";
import { useAuth } from "../../context/AuthContext";
import { TournamentsAlert } from "./styles";

interface IMyTournamentsProps {}

const MyTournaments: React.FC<IMyTournamentsProps> = () => {
  const { t } = useTranslation("tournaments");
  const { tournaments, isLoading } = useTournaments(`/api/tournament/user`);
  const { isLoggedIn } = useAuth();
  return isLoading ? (
    <LoadingCircle />
  ) : (
    <Container maxWidth={false}>
      <ListTitle> {`${t("myTournaments")}`}</ListTitle>
      {isLoggedIn ? (
        <TournamentsList tournaments={tournaments}></TournamentsList>
      ) : (
        <TournamentsAlert>{t("notLoggedIn")}</TournamentsAlert>
      )}
    </Container>
  );
};

export default MyTournaments;
