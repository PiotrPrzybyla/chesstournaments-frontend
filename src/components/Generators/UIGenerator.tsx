import React, { ReactNode } from "react";
import Navigation from "../Navigation/Navigation";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "../../styles/Theme";
import { CssBaseline, useMediaQuery } from "@mui/material";
import MobileNavigation from "../Navigation/MobileNavigation";

interface IUIGeneratorProps {
  children: ReactNode;
}

const UIGenerator: React.FC<IUIGeneratorProps> = ({ children }) => {
  const isMobile = useMediaQuery("(max-width:1024px)");
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {isMobile ? <MobileNavigation /> : <Navigation />}
      {children}
    </ThemeProvider>
  );
};

export default UIGenerator;
