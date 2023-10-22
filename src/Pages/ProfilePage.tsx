import React from "react";
import UIGenerator from "../components/Generators/UIGenerator";
import MyProfilePanel from "../components/MyProfilePanel/MyProfilePanel";

interface IProfilePageProps {}

const ProfilePage: React.FC<IProfilePageProps> = () => {
  return (
    <UIGenerator>
      <MyProfilePanel />
    </UIGenerator>
  );
};

export default ProfilePage;
