import React from "react";
import { ITournament } from "./types";
import { Card, Grid } from "@mui/material";
import { TournamentInfo } from "./styles";

interface ITournamentElementProps {
  tournamentInfo: ITournament;
}

const TournamentElement: React.FC<ITournamentElementProps> = ({
  tournamentInfo,
}) => {
  const { title, location, date } = tournamentInfo;
  return (
    <Card variant="outlined">
      <Grid container rowGap={15} justifyContent="center">
        <Grid item>
          <TournamentInfo>{title}</TournamentInfo>
        </Grid>
        <Grid container spacing={2} justifyContent="space-around">
          <Grid item>
            <TournamentInfo>{location}</TournamentInfo>
          </Grid>
          <Grid item>
            <TournamentInfo>{date}</TournamentInfo>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default TournamentElement;
