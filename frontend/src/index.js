//Practice makes perfect. If we code everyday, it will become a habit. NEED TO DO IT EVEN WHEN I DON'T FEEL IT AND REWARD MYSELF (LOOK FOR FEEDBACK)

// LOVE YOU, MARIO

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkoutsContextProvider } from './context/WorkoutContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WorkoutsContextProvider>
    <App />
    </WorkoutsContextProvider>
  </React.StrictMode>
);

