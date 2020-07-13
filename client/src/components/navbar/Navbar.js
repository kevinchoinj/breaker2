import React from 'react';
import styled from 'styled-components';
import {Link, withRouter} from 'react-router-dom';
import OverflowMenu from 'components/navbar/OverflowMenu';
import {history} from 'store';

const StyledWrapper = styled.nav`
  border-bottom: ${props => props.theme.border};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  img {
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    justify-content: flex-end;
  }
`;
const StyledLogo = styled(Link)`
  padding: 0 2rem;
  margin: 0;
  font-size: 1.5rem;
  text-decoration: none;
  color: ${props => props.theme.colorText};
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const StyledContent = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
const StyledBlock = styled.div`
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  border-left: ${props => props.theme.border};
  &:hover {
    background-color: ${props => props.theme.colorText};
    fill: ${props => props.theme.colorBackground};
    color: ${props => props.theme.colorBackground};
  }
`;
const Navbar = ({location, setDark}) => {
  console.log(location);
  return (
    <StyledWrapper>
      <StyledLogo to="/">
        Breaker Breaker
      </StyledLogo>
      <StyledContent>
        {location.pathname !== "/" ?
          <OverflowMenu/>
          :
          <StyledBlock onClick={() => history.push('/ex')}>
            Ex.
          </StyledBlock>
        }
        <StyledBlock>
          Download
        </StyledBlock>
        <StyledBlock onClick={() => setDark(prev => !prev)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm2.312-4.897c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4-4 1.794-4 4zm10 0c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6 6 2.686 6 6z"/>
          </svg>
        </StyledBlock>
      </StyledContent>
    </StyledWrapper>
  )
}

export default withRouter(Navbar);