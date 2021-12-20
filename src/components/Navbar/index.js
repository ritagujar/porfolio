import React from "react";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  color: #f1fff1;
  background-color: #252525;
  height: 4rem;
  position: sticky;
  top: 0;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
`;

const LogoText = styled.h1`
  margin: auto 0;
  cursor: pointer;
  font-weight: 400;
  font-size: 1.7rem;
  align-self: center;
`;

const Menu = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
`;

const MenuItem = styled.li`
  font-size: 1.2rem;
  cursor: pointer;
  margin-left: 3rem;
`;

const index = () => {
  return (
    <StyledNavbar>
      <LogoText>Rita Gujar</LogoText>
      <Menu>
        <MenuItem>Blog</MenuItem>
        <MenuItem>Project</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Menu>
    </StyledNavbar>
  );
};

export default index;
