import { createTheme } from '@material-ui/core/styles';

export const  Theme = createTheme({
  palette: {
    primary: {
      
      main: '#1B0034',
     
    },
    secondary: {
      light: '#1B0034',
      main: '#1B0034',
      
      contrastText: '#1B0034',
    },
    
    contrastThreshold: 3,
   
    tonalOffset: 0.2,
  },
});