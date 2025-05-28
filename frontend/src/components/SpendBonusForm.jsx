import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function SpendBonusForm() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [amount, setAmount] = useState('')
  const [reason, setReason] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

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
          bonus_type_id: 6,   // ← актуальный ID
          type: 'spend',
          amount: parseFloat(amount),
          reason,             // ручной текст причины
          status: 'active',
        }),
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Ошибка списания бонусов')

      alert('Бонусы успешно списаны')
      navigate(`/users/${id}`)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '20px auto' }}>
      <h2>Списать бонусы пользователю #{id}</h2>

      <div style={{ marginBottom: '10px' }}>
        <label>Сумма:</label>
        <input
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          required
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Причина списания:</label>
        <textarea
          value={reason}
          onChange={e => setReason(e.target.value)}
          style={{ width: '100%', padding: '8px' }}
          rows={3}
          placeholder="Укажите причину списания"
          required
        />
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit" disabled={loading} style={{ padding: '10px 20px' }}>
        {loading ? 'Списание...' : 'Списать бонусы'}
      </button>
    </form>
  )
}

export default SpendBonusForm
