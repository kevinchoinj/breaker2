import React, {useEffect, useMemo, useRef, useState} from 'react';
import styled from 'styled-components';

const StyledBackground = styled.div`
  opacity: 0.5;
  position: absolute;
  top: -10px;
  left: -10px;
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95),
    opacity 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  pointer-events: none;
  background-image: url(${props => props.image});
`;
const StyledCard = styled.div`
  position: relative;
  flex: 0 0 280px;
  width: 280px;
  height: 540px;
  background-color: #333;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.66) 0 30px 60px 0;
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
`;
const StyledCardWrapper = styled.div`
  margin: 10px;
  transform: perspective(800px);
  position: relative;
  transform-style: preserve-3d;
  &:hover {
    ${StyledBackground} {
      transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1),
        opacity 5s cubic-bezier(0.23, 1, 0.32, 1);
      opacity: .8;
    }
    ${StyledCard} {
      transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 2s cubic-bezier(0.23, 1, 0.32, 1);
      box-shadow: rgba(255, 255, 255, 0.2) 0 0 40px 5px, rgba(0, 0, 0, 0.66) 0 30px 60px 0;
    }
  }
`;

const Card = ({image}) => {

  const cardRef = useRef(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(cardRef.current.offsetWidth);
    setHeight(cardRef.current.offsetHeight);

  }, [cardRef])

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e) => {
    console.log(cardRef.current.getBoundingClientRect(), 'cardRef.current.offsetLeft');
    setMouseX(e.pageX - cardRef.current.getBoundingClientRect().left - width/2);
    setMouseY(e.pageY - cardRef.current.getBoundingClientRect().top - height/2);
  }

  const mousePX = useMemo(() => {
    return mouseX/width;
  }, [mouseX, width]);
  const mousePY = useMemo(() => {
    return mouseY/width;
  }, [mouseY, width]);

  const cardTransform = useMemo(() => {
    const rX = mousePX * 5;
    const rY = mousePY * -5;
    return `rotateY(${rX}deg) rotateX(${rY}deg)`;
  })
  const cardBgTransform = useMemo(() => {
    const tX = mousePX * -5;
    const tY = mousePY * 5;
    return `rotateY(${tX}deg) rotateX(${tY}deg)`;
  })

  const [mouseLeaveDelay, setMouseLeaveDelay] = useState(null);
  const handleMouseEnter = () => {
    clearTimeout(mouseLeaveDelay);
  }
  const handleMouseLeave = () => {
    setMouseLeaveDelay(setTimeout(()=>{
      setMouseX(0);
      setMouseY(0);
    }, 1000));
  }
  return (
    <div>
      <StyledCardWrapper
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
        ref={cardRef}
      >
        <StyledCard
          style={{
            transform: cardTransform,
          }}
        >
          <StyledBackground
            image={image}
            style={{
              transform: cardBgTransform,
            }}
          />
        </StyledCard>

      </StyledCardWrapper>
    </div>
  )
}

export default Card;