import React, { useState } from 'react';
import { Box, Tabs, Tab, ToggleButtonGroup, ToggleButton, Typography, Stack } from '@mui/material';
import SidebarDrawer from '../components/SidebarDrawer';
import PlannerPanel from '../components/PlannerPanel';
import AppointmentCard from '../components/AppointmentCard';
import CancelledVisitsCard from '../components/CancelledVisitsCard';

const appointments = [
  { name: 'Jane Doe', role: 'Designer', location: 'NYC', date: 'Aug 12', time: '10:00' },
  { name: 'John Smith', role: 'Engineer', location: 'LA', date: 'Aug 13', time: '14:00' },
];

const Dashboard: React.FC = () => {
  const [dayTab, setDayTab] = useState(0);
  const [subTab, setSubTab] = useState('upcoming');

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: '72px 320px 1fr', minHeight: '100vh' }}>
      <SidebarDrawer />
      <Box>
        <PlannerPanel />
      </Box>
      <Box sx={{ p: 2 }}>
        <Tabs value={dayTab} onChange={(_, v) => setDayTab(v)} centered>
          <Tab label="Today" />
          <Tab label="Tomorrow" />
        </Tabs>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
          <Typography variant="h6" fontWeight={700}>Interview Appointments</Typography>
          <Typography variant="body2">Sort by ▾</Typography>
        </Box>
        <ToggleButtonGroup
          color="primary"
          value={subTab}
          exclusive
          onChange={(_, v) => v && setSubTab(v)}
          sx={{ mt: 2, mb: 2 }}
        >
          <ToggleButton value="upcoming">Upcoming</ToggleButton>
          <ToggleButton value="past">Past</ToggleButton>
        </ToggleButtonGroup>
        <Stack direction="row" spacing={3} overflow="auto" px={1}>
          {appointments.map((a) => (
            <AppointmentCard key={a.name} {...a} />
          ))}
        </Stack>
        <Box sx={{ mt: 4 }}>
          <CancelledVisitsCard />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
