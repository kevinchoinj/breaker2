import React from 'react';
import {Link} from 'react-router-dom';
import Canvas from 'components/home/Canvas';
import styled from 'styled-components';
import mobilescreen from 'data/onlyfans.jpg';
import gplay from 'data/gplay.png';
import Image from 'components/home/Image';
import Footer from 'components/home/Footer';
import Navbar from 'components/navbar/Navbar';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #fff;
`;
const StyledContainer = styled.div`
  max-width: 1080px;
  width: 100%;
  max-height: 100%;
  display: grid;
  position: relative;
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
    font-size: 5rem;
    font-weight: 700;
    margin: 0 0 1rem 0;
  }
  @media screen and (max-width: 768px) {
    padding-right: 0;
    padding: 0 1rem;
    h1 {
      font-size: 3.5rem;
    }
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
    border-radius: 20px;
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
const StyledDownload = styled.img`
  height: 4rem;
  margin-top: 4rem;
  cursor: pointer;
  align-self: flex-start;
`;
const Home = () => {
  return (
    <StyledWrapper>
      <Navbar/>
      <Canvas/>
      <StyledContainer>
        <StyledLeft>
          <StyledLeftContent>
            <Image image={mobilescreen}/>
          </StyledLeftContent>
        </StyledLeft>
        <StyledRight>
          <h1>
            Simply Stream.
          </h1>
          <p>
            Today's video is sponsored by Raid Shadow Legends, one of the biggest mobile role-playing games of 2019 and it's totally free!
          </p>
          <Link to="/SystemNameUntil">
            <StyledDownload src={gplay} alt="download"/>
          </Link>
        </StyledRight>
      </StyledContainer>
      <Footer/>
    </StyledWrapper>
  );
}

export default Home;
