
import UserDetail from './UserDetail'
import UserList from './UserList'
import Transactions from './Transactions'
import { useParams } from 'react-router-dom'

function UsersPage() {
  const { id } = useParams()

  return (
    <div
      style={{
        display: 'flex',
        minWidth: '900px',
        margin: 'auto',
        gap: '40px',
        textAlign: 'left',
      }}
    >
      <div style={{ flex: 1, borderRight: '1px solid #ccc', borderLeft: '5px solid #ccc', paddingLeft: '20px', paddingRight: '20px' }}>
        <UserList />
      </div>

      <div style={{ flex: 1, borderRight: '1px solid #ccc', paddingRight: '20px' }}>
        {id ? <UserDetail /> : <p>Выберите пользователя из списка</p>}
      </div>
      <div style={{ flex: 1, borderRight: '5px solid #ccc', paddingRight: '20px' }}>
        {id ? <Transactions /> : <p>Выберите пользователя из списка</p>}
      </div>
    </div>
  )
}

export default UsersPage