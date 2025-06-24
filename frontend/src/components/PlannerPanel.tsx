import React from 'react';
import {
  Card,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Button,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs';
import { brandPalette } from '../theme';

const tasks = [
  { project: 'Project Alpha', color: 'primary.dark' },
  { project: 'Project Beta', color: 'secondary.main' },
];

const PlannerPanel: React.FC = () => (
  <Card
    sx={{
      background: `linear-gradient(165deg, ${brandPalette.primary.main} 0%, ${brandPalette.primary.light} 100%)`,
      color: '#fff',
    }}
  >
    <Typography variant="h6" align="center" sx={{ mb: 1 }}>
      <IconButton color="inherit">
        <ArrowBackIosNewIcon fontSize="small" />
      </IconButton>
      {dayjs().format('MMMM YYYY')}
      <IconButton color="inherit">
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>
    </Typography>
    <StaticDatePicker
      displayStaticWrapperAs="desktop"
      value={dayjs()}
      onChange={() => {}}
      slotProps={{ toolbar: { hidden: true } }}
      sx={{
        bgcolor: 'transparent',
        '.MuiPickersDay-root': {
          color: '#111',
        },
      }}
    />
    <List>
      {tasks.map((t) => (
        <ListItem key={t.project} sx={{ cursor: 'pointer' }}>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: t.color, width: 28, height: 28 }} />
          </ListItemAvatar>
          <Typography color="inherit">{t.project}</Typography>
        </ListItem>
      ))}
    </List>
    <Button
      variant="contained"
      sx={{ mt: 2, bgcolor: brandPalette.secondary.main, '&:hover': { bgcolor: brandPalette.secondary.dark } }}
    >
      Calendar
    </Button>
  </Card>
);

export default PlannerPanel;
