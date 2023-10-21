import React from "react";
import LoginRegisterGenerator from "../Generators/LoginRegisterGenerator";
import { FormTextField } from "../../styles/Form";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";

interface ILoginPanelProps {}

const LoginPanel: React.FC<ILoginPanelProps> = () => {
  const { t } = useTranslation("loginRegister");
  return (
    <LoginRegisterGenerator
      title={`${t("login")}`}
      redirectLink="/register"
      redirectText={`${t("redirectRegister")}`}
    >
      <FormTextField
        type="text"
        variant="outlined"
        label={`${t("username")}`}
      />
      <FormTextField
        type="password"
        variant="outlined"
        label={`${t("password")}`}
      />
      <Button variant="contained">{`${t("login")}`}</Button>
    </LoginRegisterGenerator>
  );
};

export default LoginPanel;
