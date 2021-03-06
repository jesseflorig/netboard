import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./theme"
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
