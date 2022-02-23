import { useEffect } from 'react'
import './index.css'

function Card({ user }) {
  useEffect(() => {
    console.log(user)
  }, [user])
  return (
    <div className="card">
      <p>{user.username}</p>
      <p>{user.name}</p>
      <a href={`https://${user.website}`}>{user.website}</a>
    </div>
  )
}

export default Card
