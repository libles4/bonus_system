import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function UserList() {
  const [users, setUsers] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetch('http://localhost:8000/api/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h3>Список пользователей</h3>
      <ul>
        {users.map(user => (
          <li key={user.id} style={{ marginBottom: '8px' }}>
            <Link
              to={`/users/${user.id}`}
              style={{
                textDecoration: 'none',
                color: id === String(user.id) ? 'black' : 'blue',
                fontWeight: id === String(user.id) ? 'bold' : 'normal',
              }}
            >
              ID: {user.id} | {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
