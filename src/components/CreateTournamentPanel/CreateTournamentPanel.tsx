import { Button, FormControl } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { FormTextField, FormTitle } from "./styles";

interface ICreateTournamentPanelProps {}

const CreateTournamentPanel: React.FC<ICreateTournamentPanelProps> = () => {
  const { t } = useTranslation("createTournament");
  return (
    <FormControl>
      <FormTitle>{`${t("title")}`}</FormTitle>
      <FormTextField type="text" variant="outlined" label={`${t("name")}`} />
      <FormTextField type="text" variant="outlined" label={`${t("city")}`} />
      <FormTextField type="date" />
      <FormTextField type="time" />
      <FormTextField
        type="number"
        variant="outlined"
        label={`${t("participants")}`}
      />
      <FormTextField
        type="text"
        variant="outlined"
        multiline
        rows={8}
        label={`${t("description")}`}
      />
      <Button>{`${t("title")}`}</Button>
    </FormControl>
  );
};

export default CreateTournamentPanel;
