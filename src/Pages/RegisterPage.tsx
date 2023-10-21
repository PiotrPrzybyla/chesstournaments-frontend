import React from "react";
import UIGenerator from "../components/Generators/UIGenerator";
import RegisterPanel from "../components/RegisterPanel/RegisterPanel";

interface IRegisterPageProps {}

const RegisterPage: React.FC<IRegisterPageProps> = () => {
  return (
    <UIGenerator>
      <RegisterPanel />
    </UIGenerator>
  );
};

export default RegisterPage;
