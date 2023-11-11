import React, { useState } from "react";
import LoginRegisterGenerator from "../Generators/LoginRegisterGenerator";
import { FormTextField } from "../../styles/Form";
import { useTranslation } from "react-i18next";
import { Button, Typography } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../configs/firebase";
import { red } from "@mui/material/colors";
import { ErrorMessage } from "../../styles/Text";
import { fetchHandler } from "../../utils/fetchHandler";
import { BASE_BACKEND_URL } from "../../utils/consts";
import { useNavigate } from "react-router-dom";

interface IRegisterPanelProps {}

const RegisterPanel: React.FC<IRegisterPanelProps> = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("loginRegister");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const handleRegister = async () => {
    if (password.length < 6) {
      setError(`${t("passwordLengthError")}`);
      return;
    }
    if (password !== confirmPassword) {
      setError(`${t("passwordsMatchError")}`);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const idToken = await userCredential.user.getIdToken();
      console.log(idToken);
      fetchHandler({
        url: `${BASE_BACKEND_URL}/api/user/register`,
        method: "POST",
        body: {
          login: username,
          name: name,
          surname: surname,
          password: password,
          idToken: idToken,
          categoryId: 4,
        },
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then(() => {
        navigate("/login");
      });
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  return (
    <LoginRegisterGenerator
      title={`${t("register")}`}
      redirectLink="/login"
      redirectText={`${t("redirectLogin")}`}
    >
      <FormTextField
        type="text"
        variant="outlined"
        label={`${t("name")}`}
        onChange={(e) => setName(e.target.value)}
      />
      <FormTextField
        type="text"
        variant="outlined"
        label={`${t("surname")}`}
        onChange={(e) => setSurname(e.target.value)}
      />
      <FormTextField
        type="text"
        variant="outlined"
        label={`${t("username")}`}
        onChange={(e) => setUsername(e.target.value)}
      />
      <FormTextField
        type="text"
        variant="outlined"
        label={`${t("mail")}`}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormTextField
        type="password"
        variant="outlined"
        label={`${t("password")}`}
        onChange={(e) => setPassword(e.target.value)}
      />
      <FormTextField
        type="password"
        variant="outlined"
        label={`${t("confirmPassword")}`}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {error !== "" && <ErrorMessage color={red}>{error}</ErrorMessage>}
      <Button onClick={handleRegister} variant="contained">{`${t(
        "register"
      )}`}</Button>
    </LoginRegisterGenerator>
  );
};

export default RegisterPanel;
