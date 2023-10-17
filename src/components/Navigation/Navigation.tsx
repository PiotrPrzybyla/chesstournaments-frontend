import React from "react";
import { Container, Grid, Toolbar } from "@mui/material";
import { useTranslation } from "react-i18next";
import { INavElement } from "./types";
import { LogoTypography, NavAppBar } from "./styles";
import NavElement from "./NavElement";

interface INavigationProps {}

const Navigation: React.FC<INavigationProps> = () => {
  const { t } = useTranslation("navigation");
  const pages: INavElement[] = t("pages", { returnObjects: true });
  return (
    <NavAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid
            container
            spacing={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid item>
              <Grid container direction={"row"} alignItems={"center"}>
                <LogoTypography>ChessTournaments</LogoTypography>
                {pages.map(({ name, link }: INavElement) => (
                  <NavElement name={name} link={link} />
                ))}
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction={"row"} alignItems={"center"}>
                <NavElement name={t("organizer")} link={"/organizer"} />
                <NavElement name={t("register")} link={"/register"} />
                <NavElement name={t("login")} link={"/login"} />
                <NavElement name={t("profile")} link={"/profile"} />
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </NavAppBar>
  );
};

export default Navigation;
