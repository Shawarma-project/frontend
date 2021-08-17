import React from 'react';
import {Box, Card, CardActionArea, Typography} from '@material-ui/core';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import { useStyles } from '../styles';
import Logo from '../components/Logo';

export default function HomeScreen(props) {
    const styles = useStyles();
    return (
        <Card>
            <CardActionArea onClick={() => props.history.push('/order')}>
                <Box className={[styles.root, styles.black]}>
                     <Box className={[styles.center, styles.golden]}>
                        <Logo large ></Logo>
                        <Typography component="h5" variant="h5">
                            Seja bem-vindo!
                            <Box>اهلا و سهلا بكم</Box>
                        </Typography>
                     </Box>
                     <Box className={[styles.main, styles.center]}>
                        <Typography component="h6" variant="h6">
                            Aqui você consegue deliciosos
                        </Typography>
                        <Typography component="h1" variant="h1">
                            Lanches Árabes
                        </Typography>
                        <TouchAppIcon fontSize="large"></TouchAppIcon>
                    </Box>
                </Box>
            </CardActionArea>
        </Card>
    );
}