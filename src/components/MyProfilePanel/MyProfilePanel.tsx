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
import { useAuth } from "../../context/AuthContext";

interface IMyProfilePanelProps {}

const MyProfilePanel: React.FC<IMyProfilePanelProps> = () => {
  const { t } = useTranslation("myProfile");
  const { user_id } = useParams<{ user_id: string }>();
  const navigate = useNavigate();
  const { username, name, surname, isOrganizer, isLoading } =
    useUserInfo(user_id);
  const { checkSession } = useAuth();
  const updateToOrganizerGoodCallback = async (response: Response) => {
    navigate(0);
  };
  const handleLogoutGoodCallback = async (response: Response) => {
    checkSession();
    navigate(`/`);
  };
  const updateToOrganizer = () => {
    fetchHandler({
      url: `${BASE_BACKEND_URL}/api/organizer/user`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      goodCallback: updateToOrganizerGoodCallback,
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
      goodCallback: handleLogoutGoodCallback,
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
        {/* <Button>{`${t("saveBtn")}`}</Button> */}
        {isOrganizer || (
          <Button variant="contained" color="error" onClick={updateToOrganizer}>
            {`${t("updateBtn")}`}
          </Button>
        )}
        <Button color="error" onClick={handleLogout}>{`${t("logout")}`}</Button>
      </CenterShortFormControl>
    </Container>
  );
};

export default MyProfilePanel;
