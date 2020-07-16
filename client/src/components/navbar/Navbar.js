import React from 'react';
import styled from 'styled-components';
import {Link, withRouter} from 'react-router-dom';
const StyledWrapper = styled.nav`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  font-weight: 700;
  img {
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    justify-content: flex-end;
  }
`;
const StyledContainer = styled.div`
  width: 100%;
  max-width: 1080px;
  display: flex;
  justify-content: space-between;
`;
const StyledLogo = styled(Link)`
  padding: 0 2rem;
  margin: 0;
  font-size: 1.5rem;
  text-decoration: none;
  color: #000;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Navbar = ({location, setDark}) => {
  console.log(location);
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledLogo to="/">
          Breaker Breaker
        </StyledLogo>
      </StyledContainer>
    </StyledWrapper>
  )
}

export default withRouter(Navbar);