import { Routes, Route, Outlet } from 'react-router-dom'
import Index from './pages/Index'
import User from './pages/User'

function Root() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#fff' }}>
        react-users-listing
      </h1>
      <Outlet />
      <Routes>
        <Route index element={<Index />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </div>
  )
}

export default Root
