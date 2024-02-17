import React from "react";
import { DisabledNavLink, NavLink } from "./styles";
import { Typography } from "@mui/material";
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
      <Typography textAlign="center">{name}</Typography>
    </DisabledNavLink>
  ) : (
    <NavLink onClick={handleClickEnabled}>
      <Typography textAlign="center">{name}</Typography>
    </NavLink>
  );
};

export default NavElement;
