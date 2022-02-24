import Map from './components/Map'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function User() {
  const [data, setData] = useState([])
  const [status, setStatus] = useState('loading')
  let { id } = useParams()

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
        .then((data) => {
          setData([data]) // data is an array of one user, since Map is using .map()
          setStatus('loaded')
        })
        .catch(() => setStatus('error'))
    }
    getDataFromApi()
  }, [id])
  return <div>{status === 'loaded' && <Map users={data} />}</div>
}

export default User
