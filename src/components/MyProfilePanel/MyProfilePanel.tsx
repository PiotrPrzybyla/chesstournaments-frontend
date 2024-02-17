import { Container } from "@mui/system";
import React, { useEffect } from "react";
import { MainTitle } from "../../styles/Title";
import { Button } from "@mui/material";
import { CenterShortFormControl, FormTextField } from "../../styles/Form";
import { useUserInfo } from "../../hooks/useUserInfo";
import { useTranslation } from "react-i18next";
import LoadingCircle from "../LoadingCIrcle/LoadingCircle";
import { fetchHandler } from "../../utils/fetchHandler";
import { useNavigate } from "react-router-dom";
import { BASE_BACKEND_URL } from "../../utils/consts";
import { useAuth } from "../../context/AuthContext";

interface IMyProfilePanelProps {}

const MyProfilePanel: React.FC<IMyProfilePanelProps> = () => {
  const { t } = useTranslation("myProfile");
  const navigate = useNavigate();
  const { username, name, surname, isLoading } = useUserInfo("");
  const [updatedName, setUpdatedName] = React.useState<string>("");
  const [updatedSurname, setUpdatedSurname] = React.useState<string>("");
  const [updatedUsername, setUpdatedUsername] =
    React.useState<string>(username);
  useEffect(() => {
    setUpdatedName(name);
    setUpdatedSurname(surname);
    setUpdatedUsername(username);
  }, [username, name, surname]);
  const updateUserGoodCallback = async (response: Response) => {
    navigate(0);
  };
  const saveUpdatedUser = () => {
    fetchHandler({
      url: `${BASE_BACKEND_URL}/api/user`,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: {
        username: updatedUsername,
        name: updatedName,
        surname: updatedSurname,
      },
      goodCallback: updateUserGoodCallback,
    });
  };
  const { checkSession, isOrganizer } = useAuth();
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
        <MainTitle>{`${t("title")}`}</MainTitle>
        <FormTextField
          defaultValue={username}
          label={`${t("username")}`}
          onChange={(e) => setUpdatedUsername(e.target.value)}
        />
        <FormTextField
          defaultValue={name}
          label={`${t("name")}`}
          onChange={(e) => setUpdatedName(e.target.value)}
        />
        <FormTextField
          defaultValue={surname}
          label={`${t("surname")}`}
          onChange={(e) => setUpdatedSurname(e.target.value)}
        />
        <Button onClick={saveUpdatedUser}>{`${t("saveBtn")}`}</Button>
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
