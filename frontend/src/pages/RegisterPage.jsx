import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/register', { email, password });
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <TextField label="Email" value={email} onChange={e => setEmail(e.target.value)} fullWidth margin="normal" />
        <TextField label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} fullWidth margin="normal" />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>Register</Button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </Container>
  );
}

export default RegisterPage;
