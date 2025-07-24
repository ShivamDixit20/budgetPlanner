import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../supabaseClient'
import '../App.css';

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  const handleSignup = async () => {
    setErrorMsg('')
    setSuccessMsg('')

    if (!email || !password || !confirmPassword) {
      setErrorMsg('Please fill in all fields.')
      return
    }

    if (password !== confirmPassword) {
      setErrorMsg("Passwords don't match.")
      return
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      setErrorMsg(error.message)
    } else {
      setSuccessMsg('Signup successful! Check your email to verify your account.')
    }
  }

  return (
    <>
      <div className='signup'>
        <h1>Sign Up</h1>

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

        <label htmlFor="con-password">Confirm Password</label>
        <input
          id="con-password"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button onClick={handleSignup}>Sign Up</button>

        {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
        {successMsg && <p style={{ color: 'green' }}>{successMsg}</p>}

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </>
  )
}

export default Signup
