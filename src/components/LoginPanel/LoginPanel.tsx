import React, { useState } from "react";
import LoginRegisterGenerator from "../Generators/LoginRegisterGenerator";
import { FormTextField } from "../../styles/Form";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../configs/firebase";
import { fetchHandler } from "../../utils/fetchHandler";
import { BASE_BACKEND_URL } from "../../utils/consts";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ErrorMessage } from "../../styles/Text";
import red from "@mui/material/colors/red";

interface ILoginPanelProps {}

const LoginPanel: React.FC<ILoginPanelProps> = () => {
  const { t } = useTranslation("loginRegister");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { checkSession } = useAuth();
  const navigate = useNavigate();
  const goodCallback = async () => {
    checkSession();
    setError("");
    navigate("/");
  };
  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const token = await userCredential.user.getIdToken();
      fetchHandler({
        url: `${BASE_BACKEND_URL}/api/user/login`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        goodCallback,
      });
    } catch (error) {
      setError(`${t("loginError")}`);
      console.error(error);
    }
  };
  return (
    <LoginRegisterGenerator
      title={`${t("login")}`}
      redirectLink="/register"
      redirectText={`${t("redirectRegister")}`}
    >
      <FormTextField
        type="text"
        variant="outlined"
        label={`${t("email")}`}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormTextField
        type="password"
        variant="outlined"
        label={`${t("password")}`}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error !== "" && <ErrorMessage color={red}>{error}</ErrorMessage>}
      <Button variant="contained" onClick={handleLogin}>{`${t(
        "login"
      )}`}</Button>
    </LoginRegisterGenerator>
  );
};

export default LoginPanel;
