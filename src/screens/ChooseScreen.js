import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Fade,
  Typography,
} from '@material-ui/core';
import React, { useContext } from 'react';
import { setOrderType } from '../actions';
import Logo from '../components/Logo';
import { Store } from '../Store';
import { useStyles } from '../styles';

export default function ChooseScreen(props) {
    const styles = useStyles();
  const { dispatch } = useContext(Store);

  const chooseHandler = (orderType) => {
    setOrderType(dispatch, orderType);
    props.history.push('/order');
  };

    return (
        <Fade in={true}>
            <Box className={[styles.root, styles.navy]}>
                <Box className={[styles.main, styles.center]}>
                    <Logo large></Logo>
                    <Typography
                        className={styles.center}
                        gutterBottom
                        variant="h3"
                        component="h3"
                    >
                        Onde você vai comer hoje?
                    </Typography>
                    <Box className={styles.cards}>
                        <Card className={[styles.card, styles.space]}>
                            <CardActionArea onClick={()=> chooseHandler('Comer aqui')}>
                                <CardMedia
                                    component="img"
                                    alt="comeraqui"
                                    image="/imagens/comeraqui.jpg"
                                    className={styles.media}
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h4"
                                        color="textPrimary"
                                        component="p"
                                    >
                                        Comer aqui
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className={[styles.card, styles.space]}>
                            <CardActionArea onClick={()=> chooseHandler('Retirar')}>
                                <CardMedia
                                    component="img"
                                    alt="Take Out"
                                    image="/imagens/comidalevar.jpg"
                                    className={styles.media}
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h4"
                                        color="textPrimary"
                                        component="p"
                                    >
                                        Retirar
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Box>
                </Box>
            </Box>
        </Fade>
    )
}