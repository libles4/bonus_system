import React, { useEffect, useState  } from "react"
import { useParams } from 'react-router-dom'

// Transactions.jsx
function Transactions() {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const [transactions, setTransactions] = useState([])

  useEffect(() =>  {
    fetch(`http://localhost:8000/api/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))

    fetch(`http://localhost:8000/api/bonus_transactions?user_id=${id}`)
      .then(res => res.json())
      .then(data => setTransactions(data)) 
  }, [id])

  if (!user) return <p>Загрузка...</p>

  return ( 
  <div>
    <h3>Совершенные транзакции</h3>
    
    {transactions.length > 0 ? (
      <ul>
        {transactions.map(transaction => (
        <li key={transaction.id} style={{ marginBottom: '8px' }}>
            <b>{new Date(transaction.created_at).toLocaleDateString('ru-RU')} ({new Date(transaction.created_at).toLocaleTimeString('ru-RU')})</b> 
            {transaction.type === "accrual" ? ("+") : ("-")} {transaction.amount} {transaction.bonus_type?.name}
        </li>))}
      </ul>
    ) : (
      <p>Нет совершенных транзакций</p>
    )}
  </div>
  )
}

export default Transactions