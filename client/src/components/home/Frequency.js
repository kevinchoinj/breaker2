import React, {useRef, useLayoutEffect, useState} from 'react';
import styled from 'styled-components';

//https://github.com/facebook/react/issues/14195
//useMutationEffect removed: https://github.com/facebook/react/pull/14336
const useAnimationFrame = callback => {
  const callbackRef = useRef(callback);
  useLayoutEffect(
    () => {
      callbackRef.current = callback;
    },
    [callback]
  );

  const loop = () => {
    frameRef.current = requestAnimationFrame(
      loop
    );
    const cb = callbackRef.current;
    cb();
  };

  const frameRef = useRef();
  useLayoutEffect(() => {
    frameRef.current = requestAnimationFrame(
      loop
    );
    return () =>
      cancelAnimationFrame(frameRef.current);
  });
};

let DEFAULT_XS = [];
for (var i = 0; i <= 500; i++) {
  DEFAULT_XS.push(i);
}

const StyledSvg = styled.svg`
  width: 100%;
  height: 200px;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  @media screen and (max-height: 650px) {
    display: none;
  }
`;
const StyledPath = styled.path`
  stroke: #2727e6;
  stroke-width: 10px;
  stroke-linecap: round;
  fill: none;
`;

const Frequency = () => {

  const [xs, setXs] = useState(DEFAULT_XS);
  const [t, setT] = useState(0);

  const animate = () => {
    let points = xs.map(x => {
      let y = 100 + 20 * Math.sin((x + t) / 10);
      return [x, y];
    });
    let path = 'M' + points.map(p => {
      return p[0] + ',' + p[1];
    }).join(' L');
    pathRef.current.setAttribute('d', path);
    setT(prev => prev + 0.5);
  }

  useAnimationFrame(() => {
    animate();
  });

  const pathRef = useRef(null);

  return (
    <StyledSvg>
      <StyledPath d="M10,10 L50,100 L90,50" ref={pathRef}>
      </StyledPath>
    </StyledSvg>

  )
}

export default Frequency;