import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
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
      <Typography variant="h5" gutterBottom>Register</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Email" value={email} onChange={e => setEmail(e.target.value)} fullWidth margin="normal" />
        <TextField label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} fullWidth margin="normal" />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>Register</Button>
      </form>
      <Typography variant="body2" sx={{ mt: 2 }}>Already have an account? <Link to="/login">Login</Link></Typography>
    </Container>
  );
};

export default Register;
