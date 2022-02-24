import { Routes, Route, Outlet } from 'react-router-dom'
import App from './App'
import User from './User'

function Root() {
  return (
    <div>
      <Outlet />
      <Routes>
        <Route index element={<App />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </div>
  )
}

export default Root
