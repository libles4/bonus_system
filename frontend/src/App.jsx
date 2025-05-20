import { Routes, Route, NavLink} from 'react-router-dom'
import UserForm from './components/UserForm'
import UsersPage from './components/UsersPage'
import BonusBalance from './components/BonusBalance'
import Transactions from './components/Transactions'

const tabContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginBottom: '30px',
  borderBottom: '2px solid #eee',
}

const tabStyle = {
  padding: '10px 20px',
  textDecoration: 'none',
  color: '#555',
  fontWeight: '600',
  transition: 'border-color 0.3s, color 0.3s',
}

const activeTabStyle = {
  color: '#007bff',
  borderBottom: '4px solid transparent',
  borderBottomColor: '#007bff',
}

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '30px' }}>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/users/:id?" element={<UsersPage />} />
        <Route path="/users/new" element={<UserForm />} />
        <Route path="/bonus-balances" element={<BonusBalance />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </div>
  )
}

export default App

