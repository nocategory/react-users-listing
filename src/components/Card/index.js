import './index.css'

function Card({ user }) {
  return (
    <div className="card">
      <p>{user.username}</p>
      <p>{user.name}</p>
      <p>{user.website}</p>
    </div>
  )
}

export default Card
