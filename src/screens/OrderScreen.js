import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../Store';
import {
    addToOrder,
    clearOrder,
    listCategories,
    listProducts,
    removeFromOrder,
} from '../actions';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    CircularProgress,
    Dialog,
    DialogTitle,
    Grid,
    List,
    ListItem,
    TextField,
    Typography,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Alert } from '@material-ui/lab'
import { useStyles } from '../styles';
import Logo from '../components/Logo';

export default function OrderScreen(props) {
    const styles = useStyles();
    const [categoryName, setCategoryName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const [product, setProduct] = useState({});

    const closeHandler = () => {
        setIsOpen(false);
    };

    const productClickHandler = (p) => {
        setProduct(p);
        setIsOpen(true);
    };

    const addToOrderHandler = () => {
        addToOrder(dispatch, { ...product, quantity });
        setIsOpen(false);
        setQuantity(1);
    };
    const cancelOrRemoveFromOrder = () => {
        removeFromOrder(dispatch, product);
        setIsOpen(false);
    };

    const { state, dispatch } = useContext(Store);
    const { categories, loading, error } = state.categoryList;
    const {
        products,
        loading: loadingProducts,
        error: errorProducts,
    } = state.productList;

    const {
        orderItems,
        itemsCount,
        totalPrice,
        orderType,
    } = state.order;

    useEffect(() => {
        if (!categories) {
            listCategories(dispatch);
        } else {
            listProducts(dispatch, categories, categoryName);
        }
    }, [dispatch, categories, categoryName]);

    const categoryClickHandler = (name) => {
        setCategoryName(name);
        listProducts(dispatch, categories, categoryName);
    };

    const previewOrderHandler = () => {
        props.history.push(`/review`);
    };

    return (
        <Box className={styles.root}>
            <Dialog
                maxWidth="sm"
                fullWidth={true}
                open={isOpen}
                onClose={closeHandler}
            >
                <DialogTitle className={styles.center}>
                    Adicionar {product.name}
                </DialogTitle>
                <Box className={[styles.row, styles.center]}>
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={quantity === 1}
                        onClick={(e) => quantity > 1 && setQuantity(quantity - 1)}
                    >
                        <RemoveIcon />
                    </Button>
                    <TextField
                        inputProps={{ className: styles.largeInput }}
                        InputProps={{
                            bar: true,
                            inputProps: {
                                className: styles.largeInput,
                            },
                        }}
                        className={styles.largeNumber}
                        type="number"
                        variant="filled"
                        min={1}
                        value={quantity}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={(e) => setQuantity(quantity + 1)}
                    >
                        <AddIcon />
                    </Button>
                </Box>
                <Box className={[styles.row, styles.around]}>
                    <Button
                        onClick={cancelOrRemoveFromOrder}
                        variant="contained"
                        color="primary"
                        size="large"
                        className={styles.largeButton}
                    >
                        {orderItems.find((x) => x.name === product.name)
                            ? 'REMOVER'
                            : 'CANCELAR'}
                    </Button>

                    <Button
                        onClick={addToOrderHandler}
                        variant="contained"
                        color="primary"
                        size="large"
                        className={styles.largeButton}
                    >
                        Adicionar ao pedido
                    </Button>
                </Box>
            </Dialog>
            <Box className={styles.main}>
                <Grid container>
                    <Grid item md={2}>
                        <List>
                            {loading ? (
                                <CircularProgress />
                            ) : error ? (
                                <Alert severity="error">{error}</Alert>
                            ) : (
                                <>
                                    <ListItem onclick={() => categoryClickHandler('')} button>
                                        <Logo></Logo>
                                    </ListItem>
                                    {categories.map((category) => (
                                        <ListItem
                                            button
                                            key={category.name}
                                            onclick={() => categoryClickHandler(category.name)}
                                        >
                                            <Avatar alt={category.name} src={category.image} />
                                        </ListItem>
                                    ))}
                                </>
                            )}
                        </List>
                    </Grid>
                    <Grid item md={10}>
                        <Typography
                            gutterBottom
                            className={styles.title}
                            variant="h2"
                            component="h2"
                        >
                            {categoryName || 'Cardápio'}
                        </Typography>
                        <Grid container spacing={1}>
                            {loadingProducts ? (
                                <CircularProgress />
                            ) : errorProducts ? (
                                <Alert severity="error">{errorProducts}</Alert>
                            ) : (
                                products.map((product) => (
                                    <Grid item md={6}>
                                        <Card className={styles.card}
                                            onClick={() => productClickHandler(product)}
                                        >
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    alt={product.name}
                                                    image={product.image}
                                                    className={styles.media}
                                                />
                                            </CardActionArea>
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="body2"
                                                    color="textPrimary"
                                                    component="p"
                                                >
                                                    {product.name}
                                                </Typography>
                                                <Box className={styles.cardFooter}>
                                                    <Typography
                                                        variant="body2"
                                                        color="textSecondary"
                                                        component="p"
                                                    >
                                                        {product.description}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        color="textPrimary"
                                                        component="p"
                                                    >
                                                        R${product.price},00
                                                    </Typography>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Box>
                    <Box className={[styles.bordered, styles.space]}>
                        Meu pedido - {orderType} | Total: R${totalPrice},00 |
                        Itens: {itemsCount}
                    </Box>
                    <Box className={[styles.row, styles.around]}>
                        <Button
                            onClick={() => {
                                clearOrder(dispatch);
                                props.history.push(`/`);
                            }}
                            variant="contained"
                            color="primary"
                            className={styles.largeButton}
                        >
                            Cancelar
                        </Button>
                        <Button
                            onClick={previewOrderHandler}
                            variant="contained"
                            color="primary"
                            disabled={orderItems.length === 0}
                            className={styles.largeButton}
                        >
                         Ok
                        </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
            );
}