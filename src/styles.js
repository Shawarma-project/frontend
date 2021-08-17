import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({

  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  navy: {
    background: 'linear-gradient(to right bottom, #000000, #721422)',
  },
  black: {
    background: 'linear-gradient(to right bottom, #000000, #721422)',
    border: '1px solid black',
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
    background: 'linear-gradient(to right bottom, #d4b038, #6a581c)',
  },
  img: {
    width: 250,
    height: 220,
    borderRadius: '50%',
    boxShadow: '10px 8px 8px black',
  },
  img1: {
    width: 200,
    height: 170,
    transition: 'transform: translateX(-100%)',
  },
  largeLogo: {
    height: 100,
  },
  logo: {
    width: 100,
    height: 80,
  },
  cards: {
    display: 'flex',
    justifyContent: 'center',
    padding: 10,
  },
  card: {
     margin: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: '2rem',
    marginTop: 40,
    marginLeft: 1,
    textAlign: 'center',
   },
   title2: {
    fontWeight: 'bold',
    fontSize: '2rem',
    marginTop: 10,
    marginLeft: 1,
    textAlign: 'center',
   },
   title3: {
    fontWeight: 'bold',
    fontSize: '2rem',
    lineHeight: '45px',
    marginTop: 1,
    marginLeft: 1,
    marginBottom: 1,
    paddingTop: 12,
    textAlign: 'center',
   },
   title4: {
    fontWeight: 'bold',
    fontSize: '2rem',
    marginTop: 1,
    marginLeft: 1,
    marginBottom: 1,
    textAlign: 'center',
    padding: 0,
   },
   title5: {
    fontWeight: 'bold',
    fontSize: '2rem',
    marginTop: 0,
    marginLeft: 1,
    marginBottom: 1,
    textAlign: 'center',
   },
  space: {
    padding: 10,
  },
  media: {
     width: 180,
    height: 180,
  },
  largeButton: {
    backgroundColor: '#bf930d',
    width: '250px',
    height: '35px',
    transition: '500ms',
    cursor: 'pointer',
    '&:hover': {
        opacity: "0.6 !important",
    },
    boxShadow: '2px 2px 2px 2px black',
  },
  largeButtonW: {
    backgroundColor: '#00bb2d',
    fontWeight: 'bold',
    width: '200px',
    lineHeight: '20px',
  },
  largeInput: {
    width: '60px!important',
    padding: '0!important',
    fontSize: '35px!important',
    textAlign: 'center!important',
  },
  bordered: {
    borderWidth: 2,
    borderRadius: 5,
    margin: 5,
    borderStyle: 'solid',
  },
  icon: {
    backgroundColor: '#00bb2d',
    color: 'white',
    fontSize: '80px',
    borderRadius: '100%',
  },
  icon1: {
    backgroundColor: '#00bb2d',
    color: 'white',
    fontSize: '80px',
    borderRadius: '100%',
  },
  row: {
    display: 'flex',
    padding: 10,
  },
  around: {
    justifyContent: 'space-around',
  },
  between: {
    justifyContent: 'space-between',
  },
  column: { flexDirection: 'column' },
}));