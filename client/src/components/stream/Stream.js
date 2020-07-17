import React from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import SocketConnect from 'components/stream/SocketConnect';

const StyledWrapper = styled.div`
  height: 100%;
  flex: 1;
  background-color: ${props => props.theme.colorBackground};
`;
const Stream = () => {
  return (
    <StyledWrapper>
      <SocketConnect/>
    </StyledWrapper>
  )
}

export default withRouter(Stream);