import { Routes, Route, Outlet } from 'react-router-dom'
import Index from './pages/Index'
import User from './pages/User'

function Root() {
  return (
    <div>
      <Outlet />
      <Routes>
        <Route index element={<Index />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </div>
  )
}

export default Root
