import React from "react";
import useTournamentInfo from "../../hooks/useTournamentInfo";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import JoinLeaveGenerator from "../Generators/JoinLeaveGenerator";
import getIsParticipant from "./utils";

interface ITournamentPanelProps {}

const TournamentPanel: React.FC<ITournamentPanelProps> = () => {
  const { tournament_id } = useParams<{ tournament_id: string }>();
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
