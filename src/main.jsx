import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AppDay1 from'./day-1-component.jsx'
import AppDay2 from'./day-2-conditional-render.jsx'
import UserListToggle from'./day-3-useState-and-eventHandling.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Halaman Utama: localhost:5173/ */}
        <Route path="/" element={<App />} />
        
        {/* Halaman Day 1: localhost:5173/day1 */}
        <Route path="/day1" element={<AppDay1 />} />

        {/* halaman day 2: conditional render */}
        <Route path="/day2" element={<AppDay2 />} />

        {/* halaman day 3: useState and event handling */}
        <Route path="/day3" element={<UserListToggle />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
