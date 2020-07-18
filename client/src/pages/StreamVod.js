import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import { setId } from 'actions/page';
import NavbarStream from 'components/navbar/NavbarStream';
import FetchVideos from 'components/stream/FetchVideos';
import VideoPlayer from 'components/stream/VideoPlayer';

const StyledWrapper = styled.div`
  display: flex;
  height: 100%;
  height: 100vh;
  color: ${props => props.theme.colorText};
  flex-direction: column;
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
const StreamVod = ({match, setId}) => {
  useEffect(() => {
    setId(match.params.id);
  }, [match])
  console.log(match);
  return (
    <StyledWrapper>
      <FetchVideos/>
      <NavbarStream/>
      <StyledContainer>
        <VideoPlayer
          options={
            {
              autoplay: true,
              controls: true,
              sources: [
                {
                  src: `https://api.bb.johnpyp.net/vods/${match.params.id}/${match.params.videoId}.mp4`,
                  type: "video/mp4"
                }
              ]
            }
          }
        />
      </StyledContainer>
    </StyledWrapper>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setId: (id) => dispatch(setId(id)),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(StreamVod));
