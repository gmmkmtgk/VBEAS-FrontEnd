import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//REDUX
import { Provider } from "react-redux";
import { store } from "./redux/store";
// import { PersistGate } from "redux-persist/integration/react";

//React Router Dom
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
      <Router>
        <App />
      </Router>
  </Provider>,
  document.getElementById('root')
);
