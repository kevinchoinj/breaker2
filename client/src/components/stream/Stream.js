import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import VideoPlayer from 'components/stream/VideoPlayer';
import videojs from "video.js";

const StyledWrapper = styled.div`
  height: 100%;
  flex: 1;
  background-color: ${props => props.theme.colorBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colorText};
`;
const Stream = ({live, slug}) => {
  if (live === 'live'){
    return (
      <StyledWrapper>
        <VideoPlayer
          options={
            {
              autoplay: true,
              controls: true,
              html5: {
                hls: {
                  overrideNative: !videojs.browser.IS_SAFARI,
                  handlepartialdata: true
                },
                nativeAudioTracks: false,
                nativeVideoTracks: false
              },
              sources: [
                {
                  src: `https://api.bb.johnpyp.net/streams/${slug}/index.m3u8`,
                  type: "application/vnd.apple.mpegurl"
                }
              ]
            }
          }
        />
      </StyledWrapper>
    )
  }
  else if (live === 'notLive') {
    return (
      <StyledWrapper>
        (placeholder for not live)
      </StyledWrapper>
    )
  }
  else if (live === 'notExists') {
    return (
      <StyledWrapper>
        (placeholder for not exists)
      </StyledWrapper>
    )
  }
  return (
    <StyledWrapper>
    </StyledWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    live: state.data.live,
    slug: state.page.id,
  };
};

export default connect(mapStateToProps, null)(Stream);
