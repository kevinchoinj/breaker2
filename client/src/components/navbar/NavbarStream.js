import React from 'react';
import styled from 'styled-components';
import DarkToggle from 'components/navbar/DarkToggle';
import SettingsMenu from 'components/navbar/SettingsMenu';

const StyledWrapper = styled.nav`
  height: 50px;
  width: 100%;
  background-color: ${props => props.theme.colorBackground};
  color: ${props => props.theme.colorText};
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  border-bottom: ${props => props.theme.border};
  fill: ${props => props.theme.colorText};
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;
const StyledOptions = styled.div`
  display: flex;
  height: 100%;
`;

const NavbarStream = () => {
  return (
    <StyledWrapper>
      <div>
        Breaker Breaker
      </div>
      <StyledOptions>
        <SettingsMenu/>
      </StyledOptions>
    </StyledWrapper>
  )
}

export default NavbarStream;
