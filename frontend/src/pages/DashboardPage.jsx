import React, { useState } from 'react';
import { Button, Container, Grid } from '@mui/material';
import Widget from '../components/Widget';
import DefaultWidget from '../components/DefaultWidget';

function DashboardPage() {
  const [widgets, setWidgets] = useState([{ id: 'default', type: 'default' }]);

  const addWidget = () => {
    setWidgets([...widgets, { id: Date.now(), type: 'generic' }]);
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
            {w.type === 'default' ? (
              <DefaultWidget id={w.id} onRemove={removeWidget} />
            ) : (
              <Widget id={w.id} onRemove={removeWidget} />
            )}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default DashboardPage;
