import { Grid } from "@mui/material";
import React from "react";
import { ITournament } from "./types";
import TournamentElement from "./TournamentElement";

interface ITournamentsListProps {
  tournaments: ITournament[];
}

const TournamentsList: React.FC<ITournamentsListProps> = ({ tournaments }) => {
  return (
    <Grid container spacing={2}>
      {tournaments.map(({ tournament_id, title, location, date }, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <TournamentElement
            tournamentInfo={{ tournament_id, title, location, date }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default TournamentsList;
