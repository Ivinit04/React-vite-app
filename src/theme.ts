import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3', // Adjust the primary color
    },
    secondary: {
      main: '#ff4081', // Adjust the secondary color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Adjust the default font family
  },
});

export default theme;
