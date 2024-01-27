import { Box, Button, Container } from "@mui/material";
import React from "react";
import { MainTitle } from "../../styles/Title";
import { Description } from "./styles";
import { useTranslation } from "react-i18next";

interface IJoinLeaveGeneratorProps {
  title: string;
  description: string;
  isMember: boolean;
  join?: () => void;
  leave?: () => void;
  children?: React.ReactNode;
}

interface IButtonProps {
  onClick?: () => void;
}
const JoinButton: React.FC<IButtonProps> = ({ onClick }) => {
  const { t } = useTranslation("joinLeave");
  return (
    <Button color={"success"} variant="contained" onClick={onClick}>
      {`${t("join")}`}
    </Button>
  );
};
const LeaveButton: React.FC<IButtonProps> = ({ onClick }) => {
  const { t } = useTranslation("joinLeave");
  return (
    <Button color={"error"} variant="contained" onClick={onClick}>
      {`${t("leave")}`}
    </Button>
  );
};
const JoinLeaveGenerator: React.FC<IJoinLeaveGeneratorProps> = ({
  title,
  description,
  isMember,
  children,
  join,
  leave,
}) => {
  return (
    <Container maxWidth="md">
      <Box textAlign="center" margin="60px">
        <MainTitle>{title}</MainTitle>
        {children}
        <Description>{description}</Description>
        {isMember ? (
          <LeaveButton onClick={leave} />
        ) : (
          <JoinButton onClick={join} />
        )}
      </Box>
    </Container>
  );
};

export default JoinLeaveGenerator;
