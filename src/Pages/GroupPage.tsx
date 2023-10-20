import React from "react";
import UIGenerator from "../components/Generators/UIGenerator";
import GroupPanel from "../components/GroupPanel/GroupPanel";

interface IGroupPageProps {}

const GroupPage: React.FC<IGroupPageProps> = () => {
  return (
    <UIGenerator>
      <GroupPanel></GroupPanel>
    </UIGenerator>
  );
};

export default GroupPage;
