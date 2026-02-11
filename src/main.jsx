import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AppDay1 from'./day-1-component.jsx'
import AppDay2 from'./day-2-conditional-render.jsx'
import UserListToggle from'./day-3-useState-and-eventHandling.jsx'
import UserManager from'./day-4-useState-ARRAY-OBJECT.jsx'
import FetchUserData from'./day-5-useEffect-lifecycle-fetchData.jsx'
import UserForm from'./day-6-form-input-controlledComponent.jsx'
import AppUserManager from './day-7-MINI PROJECT USER MANAGER APP/userManagerApp.jsx'
// import AppDay20Task from './day-8-react-memo.jsx'
import AppDay9 from './day-9-hook.jsx'
import FetchUsersSafe from './day-10-error-handling.jsx'

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

        {/* halaman day 4: useState with array and object */}
        <Route path="/day4" element={<UserManager />} />

        {/* halaman day 5: useEffect, lifecycle, fetch data */}
        <Route path="/day5" element={<FetchUserData />} />

        {/* halaman day 6: form input controlled component */}
        <Route path="/day6" element={<UserForm />} />

        {/* halaman day 7: mini project user manager app */}
        <Route path="/day7" element={<AppUserManager />} />

        {/* halaman day 8: react.memo */}
        {/* <Route path='/day8' element={<AppDay20Task />} /> */}

        {/* halaman day 9: hook */}
        <Route path="/day9" element={<AppDay9 />} />

        {/* halaman day 10: error handling*/}
        <Route path="/day10" element={<FetchUsersSafe />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
