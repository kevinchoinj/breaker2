import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  height: 100%;
  flex: 0 0 296px;
  border-left: ${props => props.theme.border};
  background-color: ${props => props.theme.colorBackground};
  display: flex;
  flex-direction: column;
  font-size: 12px;
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
  flex: 0 0 100px;
  display: flex;
  flex-direction: column;
`;
const StyledInputTop = styled.div`
  flex: 1;
  padding: 10px 10px 0 10px;
  textarea {
    height: 100%;
    width: 100%;
    resize: none;
    outline: none;
    border: none;
    font-size: 12px;
    padding: 5px;
    border-radius: 5px;
    background-color: #3a3a3d;
    color: ${props => props.theme.colorText};
    border: 2px solid transparent;
    &:focus {
      border: 2px solid #9147ff;
      background-color: #000;
    }
  }
`;
const StyledInputBottom = styled.div`
  display: flex;
  padding: 10px;
  input, button{
    height: 100%;
    border: none;
  }
  input {
    flex: 1 1;
    outline: none;
    font-size: 12px;
    padding: 5px;
    border-radius: 5px;
    background-color: #3a3a3d;
    border: 2px solid transparent;
    color: ${props => props.theme.colorText};
    &:focus {
      border: 2px solid #9147ff;
      background-color: #000;
    }
  }
  button {
    margin-left: 10px;
    font-weight: 700;
    background-color: #9147ff;
    color: #fff;
    border-radius: 5px;
    font-size: 12px;
    padding: 0 10px;
    cursor: pointer;
    outline: none;
    border-left: ${props => props.theme.border};
    &:hover {
      background-color: #772ce8;
    }
  }
`;
const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 0;
  color: ${props => props.theme.colorText};
  font-weight: 700;
  border-bottom: ${props => props.theme.border};
`;
const Chat = () => {
  return (
    <StyledWrapper>
      <StyledHeader>
        STREAM CHAT
      </StyledHeader>
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