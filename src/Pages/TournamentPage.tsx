import React from "react";
import UIGenerator from "../components/Generators/UIGenerator";
import TournamentPanel from "../components/TournamentPanel/TournamentPanel";
import { useParams } from "react-router";
import { checkIfOrganizerOfTournament } from "../utils/checkIfOrganizerOfTournament";
import OrganizerTournamentPanel from "../components/OrganizerPanel/OrganizerTournamentPanel";

interface ITournamentPageProps {}

const TournamentPage: React.FC<ITournamentPageProps> = () => {
  const { tournament_id } = useParams<{ tournament_id: string }>();
  const isOrganizerOfTournament = checkIfOrganizerOfTournament(tournament_id);
  return (
    <UIGenerator>
      {isOrganizerOfTournament ? (
        <OrganizerTournamentPanel tournament_id={tournament_id} />
      ) : (
        <TournamentPanel tournament_id={tournament_id} />
      )}
    </UIGenerator>
  );
};

export default TournamentPage;
