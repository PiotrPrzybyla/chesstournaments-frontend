import React from "react";
import { IOrganizerTournament } from "./types";
import { Grid, Link } from "@mui/material";
import { useTranslation } from "react-i18next";
import { WideCard } from "../../styles/Card";

interface IOrganizerTournamentElementProps {
  tournament: IOrganizerTournament;
}

const OrganizerTournamentElement: React.FC<
  IOrganizerTournamentElementProps
> = ({ tournament }) => {
  const { tournament_id, title, description, participants, maxParticipants } =
    tournament;
  const { t } = useTranslation("organizerPanel");
  return (
    <WideCard variant="outlined">
      <Link
        href={`/tournament/${tournament_id}`}
        color="inherit"
        underline="none"
      >
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid xs={2} item>
            {title}
          </Grid>
          <Grid xs={2} item>
            {`${t("participants")}: ${participants}/${maxParticipants}`}
          </Grid>
          <Grid xs={6} item>
            {description}
          </Grid>
        </Grid>
      </Link>
    </WideCard>
  );
};

export default OrganizerTournamentElement;
