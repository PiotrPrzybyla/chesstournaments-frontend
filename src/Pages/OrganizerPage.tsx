import React from "react";
import UIGenerator from "../components/Generators/UIGenerator";
import OrganizerPanel from "../components/OrganizerPanel/OrganizerPanel";

interface IOrganizerPageProps {}

const OrganizerPage: React.FC<IOrganizerPageProps> = () => {
  return (
    <UIGenerator>
      <OrganizerPanel />
    </UIGenerator>
  );
};

export default OrganizerPage;
