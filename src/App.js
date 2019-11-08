import React from 'react';

import AppRouter from './AppRouter';
import CssBaseline from '@material-ui/core/CssBaseline';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {blue, red} from '@material-ui/core/colors'
import NavigationHeader from './components/navigation/NavigationHeader';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: red,
  },
  typography: {
    useNextVariants: true,
  },
});

// Render the App
// The App provides the Store to the following components.
// Controls as well as Routed Content are rendered.
const App = () => (
  <MuiThemeProvider theme={theme}>
    <div className='full'>
      <CssBaseline />
      <NavigationHeader/>
      <AppRouter />
    </div>
  </MuiThemeProvider>
);

export default App;
