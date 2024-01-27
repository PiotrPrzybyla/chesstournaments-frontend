import React, { ReactNode } from "react";
import Navigation from "../Navigation/Navigation";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "../../styles/Theme";
import { CssBaseline } from "@mui/material";

interface IUIGeneratorProps {
  children: ReactNode;
}

const UIGenerator: React.FC<IUIGeneratorProps> = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navigation />
      {children}
    </ThemeProvider>
  );
};

export default UIGenerator;
