import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/fanta.css';
import './assets/App.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
