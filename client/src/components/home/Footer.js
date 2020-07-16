import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledContainer = styled.div`
  max-width: 1080px;
  font-size: 13px;
  padding: 0 1rem;
  width: 100%;
  height: 100%;
  border-top: 1px solid #bbb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    margin: 0 1rem;
    text-decoration: none;
    color: #000;
  }
`;

const Footer = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <div>
        ©2020 Breaker Breaker
        </div>
        <div>
          <Link to="/">
            Misc
          </Link>
          •
          <Link to="/">
            Shit
          </Link>
          •
          <Link to="/">
            Down
          </Link>
          •
          <Link to="/">
            Here
          </Link>
        </div>
      </StyledContainer>
    </StyledWrapper>
  )
}

export default Footer;