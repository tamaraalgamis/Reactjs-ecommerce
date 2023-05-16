import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

const CartWidget = () => {
  return (
    <div className="cart">
      <Button colorScheme="teal" size="sm">
        <span className="material-symbols-outlined">shopping_cart</span>
        <span>4</span>
      </Button>
    </div>
  );
};

export default CartWidget;
