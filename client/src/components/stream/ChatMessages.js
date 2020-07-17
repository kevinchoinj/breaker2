import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding: 10px;
  color: ${props => props.theme.colorText};
  flex: 1;
  overflow-y: auto;
  font-size:48px;
`;
const ChatMessages = ({chat}) => {
  const chatRef = useRef(null);
  const scrollToBottom = () => {
		chatRef.current.scrollTop = chatRef.current.scrollHeight;
	};
  useEffect(() => {
    scrollToBottom();
  }, [chat])
  return (
    <StyledWrapper ref={chatRef}>
      {chat.map((values) => {
          return (
            <div>
              <b>{values.username}</b>: {values.message}
            </div>
          )
        }
      )}
    </StyledWrapper>
  )
}


const mapStateToProps = (state) => {
  return {
    chat: state.socket.chat,
  };
};

export default connect(mapStateToProps, null)(ChatMessages);
