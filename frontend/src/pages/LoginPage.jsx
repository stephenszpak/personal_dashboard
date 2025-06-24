import React, { useState, useContext } from 'react';
import { TextField, Button, Container } from '@mui/material';
import { AuthContext } from '../App';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/login', { email, password });
      setUser(res.data.user);
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <TextField label="Email" value={email} onChange={e => setEmail(e.target.value)} fullWidth margin="normal" />
        <TextField label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} fullWidth margin="normal" />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>Login</Button>
      </form>
      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </Container>
  );
}

export default LoginPage;
