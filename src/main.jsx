import { StrictMode, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Pages/home/App/App'
import { WaggonContext } from './Context/Context'


createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    
    <App />
    
  </StrictMode>,
)
