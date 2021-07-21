import React from 'react';
import {Box, Card, CardActionArea, Typography} from '@material-ui/core';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import { useStyles } from '../styles';
import Logo from '../components/Logo';

export default function HomeScreen() {
    const styles = useStyles();
    return (
        <Card>
            <CardActionArea>
                <Box className={[styles.root, styles.blue]}>
                    <Box className={[styles.main, styles.center]}>
                        <Typography component="h6" variant="h6">
                            Shawarma Culinária Árabe
                        </Typography>
                        <Typography component="h1" variant="h1">
                            Peça <br /> & pague <br /> aqui
                        </Typography>
                        <TouchAppIcon fontSize="large"></TouchAppIcon>
                    </Box>
                    <Box className={[styles.center, styles.golden]}>
                        <Logo large ></Logo>
                        <Typography component="h5" variant="h5">
                            Toque para começar
                        </Typography>
                    </Box>
                </Box>
            </CardActionArea>
        </Card>
    )
}