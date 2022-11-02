//Practice makes perfect. If we code everyday, it will become a habit. NEED TO DO IT EVEN WHEN I DON'T FEEL IT AND REWARD MYSELF (LOOK FOR FEEDBACK)

// LOVE YOU, MARIO

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkoutsContextProvider } from './context/WorkoutContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <WorkoutsContextProvider>
      <App />
      </WorkoutsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

