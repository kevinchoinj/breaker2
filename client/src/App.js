import React, {useState} from 'react';
import Home from 'pages/Home';
import Stream from 'pages/Stream';
import StreamVods from 'pages/StreamVods';
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components';
import {lightData, darkData} from 'data/themeData';
import {Switch, Route} from 'react-router-dom';
import Navbar from 'components/navbar/Navbar';

const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const GlobalStyle = createGlobalStyle`
  html, #root {
    height: 100%;
  }
  body {
    margin: 0;
    height: 100%;
    font-family: ${props => props.theme.fontMain};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  * {
    box-sizing: border-box;
  }
  button, input, textarea {
    font-family: ${props => props.theme.fontMain};
  }
`

const App = () => {
  const [dark, setDark] = useState(true);
  return (
    <ThemeProvider theme={dark ? darkData : lightData}>
      <GlobalStyle/>
      <StyledWrapper>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props}/>}/>
          <Route exact path="/:id/vods" render={(props) => <StreamVods {...props}/>}/>
          <Route exact path="/:id" render={(props) => <Stream {...props}/>}/>
        </Switch>
      </StyledWrapper>
    </ThemeProvider>
  );
}

export default App;
