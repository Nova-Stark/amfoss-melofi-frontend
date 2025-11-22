import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home.jsx'
import Player from './pages/Player.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Player />
 </StrictMode>
)
