import React, { useState } from "react";
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth } from "../../context/AuthContext";
import NavElement from "./NavElement";
import { LogoTypography } from "./styles";

interface INavigationProps {}

const Navigation: React.FC<INavigationProps> = () => {
  const { t } = useTranslation("navigation");
  const { isLoggedIn, isOrganizer } = useAuth();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>

        <Drawer anchor="top" open={drawerOpen} onClose={handleDrawerToggle}>
          <List>
            <ListItem>
              <LogoTypography>ChessTournaments</LogoTypography>
            </ListItem>
            <ListItem button onClick={handleDrawerToggle}>
              <NavElement name={t("tournaments")} link={"/tournaments"} />
            </ListItem>
            <ListItem button onClick={handleDrawerToggle}>
              <NavElement
                name={t("createTournament")}
                link={"/createTournament"}
                disabled={!isLoggedIn || !isOrganizer}
              />
            </ListItem>
            {/* <ListItem button onClick={handleDrawerToggle}>
              <NavElement
                name={t("groups")}
                link={"/groups"}
                disabled={!isLoggedIn}
              />
            </ListItem> */}
            {isLoggedIn ? (
              <>
                <ListItem button onClick={handleDrawerToggle}>
                  <NavElement
                    name={t("organizer")}
                    link={`/organizer`}
                    disabled={!isLoggedIn || !isOrganizer}
                  />
                </ListItem>
                <ListItem button onClick={handleDrawerToggle}>
                  {" "}
                  <NavElement name={t("profile")} link={`/profile`} />
                </ListItem>
              </>
            ) : (
              <ListItem button onClick={handleDrawerToggle}>
                {" "}
                <NavElement name={t("login")} link={"/login"} />
              </ListItem>
            )}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
