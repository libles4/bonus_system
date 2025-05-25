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

  const deleteUser = async (userId) => {
    if (!window.confirm('Удалить пользователя?')) return

    const res = await fetch(`http://localhost:8000/api/users/${userId}`, {
      method: 'DELETE'
    })

    if (res.ok) {
      setUsers(users.filter(user => user.id !== userId))
    } else {
      alert('Ошибка при удалении')
    }
  }

  return (
    <div>
      <h3>Список пользователей</h3>
      <div style={{ marginBottom: '16px' }}>
        <Link to="/users/create" style={{ display: 'block' }}>
          <button style={{ width: '100%' }}>Создать пользователя</button>
        </Link>
      </div>
      <ul>
        {users.map(user => (
          <li key={user.id} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '8px',
            borderBottom: '1px solid #ccc',
            paddingBottom: '4px',
          }}>
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
            <button onClick={() => deleteUser(user.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
