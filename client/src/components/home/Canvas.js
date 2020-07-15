import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {
  Renderer,
  Program,
  Mesh,
  Geometry
} from "ogl";

const StyledContainer = styled.div`
  background-color: #fff;
  height: 100vh;
  canvas {
    left: 0;
    top: 0;
    position: fixed;
    opacity: .35;
  }
`;

const Home = () => {
  const containerRef = useRef(null);
  const [renderer] = useState(new Renderer({
    width: window.innerWidth,
    height: window.innerHeight,
  }));

  useEffect(() => {
  const gl = renderer.gl;
  containerRef.current.appendChild(gl.canvas);
  const geometry = new Geometry(gl, {
    position: {size: 2, data: new Float32Array([-1, -1, 3, -1, -1, 3])},
    uv: {size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2])},
  });
  const program = new Program(gl, {
    vertex: `
      attribute vec2 uv;
      attribute vec2 position;
      varying vec2 vUv;
      void main() {
          vUv = uv;
          gl_Position = vec4(position, 0, 1);
      }
    `,
    fragment: `
      precision highp float;
      uniform float uTime;
      varying vec2 vUv;
      void main() {
        gl_FragColor.rgb = vec3(0.8, 0.7, 1.0) + 0.3 * cos(vUv.xyx + uTime);
        gl_FragColor.a = 1.0;
      }
    `,
    uniforms: {
      uTime: {value: 0},
    },
  });

  const mesh = new Mesh(gl, {geometry, program});

  requestAnimationFrame(update);
  function update(t) {
    requestAnimationFrame(update);
    program.uniforms.uTime.value = t * 0.001;
    renderer.render({scene: mesh});
  }
  }, [])


  const recalculateCanvas = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
  }
  useEffect(() => {
    recalculateCanvas();
    window.addEventListener('resize', recalculateCanvas);
    return () => {
      window.removeEventListener("resize", recalculateCanvas);
    };
  }, []);


  return (
    <StyledContainer ref={containerRef}/>
  )
}


export default Home;