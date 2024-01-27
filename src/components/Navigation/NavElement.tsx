import React from "react";
import { DisabledNavLink, NavLink } from "./styles";
import { MenuItem, Typography } from "@mui/material";
import { useNavigate } from "react-router";
interface INavElementProps {
  name: string;
  link: string;
  disabled?: boolean;
}

const NavElement: React.FC<INavElementProps> = ({ name, link, disabled }) => {
  const navigate = useNavigate();
  const handleClickDisabled = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
  };
  const handleClickEnabled = () => {
    navigate(link);
  };
  return disabled ? (
    <DisabledNavLink onClick={handleClickDisabled}>
      <MenuItem key={name}>
        <Typography textAlign="center">{name}</Typography>
      </MenuItem>
    </DisabledNavLink>
  ) : (
    <NavLink onClick={handleClickEnabled}>
      <MenuItem key={name}>
        <Typography textAlign="center">{name}</Typography>
      </MenuItem>
    </NavLink>
  );
};

export default NavElement;
