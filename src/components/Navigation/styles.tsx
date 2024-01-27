import { styled } from "@mui/system";
import { AppBar, Link, Typography } from "@mui/material";
export const NavLink = styled(Link)({
  color: "#ffffff",
  textDecoration: "none",
});
export const DisabledNavLink = styled(Link)({
  color: "#555555",
  textDecoration: "none",
});

export const NavAppBar = styled(AppBar)({
  backgroundColor: "#000000",
});

export const LogoTypography = styled(Typography)({
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
  marginRight: "50px",
});
