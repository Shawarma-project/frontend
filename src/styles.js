import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      },
      blue: {
          backgroundColor: '#120a8f',
          color: '#ffffff',
         },
         main: {
            flex: 1,
            overflow: 'auto',
            flexDirection: 'column',
            display: 'flex',
            color: '#ffffff',
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
}));