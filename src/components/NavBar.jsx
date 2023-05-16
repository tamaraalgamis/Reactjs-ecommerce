import React from "react";
import CartWidget from "./CartWidget";
import { Button, ButtonGroup } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <div>
      <h1>Fashion E-commerce</h1>
      <ButtonGroup gap="4">
        <Button colorScheme="blackAlpha">Jeans</Button>
        <Button colorScheme="blackAlpha">Chompas</Button>
        <Button colorScheme="blackAlpha">Tops</Button>
      </ButtonGroup>

      <CartWidget />
    </div>
  );
};

export default NavBar;
