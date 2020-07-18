import React, {useState, useEffect, useRef} from 'react';
import videojs from "video.js";
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  >div {
    height: 100%;
    width: 100%;
  }
`;
const VideoPlayer = ({options}) => {
  const videoRef = useRef(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    if (videoRef.current) {
      setPlayer(videojs(videoRef.current, options, function onPlayerReady() {
        console.log('onPlayerReady');
      }))
    }
    return () => {
      if (player) {
        player.dispose();
      }
    }
  }, [videoRef]);

  return (
    <StyledWrapper>
      <video ref={videoRef} className="video-js">
      </video>
    </StyledWrapper>
  )
}

export default VideoPlayer;