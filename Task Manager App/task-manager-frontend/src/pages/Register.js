import { useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setErrorMsg('Password must be at least 6 characters long.');
      return;
    }

    try {
      await API.post('/auth/register', { email, password });
      setErrorMsg('');
      navigate('/login');
    } catch (err) {
      if (err.response?.data?.errors) {
        const messages = err.response.data.errors.map(e => e.msg).join('\n');
        setErrorMsg(messages);
      } else {
        setErrorMsg('Registration failed. Please try again.');
      }
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errorMsg && <div style={{ color: 'red' }}>{errorMsg}</div>}
      <button type="submit">Register</button>
    </form>
  );
}
