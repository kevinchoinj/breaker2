import React from 'react';
import styled from 'styled-components';
import Frequency from 'components/home/Frequency';
import mobilescreen from 'data/onlyfans.jpg';
import mobilescreentwo from 'data/onlyfans2.png';
import gplay from 'data/gplay.png';

const StyledWrapper = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  overflow: hidden;
`;
const StyledContainer = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  &:first-child {
    border-right: ${props => props.theme.border};
    @media screen and (max-width: 768px) {
      border-right: none;
      border-bottom: ${props => props.theme.border};
    }
  }
`;
const StyledContainerRight = styled(StyledContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const StyledText = styled.div`
  font-size: 6vw;
  padding: 2rem;
  @media screen and (max-width: 768px) {
    font-size: 4rem;
    padding: 0 2rem;
  }
`;
const StyledImageWrapper = styled.div`
  position: relative;
  img {
    left: 1.5rem;
    top: 1.5rem;
    max-height: 100%;
    border: ${props => props.theme.border};
    position: relative;
  }
  img:first-child {
    position: absolute;
    left: -1.5rem;
    top: -1.5rem;
  }
`;
const StyledDownload = styled.img`
  height: 4rem;
  padding: 0 2rem;
  margin-top: 4rem;
  cursor: pointer;
`;

const Hero = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <Frequency/>
        <StyledText>
          Simply<br/>
          Stream.
        </StyledText>
        <StyledDownload src={gplay} alt="download"/>
      </StyledContainer>
      <StyledContainerRight>
        <StyledImageWrapper>
          <img src={mobilescreentwo} alt="mobile screen"/>
          <img src={mobilescreen} alt="mobile screen two"/>
        </StyledImageWrapper>
      </StyledContainerRight>
    </StyledWrapper>
  )
}

export default Hero;