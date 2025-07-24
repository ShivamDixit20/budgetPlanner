import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../supabaseClient'
import '../App.css';
import { UserLogedinContext } from '../context/UserLogedin';

const Login = () => {
  const {setUser} = useContext(UserLogedinContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const navigate = useNavigate()

  const handleLogin = async () => {
    setErrorMsg('')

    if (!email || !password) {
      setErrorMsg('Please enter both email and password.')
      return
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setErrorMsg(error.message)
    } else {
      setUser(prev => !prev)
      navigate('/dashboard')
    }
  }

  return (
    <>
      <div>
        <div className='login'>
          <h1>Log In</h1>

          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleLogin}>Log In</button>

          {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}

          <p>
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login
