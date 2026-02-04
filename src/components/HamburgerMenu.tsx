import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import type { JSX } from "react";

export default function HamburgerMenu(): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick} size="large" aria-label="menu">
        <MenuIcon />
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <a href="#inicio">Início</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="#historia">Nossa História</a>
        </MenuItem>
        <MenuItem href="#produtos" onClick={handleClose}>
          <a href="#produtos">Produtos</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="#diferenciais">Diferenciais</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="#entregas"></a>Entregas
        </MenuItem>
      </Menu>
    </>
  );
}
