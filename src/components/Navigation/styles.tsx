import { styled } from "@mui/system";
import { AppBar, Link, ListItem, Typography } from "@mui/material";
export const NavLink = styled(Link)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#fff" : "#000",
  textDecoration: "none",
  width: "100%",
  padding: "0.625rem",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.palette.mode === "dark" ? "#444" : "#ccc",
  },
}));

export const NavListItem = styled(ListItem)({
  padding: "0",
});
export const DisabledNavLink = styled(Link)({
  textDecoration: "none",
  color: "grey",
});

export const NavAppBar = styled(AppBar)({});

export const LogoTypography = styled(Typography)({
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  textDecoration: "none",
  marginRight: "3.125rem",
});
