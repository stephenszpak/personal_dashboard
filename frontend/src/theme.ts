import { createTheme } from '@mui/material/styles';

export const brandPalette = {
  primary: {
    main: '#A259FF',
    dark: '#8A44E9',
    light: '#C56DFF',
  },
  secondary: {
    main: '#14B2FF',
    dark: '#0D92DB',
  },
  sidebar: {
    bg: '#2B2B2B',
  },
  background: {
    default: '#F7F8FC',
  },
  text: {
    primary: '#111',
    secondary: '#595E6E',
  },
};

const theme = createTheme({
  palette: {
    primary: brandPalette.primary,
    secondary: brandPalette.secondary,
    background: {
      default: brandPalette.background.default,
    },
    text: brandPalette.text,
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    fontWeightRegular: 400,
    fontWeightBold: 700,
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0 4px 12px rgba(0,0,0,0.08)',
    '0 8px 20px rgba(0,0,0,0.12)',
  ],
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 24,
          textTransform: 'none',
          '&:hover': {
            opacity: 0.9,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          padding: 24,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          display: 'none',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            fontWeight: 700,
            color: brandPalette.text.primary,
          },
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          '& .MuiToggleButton-root.Mui-selected': {
            backgroundColor: brandPalette.primary.main,
            color: '#fff',
            '&:hover': {
              backgroundColor: brandPalette.primary.main,
              opacity: 0.9,
            },
          },
        },
      },
    },
  },
});

export default theme;
