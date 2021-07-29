import { 
    Avatar, 
    Box,
    CircularProgress, 
    Grid, 
    List, 
    ListItem,
 } from '@material-ui/core';
import Axios from "axios";
import { Alert } from '@material-ui/lab';
import React, { useContext, useEffect, useState } from 'react';
import Logo from '../components/Logo';
import { useStyles } from '../styles';

export default function OrderScreen() {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)
    const styles = useStyles();

    useEffect(async() => {
        const { data } = await Axios.get('http://localhost:5000/api/categories');
        setCategories( data );
        setLoading(false)
    }, []);

    return (
     <Box className={styles.root}>
        <Box className={styles.main}>
            <Grid container>
                <Grid item md={2}>
                    <List>
                        {loading ? (
                            <CircularProgress />
                            ) : (
                                <>
                                <ListItem button>
                                    <Logo></Logo>
                                </ListItem>
                                {categories.map((category) => (
                                 <ListItem button key={category.name}>
                                     <Avatar alt={category.name} src={category.image} />
                                     </ListItem>
                                ))}
                                </>
                            )}
                    </List>
                </Grid>
                <Grid item md={10}>
                    Lista de Comida
                </Grid>
            </Grid>
        </Box>
    </Box>
    );
}