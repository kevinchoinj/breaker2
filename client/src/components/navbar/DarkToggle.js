import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {setDark} from 'actions/ui';

const StyledWrapper = styled.div`

  border: 2px solid ${props => props.theme.colorText};
  transition: .2s ease;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  z-index: 2;
  svg {
    height: 100%;
    width: 100%;
    transition: .2s ease;
    fill: ${props => props.theme.colorText};
  }
  &:hover {
    border: 2px solid ${props => props.theme.colorPrimary};
    svg {
      fill: ${props => props.theme.colorPrimary};
    }
  }
`;

const DarkToggle = ({dark, darkToggle}) => {
  return (
    <StyledWrapper onClick={() => darkToggle(!dark)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm2.312-4.897c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4-4 1.794-4 4zm10 0c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6 6 2.686 6 6z"/></svg>
    </StyledWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    dark: state.ui.dark,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    darkToggle: (val) => dispatch(setDark(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DarkToggle);
