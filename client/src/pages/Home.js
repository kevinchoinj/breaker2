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
  max-width: 1080px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const StyledRight = styled.div`
  flex: 1;
  padding-right: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  p {
    font-size: 1.2rem;
  }
  h1 {
    font-size: 6rem;
    font-weight: 700;
    margin: 0 0 2rem 0;
  }
  @media screen and (max-width: 768px) {
    padding-right: 0;
    padding: 0 1rem;
  }
`;
const StyledLeftContent = styled.div`
  position: relative;
`;
const StyledLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
  img {
    border-radius: 8px;
  }
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
          <StyledLeftContent>
            <img src={mobilescreentwo} alt="mobile screen"/>
            <img src={mobilescreen} alt="mobile screen two"/>
          </StyledLeftContent>
        </StyledLeft>
        <StyledRight>
          <h1>
            Simply Stream.
          </h1>
          <p>
            Today's video is sponsored by Raid Shadow Legends, one of the biggest mobile role-playing games of 2019 and it's totally free!
          </p>
        </StyledRight>
      </StyledContainer>
    </StyledWrapper>
  );
}

export default Home;
