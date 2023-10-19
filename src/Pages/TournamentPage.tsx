import React from "react";
import UIGenerator from "../components/UIGenerator/UIGenerator";
import TournamentPanel from "../components/TournamentPanel/TournamentPanel";

interface ITournamentPageProps {}

const TournamentPage: React.FC<ITournamentPageProps> = () => {
  return (
    <UIGenerator>
      <TournamentPanel />
    </UIGenerator>
  );
};

export default TournamentPage;
