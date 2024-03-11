import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Auth0Provider
    domain="dev-spgtplnzvs7tyejk.us.auth0.com"
    clientId="szAycWeYU35FJ5t1GW3A631ThP59ENpo"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}> */}
    <App/>
  {/* </Auth0Provider> */}
  </React.StrictMode>
);
