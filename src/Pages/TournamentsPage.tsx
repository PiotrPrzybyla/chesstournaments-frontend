import React from "react";
import UIGenerator from "../components/UIGenerator/UIGenerator";
import TournamentsPanel from "../components/TournamentsPanel/TournamentsPanel";

interface ITournamentsPageProps {}

const TournamentsPage: React.FC<ITournamentsPageProps> = () => {
  return (
    <UIGenerator>
      <TournamentsPanel></TournamentsPanel>
    </UIGenerator>
  );
};

export default TournamentsPage;
