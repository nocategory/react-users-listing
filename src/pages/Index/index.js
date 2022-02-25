import './index.css'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import Map from '../../components/Map'

const Index = (props) => {
  const { data, status } = props
  return (
    <div className="app">
      {status === 'loaded' && <Map users={data} />}
      <div className="cards-wrapper">
        {(() => {
          switch (status) {
            case 'loading':
              return <p>Loading data *beep boop*</p>
            case 'loaded':
              return data.map((user) => (
                <Link to={`/user/${user.id}`} key={user.id}>
                  <Card user={user} key={user.id} />
                </Link>
              ))
            default:
              return <p>Something went wrong</p>
          }
        })()}
      </div>
    </div>
  )
}

export default Index
