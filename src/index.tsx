import { Provider } from 'mobx-react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import App from './routers';
import './styles/animate.css';
import './styles/common.css';
import './styles/reset.css';
import { history } from './utils';

ReactDOM.render(
  <Provider>
    <Router history={history}>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
