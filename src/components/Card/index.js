import { useEffect } from 'react'
import './index.css'

function Card({ user }) {
  useEffect(() => {
    console.log(user)
  }, [user])
  return (
    <div className="card">
      <p>TEST</p>
    </div>
  )
}

export default Card
