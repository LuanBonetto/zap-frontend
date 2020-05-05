import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from '../LoginPage'
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Saira', 'sans-serif']
  }
});

function App() {
  return (
    <div>
      <LoginPage />
    </div>
  );
}

export default App;
