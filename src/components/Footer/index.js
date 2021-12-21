import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  height: 8%;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: #f1fff1;
  background-color: #252525;
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 1.2rem;
`;

const index = () => {
  return <FooterContainer>@2022, Built with ❤️ by Rita Gujar</FooterContainer>;
};

export default index;
