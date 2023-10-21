import React from "react";
import UIGenerator from "../components/Generators/UIGenerator";
import LoginPanel from "../components/LoginPanel/LoginPanel";

interface ILoginPageProps {}

const LoginPage: React.FC<ILoginPageProps> = () => {
  return (
    <UIGenerator>
      <LoginPanel></LoginPanel>
    </UIGenerator>
  );
};

export default LoginPage;
