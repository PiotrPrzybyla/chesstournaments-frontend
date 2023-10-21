import { Button, Link } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { CenterShortFormControl, FormTitle } from "../../styles/Form";

interface ILoginRegisterGeneratorProps {
  children?: React.ReactNode;
  title: string;
  redirectText: string;
  redirectLink: string;
}

const LoginRegisterGenerator: React.FC<ILoginRegisterGeneratorProps> = ({
  children,
  title,
  redirectText,
  redirectLink,
}) => {
  return (
    <Container maxWidth="xs">
      <CenterShortFormControl>
        <FormTitle>{title}</FormTitle>
        {children}
        <Button>
          <Link underline="none" href={redirectLink}>
            {redirectText}
          </Link>
        </Button>
      </CenterShortFormControl>
    </Container>
  );
};

export default LoginRegisterGenerator;
