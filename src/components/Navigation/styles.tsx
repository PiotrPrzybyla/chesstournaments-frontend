import { styled } from "@mui/system";
import { AppBar, Link, Typography } from "@mui/material";
export const NavLink = styled(Link)({
  textDecoration: "none",
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
  marginRight: "50px",
});
