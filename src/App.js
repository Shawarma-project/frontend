import {
  Container,
  createTheme,
  CssBaseline,
  Paper,
  ThemeProvider,
} from '@material-ui/core';
import { BrowserRouter, Route } from 'react-router-dom';
/*import ChooseScreen from './screens/ChooseScreen';*/
import HomeScreen from './screens/HomeScreen';
import OrderScreen from './screens/OrderScreen';
import ReviewScreen from './screens/ReviewScreen';
import CompleteOrderScreen from './screens/CompleteOrderScreen';

const theme = createTheme({
  typography: {
    h1: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: '#efb810',
      padding: '2rem',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: '100px',
      color: '#efb810',
      padding: '40px 20px 10px 20px',
      lineHeight: '3rem',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      padding: 0,
    },
    h6: {
      fontSize: '2rem',
      fontWeight: '1px',
      padding: '2rem',
      color: '#efb810',
    },
    h5: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: 'golden',
      paddingTop: '2rem',
      paddingLeft: '2.5rem',
      padding: '0.6rem',
    },
  },
  palette: {
    primary: { main: '#000000' },
    secondary: {
      main: '#000000',
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
            <Route path="/order" component={OrderScreen} exact={true}></Route>
            <Route path="/review" component={ReviewScreen} exact={true}></Route>
            <Route path="/complete" component={CompleteOrderScreen} exact={true}></Route>
          </Paper>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;