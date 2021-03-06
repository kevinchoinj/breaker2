import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import Store, { history } from './store';
import {Route} from 'react-router-dom';
import { init as initWebsocket } from 'components/stream/emitAction';

const StoreInstance = Store();

initWebsocket(StoreInstance, 'https://api.bb.johnpyp.net');

ReactDOM.render(
  <Provider store={StoreInstance}>
    <ConnectedRouter history={history}>
      <Route component={App} />
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'));