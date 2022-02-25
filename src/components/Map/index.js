import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './index.css'

function Map({ users, zoom = 2, center = [0, 0] }) {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      maxZoom={18}
      style={{
        width: 'clamp(20rem, 90vw, 50rem)',
        height: '500px',
        marginBottom: '2vh',
        borderRadius: '0.5rem',
        border: '1px solid #495057',
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        subdomains={['a', 'b', 'c', 'd']}
      />
      {users.map((user) => (
        <Marker
          key={user.username}
          position={[user.address.geo.lat, user.address.geo.lng]}
          icon={L.divIcon({
            iconSize: [32, 32],
            className: 'mymarker',
            html: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#fff" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
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
