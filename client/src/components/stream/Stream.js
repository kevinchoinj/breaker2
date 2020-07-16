import React from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';

const StyledWrapper = styled.div`
  height: 100%;
  flex: 1;
  background-color: ${props => props.theme.colorBackground};
`;
const Stream = () => {
  return (
    <StyledWrapper>
    </StyledWrapper>
  )
}

export default withRouter(Stream);