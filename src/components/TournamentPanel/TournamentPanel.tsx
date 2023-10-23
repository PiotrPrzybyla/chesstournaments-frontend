import React from "react";
import useTournamentInfo from "../../hooks/useTournamentInfo";
import { Typography } from "@mui/material";
import JoinLeaveGenerator from "../Generators/JoinLeaveGenerator";
import getIsParticipant from "./utils";

interface ITournamentPanelProps {
  tournament_id: string | undefined;
}

const TournamentPanel: React.FC<ITournamentPanelProps> = ({
  tournament_id,
}) => {
  const { title, description, date, time, location } =
    useTournamentInfo(tournament_id);
  const user_id = 1;
  const isParticipant = getIsParticipant(tournament_id, user_id);
  return (
    <JoinLeaveGenerator
      title={title}
      description={description}
      isMember={isParticipant}
    >
      <Typography>
        {date} {time}
      </Typography>
      <Typography>{location}</Typography>
    </JoinLeaveGenerator>
  );
};

export default TournamentPanel;
