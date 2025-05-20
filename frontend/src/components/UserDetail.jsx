import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
      <h3>{user.name}</h3>
      <p>ID: {user.id}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>TG: {user.tg}</p>
      {balance ? (
        <h3>Бонусов на балансе: {balance.balance}</h3>
      ) : (
        <p>Баланс не найден</p>
      )}
    </div>
  )
}

export default UserDetail