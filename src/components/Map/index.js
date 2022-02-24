import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import '/node_modules/leaflet/dist/images/marker-icon.png'
import './index.css'

function Map({ users }) {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={2}
      style={{
        width: 'clamp(20rem, 90vw, 40rem)',
        height: '400px',
        marginBottom: '2vh',
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {console.log(users)}
      {users.map((user) => (
        <Marker
          key={user.username}
          position={[user.address.geo.lat, user.address.geo.lng]}
          icon={L.divIcon({
            iconSize: [32, 32],
            className: 'mymarker',
            html: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#000" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
          })}
        >
          <Popup>
            <h2>{user.username}</h2>
            <h3>{user.name}</h3>
            <p>
              {user.address.city}, {user.address.street} {user.address.suite}{' '}
              {user.address.zipcode}
            </p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default Map
