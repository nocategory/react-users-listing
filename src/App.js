import './App.css'
import { useState, useEffect } from 'react'
import Card from './components/Card'
import Map from './components/Map'

const App = () => {
  const [data, setData] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    async function getDataFromApi() {
      await fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
          if (res.ok) {
            return res.json()
          } else {
            throw new Error('Something went wrong')
          }
        })
        .then((data) => {
          setData(data)
          setStatus('loaded')
        })
        .catch(() => setStatus('error'))
    }
    getDataFromApi()
  }, [])
  return (
    <div className="app">
      {status === 'loaded' && <Map users={data} />}
      <div className="cards-wrapper">
        {(() => {
          switch (status) {
            case 'loading':
              return <p>Loading data *beep boop*</p>
            case 'loaded':
              return data.map((user) => <Card key={user.id} user={user} />)
            default:
              return <p>Something went wrong</p>
          }
        })()}
      </div>
    </div>
  )
}

export default App
