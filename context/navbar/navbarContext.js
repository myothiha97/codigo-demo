import { createContext } from "react";

const NavbarContext = createContext({
  isActive: false,
  toggleActive: () => {},
});

export default NavbarContext;
