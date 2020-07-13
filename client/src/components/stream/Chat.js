import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  height: 100%;
  flex: 0 0 296px;
  border-left: ${props => props.theme.border};
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    flex: 1;
    border-left: none;
    border-top: ${props => props.theme.border};
  }
`;
const StyledLogs = styled.div`
  flex: 1;
`;
const StyledInputWrapper = styled.form`
  flex: 0 0 200px;
  border-top: ${props => props.theme.border};
  display: flex;
  flex-direction: column;
`;
const StyledInputTop = styled.div`
  flex: 1;
  textarea {
    height: 100%;
    width: 100%;
    resize: none;
    outline: none;
    border: none;
    font-size: 1rem;
    padding: 10px;
  }
`;
const StyledInputBottom = styled.div`
  flex: 0 0 50px;
  display: flex;
  border-top: ${props => props.theme.border};
  input, button{
    height: 100%;
    border: none;
  }
  input {
    flex: 1;
    outline: none;
    font-size: 1rem;
    padding: 0 10px;
  }
  button {
    background-color: ${props => props.theme.colorText};
    color: ${props => props.theme.colorBackground};
    font-size: 1rem;
    padding: 0 1rem;
    cursor: pointer;
    outline: none;
    border-left: ${props => props.theme.border};
    &:hover {
      color: ${props => props.theme.colorText};
      background-color: ${props => props.theme.colorBackground};
    }
  }
`;

const Chat = () => {
  return (
    <StyledWrapper>
      <StyledLogs>
        Chat
      </StyledLogs>
      <StyledInputWrapper>
        <StyledInputTop>
          <textarea placeholder="Message"/>
        </StyledInputTop>
        <StyledInputBottom>
          <input type="text" placeholder="Username"/>
          <button type="submit">
            Chat
          </button>
        </StyledInputBottom>
      </StyledInputWrapper>
    </StyledWrapper>
  )
}

export default Chat;