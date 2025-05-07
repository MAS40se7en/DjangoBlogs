import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home.tsx'
import { AuthLayout } from './layouts/AuthLayout.tsx'
import Login from './pages/Login.tsx'
import { Register } from './pages/Register.tsx'

const root = document.getElementById('root')

ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />

      <Route path='auth' element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
