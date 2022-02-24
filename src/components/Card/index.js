import './index.css'

function Card({ user }) {
  return (
    <div className="card">
      <p>{user.username}</p>
      <p>{user.name}</p>
      <a href={`https://${user.website}`}>{user.website}</a>
    </div>
  )
}

export default Card
