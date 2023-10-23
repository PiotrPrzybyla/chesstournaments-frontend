import React from "react";
import { IOrganizerTournament } from "./types";
import { Grid } from "@mui/material";
import OrganizerTournamentElement from "./OrganizerTournamentElement";

interface IOrganizerTournamentsListProps {
  organizerTournaments: IOrganizerTournament[];
}

const OrganizerTournamentsList: React.FC<IOrganizerTournamentsListProps> = ({
  organizerTournaments,
}) => {
  return (
    <Grid container spacing={2}>
      {organizerTournaments.map((tournament, index) => (
        <Grid item xs={12} key={index}>
          <OrganizerTournamentElement tournament={tournament} />
        </Grid>
      ))}
    </Grid>
  );
};

export default OrganizerTournamentsList;
