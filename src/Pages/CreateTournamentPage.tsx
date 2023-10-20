import React from "react";
import UIGenerator from "../components/Generators/UIGenerator";
import CreateTournamentPanel from "../components/CreateTournamentPanel/CreateTournamentPanel";
interface ICreateTournamentPageProps {}

const CreateTournamentPage: React.FC<ICreateTournamentPageProps> = () => {
  return (
    <UIGenerator>
      <CreateTournamentPanel></CreateTournamentPanel>
    </UIGenerator>
  );
};

export default CreateTournamentPage;
