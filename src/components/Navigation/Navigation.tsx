import React from "react";
import { Container, Grid, Toolbar } from "@mui/material";
import { useTranslation } from "react-i18next";
import { INavElement } from "./types";
import { LogoTypography, NavAppBar } from "./styles";
import NavElement from "./NavElement";
import { getUserId } from "../../utils/getUserId";
import { getOrganizerId } from "../../utils/getOrganizerId";
import { useAuth } from "../../context/AuthContext";

interface INavigationProps {}

const Navigation: React.FC<INavigationProps> = () => {
  const { t } = useTranslation("navigation");
  const pages: INavElement[] = t("pages", { returnObjects: true });
  const user_id = getUserId();
  const organizerId = getOrganizerId();
  const { isLoggedIn } = useAuth();
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
                {pages.map(({ name, link }: INavElement, index) => (
                  <NavElement name={name} link={link} key={index} />
                ))}
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction={"row"} alignItems={"center"}>
                {isLoggedIn ? (
                  <>
                    <NavElement
                      name={t("organizer")}
                      link={`/organizer/${organizerId}`}
                    />
                    <NavElement
                      name={t("profile")}
                      link={`/profile/${user_id}`}
                    />
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
