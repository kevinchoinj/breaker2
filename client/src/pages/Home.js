import React from 'react';
import styled from 'styled-components';
import mobilescreen from 'data/onlyfans.jpg';
import mobilescreentwo from 'data/onlyfans2.png';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const StyledContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
`;
const StyledObject = styled.div`
  flex: 1;
`;
const StyledLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
  img:first-child {
    position: absolute;
    left: -1.5rem;
    top: -1.5rem;
  }
  img:not(:first-child) {
    top: 1.5rem;
    left: 1.5rem;
    position: relative;
  }
`;

const Home = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledLeft>
          <img src={mobilescreentwo} alt="mobile screen"/>
          <img src={mobilescreen} alt="mobile screen two"/>
        </StyledLeft>
        <StyledObject>
          come back later >:(
        </StyledObject>
      </StyledContainer>
    </StyledWrapper>
  );
}

export default Home;
