import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import movieApp from './reducers';
import { MovieContainer, MovieDetail } from './containers';
import { DisplayMsg } from './components';
import './index.css';
import * as serviceWorker from './serviceWorker';

const routeMiddleware = routerMiddleware(hashHistory);

let store = createStore(movieApp, composeWithDevTools(applyMiddleware(thunkMiddleware, routeMiddleware)));
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} >
      <Route path="/" component={App}>
        <IndexRoute component={MovieContainer} />
        <Route path="/movie/:id" component={MovieDetail} />
        <Route path="*" component={DisplayMsg} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
