import React, { useState } from 'react';
import Button from '../Button/Button';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Send Email and Password to Backend

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input 
          name="email"
          type="email" 
          placeholder="Email" 
          onChange={e => setEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input 
          name="password" 
          type="password" 
          placeholder="Password" 
          onChange={e => setPassword(e.target.value)} />
        <Button value="Submit"></Button>
      </form>
    </div>
  )
}

export default Login;