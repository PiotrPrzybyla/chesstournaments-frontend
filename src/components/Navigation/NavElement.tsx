import React from "react";
import { DisabledNavLink, NavLink } from "./styles";
import { MenuItem, Typography } from "@mui/material";
interface INavElementProps {
  name: string;
  link: string;
  disabled?: boolean;
}

const NavElement: React.FC<INavElementProps> = ({ name, link, disabled }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (disabled) {
      e.preventDefault();
    }
  };
  return disabled ? (
    <DisabledNavLink href={`${link}`} onClick={handleClick}>
      <MenuItem key={name}>
        <Typography textAlign="center">{name}</Typography>
      </MenuItem>
    </DisabledNavLink>
  ) : (
    <NavLink href={`${link}`} onClick={handleClick}>
      <MenuItem key={name}>
        <Typography textAlign="center">{name}</Typography>
      </MenuItem>
    </NavLink>
  );
};

export default NavElement;
