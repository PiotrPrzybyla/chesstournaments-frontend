import React from "react";
import useTournamentInfo from "../../hooks/useTournamentInfo";
import { useParams } from "react-router-dom";
import { Box, Button, Typography, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import useIsParticipant from "../../hooks/useIsParticipant";
import { MainTitle } from "../../styles/Title";
import { Description } from "./styles";

interface ITournamentPanelProps {}

const TournamentPanel: React.FC<ITournamentPanelProps> = () => {
  const { tournament_id } = useParams<{ tournament_id: string }>();
  const { title, description, date, time, location } =
    useTournamentInfo(tournament_id);
  const user_id = 1;
  const isParticipant = useIsParticipant(tournament_id, user_id);
  const { t } = useTranslation("tournament");
  return (
    <Container maxWidth="md">
      <Box textAlign="center" margin="60px">
        <MainTitle>{title}</MainTitle>
        <Typography>
          {date} {time}
        </Typography>
        <Typography>{location}</Typography>
        <Description>{description}</Description>
        <Button color={isParticipant ? "error" : "success"} variant="contained">
          {isParticipant ? `${t("leave")}` : `${t("join")}`}
        </Button>
      </Box>
    </Container>
  );
};

export default TournamentPanel;
