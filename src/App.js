import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Index from './pages/Index'
import User from './pages/User'
import Root from './Root'

function App() {
  const [data, setData] = useState([])
  const [status, setStatus] = useState('loading')

  let id = window.location.href.split('/').pop()
  if (!id) {
    id = ''
  }

  useEffect(() => {
    async function getDataFromApi() {
      await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.ok) {
            return res.json()
          } else {
            throw new Error('Something went wrong')
          }
        })
        .then((apiData) => {
          console.log(apiData)
          setData(apiData) // data is an array of one user, since Map is using .map()
          setStatus('loaded')
        })
        .catch(() => setStatus('error'))
    }
    getDataFromApi()
  }, [id])
  return (
    <>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Index data={data} status={status} />} />
          <Route
            path="user/:id"
            element={<User data={data} status={status} />}
          />
        </Route>
      </Routes>
    </>
  )
}

export default App
