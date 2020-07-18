import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import SocketConnect from 'components/stream/SocketConnect';
import VideoPlayer from 'components/stream/VideoPlayer';
import videojs from "video.js";

const StyledWrapper = styled.div`
  height: 100%;
  flex: 1;
  background-color: ${props => props.theme.colorBackground};
`;
const Stream = ({slug}) => {
  return slug ? (
    <StyledWrapper>
      <SocketConnect/>
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
  ) : null
}

const mapStateToProps = (state) => {
  return {
    slug: state.page.id,
  };
};

export default connect(mapStateToProps, null)(Stream);
