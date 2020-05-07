import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WebFont from 'webfontloader'
import { Provider } from 'react-redux';
import store from '../../store/index';
import Routes from "../../routes/index";

WebFont.load({
  google: {
    families: ['Saira', 'sans-serif']
  }
});

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
