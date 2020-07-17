import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.nav`
  height: 50px;
  width: 100%;
  background-color: #111;
  color: #ddd;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  font-weight: 700;
  border-bottom: 1px solid #000;
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const NavbarStream = () => {
  return (
    <StyledWrapper>
      Breaker Breaker
    </StyledWrapper>
  )
}

export default NavbarStream;
