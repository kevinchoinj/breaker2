import React, {useMemo} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {chat, setUsername} from 'actions/socket';
import {Formik, Form, Field} from 'formik';
import ChatMessages from 'components/stream/ChatMessages';

const StyledWrapper = styled.div`
  height: 100%;
  flex: 0 0 296px;
  border-left: ${props => props.theme.border};
  background-color: ${props => props.theme.colorBackground};
  display: flex;
  padding-bottom: 10px;
  flex-direction: column;
  font-size: 12px;
  @media screen and (max-width: 768px) {
    flex: 1.5;
    border-left: none;
    border-top: ${props => props.theme.border};
  }
`;
const StyledForm = styled(Form)`
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
    background-color: ${props => props.theme.colorInput};
    color: ${props => props.theme.colorText};
    border: 2px solid transparent;
    &:focus {
      border: 2px solid #9147ff;
      background-color: ${props => props.theme.colorInputFocus};
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
    background-color: ${props => props.theme.colorInput};
    border: 2px solid transparent;
    color: ${props => props.theme.colorText};
    &:focus {
      border: 2px solid #9147ff;
      background-color: ${props => props.theme.colorInputFocus};
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
    height: 31px;
    border-left: ${props => props.theme.border};
    &:hover {
      background-color: #772ce8;
    }
    &:disabled {
      background-color: #444;
      cursor: not-allowed;
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

const Chat = ({send, updateName, username}) => {

  const onEnterPress = (e, submitForm) => {
    if(e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      submitForm();
    }
  }

  const validUsername = useMemo (() => {
    if (username && username !== "" && username?.length < 32) {
      return true;
    }
    return false;
  });

  return (
    <StyledWrapper>
      <StyledHeader>
        STREAM CHAT
      </StyledHeader>
      <ChatMessages/>

      <Formik
        enableReinitialize
        initialValues={{
          message: '',
          username: '',
          }}
          onSubmit={(values, {resetForm}) => {
            if (values?.message?.length < 200) {
              send(values);
              resetForm();
            }
          }}
      >
        {({submitForm}) =>
          <StyledForm>
            <StyledInputTop>
              {validUsername &&
                <Field
                  component="textarea"
                  name="message"
                  placeholder="Message"
                  onKeyDown={(e) => onEnterPress(e, submitForm)}
                />
              }
            </StyledInputTop>
            <StyledInputBottom>
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => updateName({username: e.target.value})}
              />
              <button type="submit" disabled={!validUsername}>
                Chat
              </button>
            </StyledInputBottom>

          </StyledForm>
        }
      </Formik>
    </StyledWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    username: state.socket.username,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    send: (message) => dispatch(chat(message)),
    updateName: (name) => dispatch(setUsername(name)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Chat);