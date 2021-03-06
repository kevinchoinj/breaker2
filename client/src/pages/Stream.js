import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import { setId } from 'actions/page';
import StreamComponent from 'components/stream/Stream';
import Chat from 'components/stream/Chat';
import NavbarStream from 'components/navbar/NavbarStream';
import SocketConnect from 'components/stream/SocketConnect';
import FetchLive from 'components/stream/FetchLive';
import ExpandChat from 'components/stream/ExpandChat';

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
`;
const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  height:100%;
  overflow: hidden;
  position: relative;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Stream = ({match, setId}) => {
  useEffect(() => {
    setId(match.params.id);
  }, [match])
  return (
    <StyledWrapper>
      <FetchLive/>
      <SocketConnect/>
      <NavbarStream/>
      <StyledContainer>
        <StreamComponent/>
        <Chat/>
        <ExpandChat/>
      </StyledContainer>
    </StyledWrapper>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setId: (id) => dispatch(setId(id)),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(Stream));
