import React, { useState, useContext } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { AuthContext } from '../App';
import { WeatherContext } from '../contexts/WeatherContext';

function TopNavBar() {
  const { user, setUser } = useContext(AuthContext);
  const { now, weather } = useContext(WeatherContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setUser(null);
    handleClose();
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex' }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" component="div">
            Placeholder
          </Typography>
        </Box>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', gap: 1, px: 2, py: 0.5, borderRadius: 2, border: 1, bgcolor: 'background.paper', color: 'text.primary' }}>
            <Typography>{now.toLocaleDateString()}</Typography>
            <Typography>{now.toLocaleTimeString()}</Typography>
            <Typography>{weather ? `${weather.temperature}°F` : '--°F'}</Typography>
          </Box>
        </Box>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          {user && (
            <Typography sx={{ mr: 2 }}>{user.email}</Typography>
          )}
          <IconButton color="inherit" onClick={handleMenu} aria-label="settings">
            <SettingsIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Config Option</MenuItem>
            {user && <MenuItem onClick={handleLogout}>Logout</MenuItem>}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopNavBar;
