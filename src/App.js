import {
  Container,
  createTheme,
  CssBaseline,
  Paper,
  ThemeProvider,
} from '@material-ui/core';
import { BrowserRouter, Route } from 'react-router-dom';
import ChooseScreen from './screens/ChooseScreen';
import HomeScreen from './screens/HomeScreen';
import OrderScreen from './screens/OrderScreen';

const theme = createTheme({
  typography: {
    h1: { 
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: '#efb810',
      padding: '3rem',
   },
   h3: {
    fontSize: '2.2rem',
    fontWeight: 'bold',
    color: '#efb810',
    padding: '40px',
  },
  /*h4: {
fontSize: '2rem',
padding: 'auto',
  },*/
    h6: {
      fontSize: '2rem',
      padding: '2rem',
      color: '#efb810',
        },
    h5: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: 'golden',
      padding: '2rem',
    },
    },
  palette: {
    primary: { main: '#ff1744' },
    secondary: {
      main: '#118e16',
      contrastText: '#ffffff',
    },
  },
});

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Paper>
          <Route path="/" component={HomeScreen} exact={true}></Route>
          <Route path="/choose" component={ChooseScreen} exact={true}></Route>
          <Route path="/order" component={OrderScreen} exact={true}></Route>
        </Paper>
      </Container>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;