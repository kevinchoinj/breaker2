import React, {useEffect, useRef, useState} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import Toggle from 'react-toggle';
import {setDark, setTimestamps} from 'actions/page';

const StyledBlock = styled.div`
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  svg {
    transition: .6s ease;
    transform: ${props => props['data-active'] && 'rotate(90deg)'};
  }
  &:hover {
    fill: ${props => props.theme.colorPrimary};
  }
`;

const StyledLinkWrapper = styled.div`
  cursor: default;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: ${props => props.theme.colorBackground};
  color: ${props => props.theme.colorText};
  border: ${props => props.theme.border};
  font-size: 12px;
  width: 296px;
  z-index: 2;
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  padding: 10px;
`;
const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 0;
  color: ${props => props.theme.colorText};
  font-weight: 700;
  border-bottom: ${props => props.theme.border};
`;

const SettingsMenu = ({
  dark,
  darkToggle,
  timestamps,
  timestampsToggle,
}) => {
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
    <StyledBlock ref={menuRef} onClick={(e) => toggleMenu(e)} data-active={active}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/></svg>
      {active &&
        <StyledLinkWrapper>
          <StyledHeader>
            SETTINGS
          </StyledHeader>
          <StyledRow>
            Darkmode
            <Toggle
              checked={dark}
              onChange={() => darkToggle(!dark)}
            />
          </StyledRow>
          <StyledRow>
          Timestamps
            <Toggle
              checked={timestamps}
              onChange={() => timestampsToggle(!timestamps)}
            />
          </StyledRow>
        </StyledLinkWrapper>
      }
    </StyledBlock>
  )
}

const mapStateToProps = (state) => {
  return {
    dark: state.page.dark,
    timestamps: state.page.timestamps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    darkToggle: (val) => dispatch(setDark(val)),
    timestampsToggle: (val) => dispatch(setTimestamps(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsMenu);
