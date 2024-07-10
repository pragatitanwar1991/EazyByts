import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <audio src="https://soundcloud.com/parth-mehta-793335998/aahatein-instrumental?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" autoplay></audio>
    <App />
  </BrowserRouter>
);


