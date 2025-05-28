import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function UserForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    tg: '',
  });

  const [status, setStatus] = useState(null); // Для вывода сообщений

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      const res = await fetch('http://localhost:8000/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('Пользователь успешно создан!');
        setForm({ name: '', email: '', phone: '', tg: '' });
      } else {
        const data = await res.json();
        setStatus('Ошибка: ' + (data.message || 'не удалось создать пользователя'));
      }
    } catch (error) {
      setStatus('Ошибка сети: ' + error.message);
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: 'auto', textAlign: 'left' }}>
    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginBottom: 20 }}>
      <Link to="/" style={{ display: 'block' }}>
        <button type="button" onClick={() => navigate('/')} style={{ padding: '6px 12px' }}>
            ← Назад
        </button>
      </Link>
      <h2 style={{ margin: 0 }}>Форма пользователя</h2>
    </div>
      <label>
        Имя:<br />
        <input 
          type="text" 
          name="name" 
          value={form.name} 
          onChange={handleChange} 
          required 
          style={{ width: '100%', marginBottom: 12 }}
        />
      </label>

      <label>
        Email:<br />
        <input 
          type="email" 
          name="email" 
          value={form.email} 
          onChange={handleChange} 
          required 
          style={{ width: '100%', marginBottom: 12 }}
        />
      </label>

      <label>
        Телефон:<br />
        <input 
          type="tel" 
          name="phone" 
          value={form.phone} 
          onChange={handleChange} 
          style={{ width: '100%', marginBottom: 12 }}
        />
      </label>

      <label>
        Telegram (tg):<br />
        <input 
          type="text" 
          name="tg" 
          value={form.tg} 
          onChange={handleChange} 
          required 
          style={{ width: '100%', marginBottom: 12 }}
        />
      </label>

      <button type="submit" style={{ padding: '8px 16px', width: '100%'}}>Добавить пользователя</button>

      {status && <p style={{ marginTop: 12 }}>{status}</p>}
    </form>
    </div>
  );
}

export default UserForm;
