import React from 'react';
import { Paper, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function Widget({ id, onRemove, children }) {
  return (
    <Paper sx={{ p: 2, position: 'relative' }}>
      <IconButton onClick={() => onRemove(id)} sx={{ position: 'absolute', top: 0, right: 0 }}>
        <CloseIcon />
      </IconButton>
      {children ? children : <p>Widget content {id}</p>}
    </Paper>
  );
}

export default Widget;
