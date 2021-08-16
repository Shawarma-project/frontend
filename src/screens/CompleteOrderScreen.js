import { Box, CircularProgress, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import WhatsApp from '@material-ui/icons/WhatsApp';
import { useStyles } from '../styles';
import Logo from '../components/Logo';
export default function CompleteOrderScreen(props) {
    const styles = useStyles();

    return (
        <Box className={[styles.root, styles.navy]}>
            <Box className={[styles.main, styles.center]}>
                <Box>
                    <Logo large></Logo>
                    <CircularProgress></CircularProgress>
                    <>
                        <Typography
                            gutterBottom
                            className={styles.title3}
                            variant="h3"
                            component="h3"
                        >
                            PEDIDO REALIZADO COM SUCESSO
                        </Typography>
                        <img className={styles.img1} src="/imagens/alac.png" alt=""/>
                        <Typography
                            gutterBottom
                            className={styles.title4}
                            variant="h3"
                            component="h3"
                        >
                            Você receberá atualizações através do WhatsApp
                        </Typography>
                        <Box className={[styles.center, styles.space]}>
                            <Button
                                onClick={() => props.history.push('/')}
                                variant="contained"
                                color="secondary"
                                className={styles.largeButtonW}
                                startIcon={<WhatsApp />}
                            >
                                Continuar no WhatsApp
                            </Button>
                        </Box>
                        <Typography
                            gutterBottom
                            className={styles.title5}
                            variant="h1"
                            component="h1"
                        >
                            Obrigado! شكرا
                        </Typography>
                    </>
                </Box>
            </Box>
        </Box>
    );
}