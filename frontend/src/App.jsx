import { Routes, Route, NavLink} from 'react-router-dom'
import UserForm from './components/UserForm'
import UsersPage from './components/UsersPage'
import BonusBalance from './components/BonusBalance'
import Transactions from './components/Transactions'
import AddBonusForm from './components/AddBonusForm'
import SpendBonusForm from './components/SpendBonusForm'



function App() {
  return (
    <div style={{ textAlign: 'center', padding: '30px', width: '100%' }}>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/users/:id?" element={<UsersPage />} />
        <Route path="/users/new" element={<UserForm />} />
        <Route path="/bonus-balances" element={<BonusBalance />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/users/:id/add-bonus" element={<AddBonusForm />} />
        <Route path="/users/:id/spend-bonus" element={<SpendBonusForm />} />
      </Routes>
    </div>
  )
}

export default App

