import Map from '../../components/Map'
import './index.css'

function User({ data, status }) {
  return (
    <div>
      {status === 'loaded' && (
        <Map
          users={data}
          zoom={18}
          center={[data.address.geo.lat, data.address.geo.lng]}
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
                    <b>ID: </b>
                    {user.id}
                  </li>
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
