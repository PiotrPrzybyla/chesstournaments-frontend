import React from "react";
import UIGenerator from "../components/Generators/UIGenerator";
import TournamentsPanel from "../components/TournamentsPanel/TournamentsPanel";

interface ITournamentsPageProps {}

const TournamentsPage: React.FC<ITournamentsPageProps> = () => {
  return (
    <UIGenerator>
      <TournamentsPanel />
    </UIGenerator>
  );
};

export default TournamentsPage;
