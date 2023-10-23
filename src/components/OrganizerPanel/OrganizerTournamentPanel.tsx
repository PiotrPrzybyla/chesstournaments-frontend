import React from "react";
import { ListTitle, MainTitle } from "../../styles/Title";
import { Container, Typography } from "@mui/material";
import { useParticipants } from "../../hooks/useParticipants";
import useTournamentInfo from "../../hooks/useTournamentInfo";
import { useTranslation } from "react-i18next";

interface IOrganizerTournamentPanelProps {
  tournament_id: string | undefined;
}

const OrganizerTournamentPanel: React.FC<IOrganizerTournamentPanelProps> = ({
  tournament_id,
}) => {
  const { participants } = useParticipants(tournament_id);
  const { title } = useTournamentInfo(tournament_id);
  const { t } = useTranslation("organizerPanel");
  return (
    <Container>
      <MainTitle>{title}</MainTitle>
      <ListTitle>{`${t("participants")}`}</ListTitle>
      {participants.map(({ name, user_id }, index) => {
        return <Typography key={user_id}>{`${index + 1}. ${name}`}</Typography>;
      })}
    </Container>
  );
};

export default OrganizerTournamentPanel;
