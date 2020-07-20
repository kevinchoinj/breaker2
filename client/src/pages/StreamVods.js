import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import { setId } from 'actions/page';
import NavbarStream from 'components/navbar/NavbarStream';
import FetchVideos from 'components/stream/FetchVideos';
import VodsDisplay from 'components/stream/VodsDisplay';

const StyledWrapper = styled.div`
  height: 100%;
  flex: 1;
`;
const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  height:100%;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const StreamVods = ({match, setId}) => {
  useEffect(() => {
    setId(match.params.id);
  }, [match, setId]);
  return (
    <StyledWrapper>
      <FetchVideos/>
      <NavbarStream/>
      <StyledContainer>
        <VodsDisplay/>
      </StyledContainer>
    </StyledWrapper>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setId: (id) => dispatch(setId(id)),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(StreamVods));
