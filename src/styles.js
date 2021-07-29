import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  navy: {
    backgroundColor: '#000000',
  },
  black: {
    backgroundColor: '#000000',
    color: '#000000',
  },
  main: {
    flex: 1,
    overflow: 'auto',
    flexDirection: 'column',
    display: 'flex',
    color: '#EFB810',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  golden: {
    backgroundColor: '#bf930d',
  },
  largeLogo: {
    height: 100,
  },
  Logo: {
    height: 50,
  },
  cards: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: { margin: 10 },
  space: {
    padding: 10,
  },
  media: { width: 220},
}));