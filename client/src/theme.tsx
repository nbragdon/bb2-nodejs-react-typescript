import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#41B3A3',
    },
    secondary: {
      main: '#C38D9E',
    },
    error: {
      main: '#E27D60'
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;