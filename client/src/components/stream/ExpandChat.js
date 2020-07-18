import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {setExpandedChat} from 'actions/ui';

const StyledWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  display: ${props => props.hidden && 'none'};
  fill: ${props => props.theme.colorText};
  transform: rotate(180deg);
  svg {
    height: 18px;
    cursor: pointer;
    transition: .2s ease;
    &:hover {
      fill: ${props => props.theme.colorPrimary};
    }
  }
`;

const ExpandChat = ({expandedChat, toggleExpandedChat}) => {
  return (
    <StyledWrapper hidden={expandedChat}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
      onClick={() => toggleExpandedChat(true)}>
        <path d="M12 8v-5l9 9-9 9v-5h-12v-8h12zm12-4h-3v16h3v-16z"/>
      </svg>
    </StyledWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    expandedChat: state.ui.expandedChat,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleExpandedChat: (bool) => dispatch(setExpandedChat(bool)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpandChat);