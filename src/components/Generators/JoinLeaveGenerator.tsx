import { Box, Button, Container } from "@mui/material";
import React from "react";
import { MainTitle } from "../../styles/Title";
import { Description } from "./styles";
import { useTranslation } from "react-i18next";

interface IJoinLeaveGeneratorProps {
  title: string;
  description: string;
  isMember: boolean;
  children?: React.ReactNode;
}

const JoinLeaveGenerator: React.FC<IJoinLeaveGeneratorProps> = ({
  title,
  description,
  isMember,
  children,
}) => {
  const { t } = useTranslation("joinLeave");
  return (
    <Container maxWidth="md">
      <Box textAlign="center" margin="60px">
        <MainTitle>{title}</MainTitle>
        {children}
        <Description>{description}</Description>
        <Button color={isMember ? "error" : "success"} variant="contained">
          {isMember ? `${t("leave")}` : `${t("join")}`}
        </Button>
      </Box>
    </Container>
  );
};

export default JoinLeaveGenerator;
