import React from 'react';
import { Card, Grid, Typography, IconButton, Box } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const CancelledVisitsCard: React.FC = () => (
  <Card
    sx={{
      bgcolor: 'secondary.main',
      color: '#fff',
      position: 'relative',
    }}
  >
    <Box sx={{ position: 'absolute', top: 8, right: 8, display: 'flex', gap: 0.5 }}>
      {[1,2,3].map(n => (
        <FiberManualRecordIcon key={n} fontSize="small" sx={{ opacity: 0.3 }} />
      ))}
    </Box>
    <Grid container alignItems="center">
      <Grid item xs>
        <Typography variant="h6" fontWeight={700}>Cancelled Visits</Typography>
      </Grid>
      <Grid item>
        <IconButton sx={{ bgcolor: '#fff', color: 'secondary.main', width: 32, height: 32 }}>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Grid>
    </Grid>
  </Card>
);

export default CancelledVisitsCard;
