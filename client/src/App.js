import React from 'react';
import {connect} from 'react-redux';
import Home from 'pages/Home';
import Stream from 'pages/Stream';
import StreamVods from 'pages/StreamVods';
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components';
import {lightData, darkData} from 'data/themeData';
import {Switch, Route} from 'react-router-dom';
import "react-toggle/style.css";

const StyledWrapper = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const GlobalStyle = createGlobalStyle`
  html, #root {
    height: 100%;
  }
  body {
    background-color:${props => props.theme.colorBackground};
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
`;

const App = ({dark}) => {
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

const mapStateToProps = (state) => {
  return {
    dark: state.page.dark,
  };
};

export default connect(mapStateToProps, null)(App);
