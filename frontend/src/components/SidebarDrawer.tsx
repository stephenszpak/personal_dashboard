import React from 'react';
import { Drawer, List, ListItemButton, Tooltip } from '@mui/material';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { brandPalette } from '../theme';

interface SidebarDrawerProps {
  active?: number;
}

const icons = [
  { icon: <InboxOutlinedIcon />, label: 'Inbox' },
  { icon: <MailOutlineIcon />, label: 'Mail' },
];

const SidebarDrawer: React.FC<SidebarDrawerProps> = ({ active = 0 }) => (
  <Drawer
    variant="permanent"
    sx={{
      width: 72,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: {
        width: 72,
        bgcolor: brandPalette.sidebar.bg,
        border: 'none',
        display: 'flex',
        alignItems: 'center',
      },
    }}
  >
    <List sx={{ mt: 2 }}>
      {icons.map((item, index) => (
        <Tooltip title={item.label} placement="right" key={item.label}>
          <ListItemButton
            sx={{
              my: 1,
              borderRadius: 2,
              color: index === active ? '#fff' : 'inherit',
              justifyContent: 'center',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.06)' },
              bgcolor: index === active ? 'primary.main' : 'transparent',
            }}
          >
            {item.icon}
          </ListItemButton>
        </Tooltip>
      ))}
    </List>
  </Drawer>
);

export default SidebarDrawer;
