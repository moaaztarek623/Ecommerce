import { CgFacebook } from "react-icons/cg"; 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@material-tailwind/react';
import { Provider } from 'react-redux'
import store from './Redux/store'

ReactDOM.render(
  <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);