import React, {useMemo} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {chat, setUsername} from 'actions/socket';
import {Formik, Form, Field} from 'formik';
import ChatMessages from 'components/stream/ChatMessages';
import {setExpandedChat} from 'actions/ui';

const StyledWrapper = styled.div`
  height: 100%;
  flex: 0 0 296px;
  border-left: ${props => props.theme.border};
  background-color: ${props => props.theme.colorBackground};
  display: ${props => props.hidden ? 'none' : 'flex'};
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
  position: relative;
  svg {
    fill: ${props => props.theme.colorText};
    left: 10px;
    position: absolute;
    height: 18px;
    cursor: pointer;
    transition: .2s ease;
    &:hover {
      fill: ${props => props.theme.colorPrimary};
    }
  }
`;

const Chat = ({expandedChat, send, slug, toggleExpandedChat, updateName, username}) => {

  const onEnterPress = (e, submitForm) => {
    if(e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      submitForm();
    }
  }

  const validUsername = useMemo (() => {
    if (username && username !== "" && username?.length < 32) {
      return true;
    }
    return false;
  }, [username]);

  return (
    <StyledWrapper hidden={!expandedChat}>
      <StyledHeader>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        onClick={() => toggleExpandedChat(false)}>
          <path d="M12 8v-5l9 9-9 9v-5h-12v-8h12zm12-4h-3v16h3v-16z"/>
        </svg>
        STREAM CHAT
      </StyledHeader>
      <ChatMessages/>

      <Formik
        enableReinitialize
        initialValues={{
          message: '',
          username: '',
          slug: slug,
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
                onChange={(e) => updateName({username: e.target.value, slug: slug})}
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
    expandedChat: state.ui.expandedChat,
    slug: state.page.id,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    send: (message) => dispatch(chat(message)),
    updateName: (name) => dispatch(setUsername(name)),
    toggleExpandedChat: (bool) => dispatch(setExpandedChat(bool)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);