import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";

import { StyledButton, NavigationBarStyle } from "./NavigationBar.style";
import { CartItemType } from "../App";

type Props = {
  setCartOpenHandler: () => void;
  getTotalItems: (items: CartItemType[]) => number;
  cartItems: CartItemType[];
};

const NavigationBar: React.FC<Props> = ({
  setCartOpenHandler,
  getTotalItems,
  cartItems,
}) => {
  return (
    <NavigationBarStyle>
      <AppBar position="fixed">
        <Toolbar className="navigationBar">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Shopping Cart</Typography>
          <StyledButton onClick={() => setCartOpenHandler()}>
            <Badge badgeContent={getTotalItems(cartItems)} color="error">
              <AddShoppingCartIcon />
            </Badge>
          </StyledButton>
        </Toolbar>
      </AppBar>
    </NavigationBarStyle>
  );
};

export default NavigationBar;
