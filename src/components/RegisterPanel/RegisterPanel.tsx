import React from "react";
import LoginRegisterGenerator from "../Generators/LoginRegisterGenerator";
import { FormTextField } from "../../styles/Form";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";

interface IRegisterPanelProps {}

const RegisterPanel: React.FC<IRegisterPanelProps> = () => {
  const { t } = useTranslation("loginRegister");
  return (
    <LoginRegisterGenerator
      title={`${t("register")}`}
      redirectLink="/login"
      redirectText={`${t("redirectLogin")}`}
    >
      <FormTextField type="text" variant="outlined" label={`${t("name")}`} />
      <FormTextField type="text" variant="outlined" label={`${t("surname")}`} />
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
      <Button variant="contained">{`${t("register")}`}</Button>
    </LoginRegisterGenerator>
  );
};

export default RegisterPanel;
