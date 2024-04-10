import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1048129708172-6qb3rtjtdpin8l8ftr7ihj51hvl80dps.apps.googleusercontent.com"><App /></GoogleOAuthProvider>;
  </React.StrictMode>,
)
