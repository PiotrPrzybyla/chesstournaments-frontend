import React from "react";
import useTournamentInfo from "../../hooks/useTournamentInfo";
import { Typography } from "@mui/material";
import JoinLeaveGenerator from "../Generators/JoinLeaveGenerator";
import { joinTournament, leaveTournament } from "./utils";
import LoadingCircle from "../LoadingCIrcle/LoadingCircle";

interface ITournamentPanelProps {
  tournament_id: string | undefined;
}

const TournamentPanel: React.FC<ITournamentPanelProps> = ({
  tournament_id,
}) => {
  const { title, description, date, time, location, isLoading, isParticipant } =
    useTournamentInfo(tournament_id);
  return isLoading ? (
    <LoadingCircle />
  ) : (
    <JoinLeaveGenerator
      title={title}
      description={description}
      isMember={isParticipant}
      join={() => joinTournament(tournament_id)}
      leave={() => leaveTournament(tournament_id)}
    >
      <Typography>
        {date} {time}
      </Typography>
      <Typography>{location}</Typography>
    </JoinLeaveGenerator>
  );
};

export default TournamentPanel;
