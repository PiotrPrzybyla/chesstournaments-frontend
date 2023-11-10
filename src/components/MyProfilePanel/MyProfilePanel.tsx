import { Container } from "@mui/system";
import React from "react";
import { MainTitle } from "../../styles/Title";
import { Button } from "@mui/material";
import { CenterShortFormControl, FormTextField } from "../../styles/Form";
import { useUserInfo } from "../../hooks/useUserInfo";
import { useParams } from "react-router";
import { useTranslation } from "react-i18next";
import LoadingCircle from "../LoadingCIrcle/LoadingCircle";
import { fetchHandler } from "../../utils/fetchHandler";
import { useNavigate } from "react-router-dom";
import { BASE_BACKEND_URL } from "../../utils/consts";

interface IMyProfilePanelProps {}

const MyProfilePanel: React.FC<IMyProfilePanelProps> = () => {
  const { t } = useTranslation("myProfile");
  const { user_id } = useParams<{ user_id: string }>();
  const navigate = useNavigate();
  const { username, name, surname, isOrganizer, isLoading } =
    useUserInfo(user_id);
  const updateToOrganizer = () => {
    fetchHandler({
      url: `${BASE_BACKEND_URL}/api/organizer/user/${user_id}`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(() => {
      navigate(`#`);
    });
  };
  const handleLogout = () => {
    fetchHandler({
      url: `${BASE_BACKEND_URL}/api/user/logout`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((data) => {
      console.log(data);
    });
  };
  return isLoading ? (
    <LoadingCircle />
  ) : (
    <Container maxWidth="xs">
      <CenterShortFormControl>
        <MainTitle>My Profile</MainTitle>
        <FormTextField defaultValue={username} label={`${t("username")}`} />
        <FormTextField defaultValue={name} label={`${t("name")}`} />
        <FormTextField defaultValue={surname} label={`${t("surname")}`} />
        <Button>{`${t("saveBtn")}`}</Button>
        {isOrganizer || (
          <Button variant="contained" color="error" onClick={updateToOrganizer}>
            {`${t("updateBtn")}`}
          </Button>
        )}
        <Button onClick={handleLogout}>Logout</Button>
      </CenterShortFormControl>
    </Container>
  );
};

export default MyProfilePanel;
