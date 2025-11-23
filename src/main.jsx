import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home.jsx'
import Player from './pages/Player.jsx';
import Profile from './pages/Profile.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Player />
 </StrictMode>
)
