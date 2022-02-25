import Map from '../../components/Map'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './index.css'

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
        .then((apiData) => {
          setData([apiData]) // data is an array of one user, since Map is using .map()
          setStatus('loaded')
        })
        .catch(() => setStatus('error'))
    }
    getDataFromApi()
  }, [id])
  return (
    <div>
      {status === 'loaded' && (
        <Map
          users={data}
          zoom={18}
          center={[data[0].address.geo.lat, data[0].address.geo.lng]}
        />
      )}
      <div className="cards-wrapper">
        {(() => {
          switch (status) {
            case 'loading':
              return <p>Loading data *beep boop*</p>
            case 'loaded':
              return data.map((user) => (
                <ul key={user.id}>
                  <li>
                    <b>Name: </b>
                    {user.name}
                  </li>
                  <li>
                    <b>Username: </b>
                    {user.username}
                  </li>
                  <li>
                    <b>Email: </b>
                    {user.email}
                  </li>
                  <li>
                    <b>Address: </b>
                    {user.address.city} {user.address.street}{' '}
                    {user.address.suite} {user.address.zipcode} |{' '}
                    {user.address.geo.lat} {user.address.geo.lng}
                  </li>
                  <li>
                    <b>Phone: </b>
                    {user.phone}
                  </li>
                  <li>
                    <b>Website: </b>
                    {user.website}
                  </li>
                  <li>
                    <b>Company: </b>
                    <b>{user.company.name}</b> "{user.company.catchPhrase}"{' '}
                    <b>bs:</b> {user.company.bs}
                  </li>
                </ul>
              ))
            default:
              return <p>Something went wrong</p>
          }
        })()}
      </div>
    </div>
  )
}

export default User
