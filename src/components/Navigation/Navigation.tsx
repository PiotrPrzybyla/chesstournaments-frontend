import React from "react";
import { Container, Grid, Toolbar } from "@mui/material";
import { useTranslation } from "react-i18next";
import { LogoTypography, NavAppBar } from "./styles";
import NavElement from "./NavElement";
import { useAuth } from "../../context/AuthContext";

interface INavigationProps {}

const Navigation: React.FC<INavigationProps> = () => {
  const { t } = useTranslation("navigation");
  const { isLoggedIn, isOrganizer } = useAuth();
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
                <NavElement name={t("tournaments")} link={"/tournaments"} />
                <NavElement
                  name={t("createTournament")}
                  link={"/createTournament"}
                  disabled={!isLoggedIn || !isOrganizer}
                />
                <NavElement
                  name={t("groups")}
                  link={"/groups"}
                  disabled={!isLoggedIn}
                />
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction={"row"} alignItems={"center"}>
                {isLoggedIn ? (
                  <>
                    <NavElement
                      name={t("organizer")}
                      link={`/organizer`}
                      disabled={!isLoggedIn || !isOrganizer}
                    />
                    <NavElement name={t("profile")} link={`/profile`} />
                  </>
                ) : (
                  <NavElement name={t("login")} link={"/login"} />
                )}
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </NavAppBar>
  );
};

export default Navigation;
