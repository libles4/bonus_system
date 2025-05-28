import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function AddBonusForm() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [user, setUser] = useState(null)
  const [amount, setAmount] = useState('')
  const [reason, setReason] = useState('')
  const [bonusTypes, setBonusTypes] = useState([])         // список типов бонусов
  const [selectedBonusType, setSelectedBonusType] = useState('') // выбранный ID типа бонуса
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:8000/api/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(() => setUser(null))

    // Загрузка списка типов бонусов
    fetch('http://localhost:8000/api/bonus_types')
      .then(res => res.json())
      .then(data => {
        setBonusTypes(data)
        if (data.length > 0) setSelectedBonusType(data[0].id) // по умолчанию выбрать первый
      })
      .catch(() => setBonusTypes([]))
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const response = await fetch('http://localhost:8000/api/bonus_transactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: id,
          bonus_type_id: selectedBonusType,
          type: 'accrual',
          amount: parseFloat(amount),
          reason,
          status: 'active',
        }),
      })

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error || 'Ошибка при начислении бонусов')
      }

      alert('Бонусы успешно начислены')
      navigate(`/users/${id}`)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (!user) return <p>Загрузка пользователя...</p>

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '20px auto' }}>
      <h2>Начислить бонусы пользователю {user.name} (ID: {id})</h2>

      <div style={{ marginBottom: '10px' }}>
        <label>Сумма бонусов:</label>
        <input
          type="number"
          step="0.01"
          min="0"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          required
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Тип бонуса:</label>
        <select
          value={selectedBonusType}
          onChange={e => setSelectedBonusType(e.target.value)}
          style={{ width: '100%', padding: '8px' }}
          required
        >
          {bonusTypes.map(type => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Причина (необязательно):</label>
        <textarea
          value={reason}
          onChange={e => setReason(e.target.value)}
          style={{ width: '100%', padding: '8px' }}
          rows={3}
        />
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit" disabled={loading} style={{ padding: '10px 20px' }}>
        {loading ? 'Начисление...' : 'Начислить'}
      </button>
    </form>
  )
}

export default AddBonusForm
