import React from "react";
import UIGenerator from "../components/Generators/UIGenerator";
import GroupsPanel from "../components/GroupsPanel/GroupsPanel";

interface IGroupsPageProps {}

const GroupsPage: React.FC<IGroupsPageProps> = () => {
  return (
    <UIGenerator>
      <GroupsPanel />
    </UIGenerator>
  );
};

export default GroupsPage;
