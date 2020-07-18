import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import SettingsMenu from 'components/navbar/SettingsMenu';
import {Link, withRouter} from 'react-router-dom';

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
  align-items: center;
  a {
    text-decoration: none;
    color: ${props => props.theme.colorText};
    margin: 0 1rem;
    font-weight: 400;
  }
`;
const StyledLogo = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colorText};
`;
const StyledLinks = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 1rem;
  font-size: 13px;
`;
const StyledLink = styled(Link)`
  opacity: ${props => props['data-active'] && '.6'};
  cursor: ${props => props['data-active'] && 'default'};
`;

const NavbarStream = ({id, match}) => {
  return (
    <StyledWrapper>
      <StyledLogo to="/">
        Breaker Breaker
      </StyledLogo>
      <StyledOptions>
        <StyledLinks>
          <StyledLink to={`/${id}`} data-active={match.path === "/:id"}>
            Stream
          </StyledLink>
          <StyledLink to={`/${id}/videos`} data-active={match.path === "/:id/videos"}>
            Videos
          </StyledLink>
        </StyledLinks>
        <SettingsMenu/>
      </StyledOptions>
    </StyledWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    id: state.page.id,
  };
};

export default connect(mapStateToProps, null)(withRouter(NavbarStream));
