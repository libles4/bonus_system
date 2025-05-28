import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function UserDetail() {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const [balance, setBalance] = useState(null)

  useEffect(() => {
    // Загружаем данные пользователя
    fetch(`http://localhost:8000/api/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))

    // Загружаем его баланс (пример, если фильтровать по user_id)
    fetch(`http://localhost:8000/api/bonus_balances?user_id=${id}`)
      .then(res => res.json())
      .then(data => setBalance(data[0])) // предполагаем, что один баланс
  }, [id])

  if (!user) return <p>Загрузка...</p>

  return (
    <div>
      <h3>Информация о пользователе</h3>

      <h4>{user.name}</h4>
      <p>ID: {user.id}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>TG: {user.tg}</p>
      <div style={{ marginBottom: '16px' }}>
        <Link to="" style={{ display: 'block' }}>
          <button style={{ width: '100%' }}>Изменить данные</button>
        </Link>
      </div>
      {balance ? (
        <h3>Бонусов на балансе: {balance.balance}</h3>
      ) : (
        <p>Баланс не найден</p>
      )}

      
      <div style={{ marginTop: '20px' }}>
        <Link to={`/users/${user.id}/add-bonus`} style={{ display: 'block' }}>
          <button style={{ width: '100%' }}>Начислить бонусы</button>
        </Link>
      </div>
        <Link to={`/users/${user.id}/spend-bonus`} style={{ display: 'block' }}>
          <button style={{ width: '100%', marginTop: '10px' }}>Списать бонусы</button>
        </Link>
    </div>
    
  )
}

export default UserDetail