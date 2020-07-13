import React, {useEffect, useRef, useState} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {history} from 'store';

const StyledLineOne = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: ${props => props.menuDisplay ? 'translate(-50%, -50%) rotate(-45deg)' : 'translate(-50%, -40%) rotate(90deg) scaleY(0.7)'};
  height: 40px;
  width: 3px;
  background-color: #000;
  transition: all 0.5s cubic-bezier(0.000, 0.785, 0.000, 1.000);
`;
const StyledLineTwo = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: ${props => props.menuDisplay ? 'translate(-50%, -50%) rotate(45deg)' : 'translate(-50%, -60%) rotate(90deg) scaleY(0.7)'};
  height: 40px;
  width: 3px;
  background-color: #000;
  transition: all 0.5s cubic-bezier(0.000, 0.785, 0.000, 1.000);
`;
const StyledBlock = styled.div`
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  position: relative;
  border-left: ${props => props.theme.border};
  &:hover {
    background-color: ${props => props.theme.colorText};
    fill: ${props => props.theme.colorBackground};
    color: ${props => props.theme.colorBackground};
    ${StyledLineOne}, ${StyledLineTwo} {
      background-color: ${props => props.theme.colorBackground};
    }
  }
`;

const StyledLinkWrapper = styled.div`
  position: absolute;
  top: 100%;
  right: -3px;
  border: ${props => props.theme.border};
  background-color: ${props => props.theme.colorBackground};
  color: ${props => props.theme.colorText};
`;
const StyledLink = styled.div`
  padding: 1rem 2rem;
  &:not(:last-child) {
    border-bottom: ${props => props.theme.border};
  }
  &:hover {
    background-color: ${props => props.theme.colorText};
    fill: ${props => props.theme.colorBackground};
    color: ${props => props.theme.colorBackground};
  }
`;

const OverflowMenu = ({id}) => {
  const [active, setActive] = useState(false);
  const menuRef = useRef(null);
  const closeMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setActive(false);
    }
  };
  const toggleMenu = (e) => {
    e.preventDefault();
    setActive(prev => !prev);
  };

  useEffect(() => {
    document.addEventListener("click", closeMenu, false);
    return () => {
      document.removeEventListener("click", closeMenu, false);
    };
  }, []);
  return (
    <StyledBlock ref={menuRef} onClick={(e) => toggleMenu(e)}>
      <StyledLineOne menuDisplay={active}/>
      <StyledLineTwo menuDisplay={active}/>

      {active &&
        <StyledLinkWrapper>
          <StyledLink onClick={() => history.push(`/${id}`)}>
            Stream
          </StyledLink>
          <StyledLink onClick={() => history.push(`/${id}/vods`)}>
            Vods
          </StyledLink>
        </StyledLinkWrapper>
      }
    </StyledBlock>
  )
}
const mapStateToProps = (state) => {
  return {
    id: state.page.id,
  };
};

export default connect(mapStateToProps, null)(OverflowMenu);
