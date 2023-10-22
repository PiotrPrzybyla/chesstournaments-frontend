import { Container } from "@mui/system";
import React from "react";
import { MainTitle } from "../../styles/Title";
import { Button } from "@mui/material";
import { CenterShortFormControl, FormTextField } from "../../styles/Form";
import { useUserInfo } from "../../hooks/useUserInfo";
import { useParams } from "react-router";
import { useTranslation } from "react-i18next";

interface IMyProfilePanelProps {}

const MyProfilePanel: React.FC<IMyProfilePanelProps> = () => {
  const { t } = useTranslation("myProfile");
  const { user_id } = useParams<{ user_id: string }>();
  const { username, name, surname, isOrganizer } = useUserInfo(user_id);
  return (
    <Container maxWidth="xs">
      <CenterShortFormControl>
        <MainTitle>My Profile</MainTitle>
        <FormTextField defaultValue={username} label={`${t("username")}`} />
        <FormTextField defaultValue={name} label={`${t("name")}`} />
        <FormTextField defaultValue={surname} label={`${t("surname")}`} />
        <Button>{`${t("saveBtn")}`}</Button>
        {isOrganizer || (
          <Button variant="contained" color="error">
            {`${t("updateBtn")}`}
          </Button>
        )}
      </CenterShortFormControl>
    </Container>
  );
};

export default MyProfilePanel;
