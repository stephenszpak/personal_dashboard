import React from 'react';
import {
  Card,
  Avatar,
  Typography,
  Stack,
  Button,
  Box,
} from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface AppointmentCardProps {
  name: string;
  role: string;
  location: string;
  date: string;
  time: string;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ name, role, location, date, time }) => (
  <Card
    sx={{
      width: 280,
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform .2s',
      '&:hover': {
        transform: 'translateY(-3px) scale(1.01)',
      },
    }}
  >
    <Stack direction="row" spacing={2} alignItems="center">
      <Avatar sx={{ width: 48, height: 48 }}>{name.charAt(0)}</Avatar>
      <Box>
        <Typography variant="h6" fontWeight={700}>{name}</Typography>
        <Typography variant="body2" color="text.secondary">{role}</Typography>
      </Box>
    </Stack>
    <Stack direction="row" spacing={1} alignItems="center" mt={1}>
      <RoomIcon fontSize="small" />
      <Typography variant="body2">{location}</Typography>
    </Stack>
    <Stack direction="row" spacing={2} mt={1}>
      <Stack direction="row" spacing={1} alignItems="center">
        <CalendarTodayIcon fontSize="small" />
        <Typography variant="body2">{date}</Typography>
      </Stack>
      <Stack direction="row" spacing={1} alignItems="center">
        <AccessTimeIcon fontSize="small" />
        <Typography variant="body2">{time}</Typography>
      </Stack>
    </Stack>
    <Stack direction="row" spacing={1} mt={2}>
      <Button variant="contained" color="secondary">Confirm</Button>
      <Button variant="outlined" color="secondary">Cancel</Button>
    </Stack>
  </Card>
);

export default AppointmentCard;
