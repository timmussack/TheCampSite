import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './components/App.jsx';
import store from './store/store.js';

const root = createRoot(document.getElementById('root'));

root.render(
  <GoogleOAuthProvider clientId="995989545965-ca7jae8mdka93jd7pj9f6v553onf846p.apps.googleusercontent.com">
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </GoogleOAuthProvider>,
);
