import React, { useState } from 'react';
import { Button, Container, Grid } from '@mui/material';
import Widget from '../components/Widget';

function DashboardPage() {
  const [widgets, setWidgets] = useState([]);

  const addWidget = () => {
    setWidgets([...widgets, { id: Date.now() }]);
  };

  const removeWidget = (id) => {
    setWidgets(widgets.filter(w => w.id !== id));
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Button variant="contained" onClick={addWidget} sx={{ mb: 2 }}>Add Widget</Button>
      <Grid container spacing={2}>
        {widgets.map(w => (
          <Grid item key={w.id} xs={12} md={6} lg={4}>
            <Widget id={w.id} onRemove={removeWidget} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default DashboardPage;
