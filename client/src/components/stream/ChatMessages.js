import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {format} from 'date-fns';

const StyledWrapper = styled.div`
  padding: 10px;
  color: ${props => props.theme.colorText};
  flex: 1;
  overflow-y: auto;
  font-size: 12px;
  word-break: break-word;
`;
const StyledRow = styled.div`
  padding: 4px 0;
`;
const StyledTimestamp = styled.span`
  margin-right: 5px;
  opacity: .5;
`;

const ChatMessages = ({chat, timestamps}) => {
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
          <StyledRow key={`${values.timestamp}-${values.username}`}>
            {timestamps &&
              <StyledTimestamp>
                {format(values.timestamp, 'HH:MM')}
              </StyledTimestamp>
            }
            <b>{values.username}</b>: {values.message}
          </StyledRow>
        )}
      )}
    </StyledWrapper>
  )
}


const mapStateToProps = (state) => {
  return {
    chat: state.socket.chat,
    timestamps: state.page.timestamps,
  };
};

export default connect(mapStateToProps, null)(ChatMessages);
