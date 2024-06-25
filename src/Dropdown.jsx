import { createContext, useContext, useState } from "react";
import styled from "styled-components";

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledToggle = styled.button`
  padding: 1.2rem 2.4rem;
`;

const DropdownContext = createContext();

function Dropdown({ children }) {
  const [open, setOpen] = useState("");

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      {children}
    </DropdownContext.Provider>
  );
}

function Toggle() {
  const { open, setOpen } = useContext(DropdownContext);
  console.log(open, setOpen);
  return <StyledToggle>Dropdown</StyledToggle>;
}

Dropdown.Menu = Menu;
Dropdown.Toggle = Toggle;

export default Dropdown;
