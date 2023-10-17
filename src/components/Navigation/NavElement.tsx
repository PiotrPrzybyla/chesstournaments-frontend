import React from "react";
import { NavLink } from "./styles";
import { MenuItem, Typography } from "@mui/material";
interface INavElementProps {
  name: string;
  link: string;
}

const NavElement: React.FC<INavElementProps> = ({ name, link }) => {
  return (
    <NavLink href={`${link}`}>
      <MenuItem key={name}>
        <Typography textAlign="center">{name}</Typography>
      </MenuItem>
    </NavLink>
  );
};

export default NavElement;
