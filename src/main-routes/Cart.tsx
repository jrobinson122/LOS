import React, { useState, useEffect } from 'react';
import {
    DialogActions,
    Button, Box, Typography, IconButton, List, ListItem, ListItemAvatar, Avatar, ListItemText,
    Drawer
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useCart } from '../Contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { DeleteForever } from '@mui/icons-material';
import { AnimatePresence, motion } from "framer-motion";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


interface CartDrawerProps {
    open: boolean;
    onClose: () => void;
}

const MotionPaper = motion(Box);

const CartDrawer = ({ open, onClose }: CartDrawerProps) => {
    const { cartItems, removeFromCart } = useCart();
    const navigate = useNavigate();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const labelColors = ['#ffeb3b', '#ffd54f', '#f06292', '#80deea', '#b39ddb'];

    const [burst, setBurst] = useState<null | 'whoosh'>(null);

    const handleCheckout = () => {
        onClose();
        navigate('/checkout');
    };


    return (
        <Drawer
            anchor={isMobile ? 'bottom' : 'right'}
            open={open}
            onClose={onClose}
            transitionDuration={0}
            ModalProps={{ keepMounted: true }}
            PaperProps={{
                component: MotionPaper,
                initial: {
                    opacity: 0,
                    y: isMobile ? 100 : 0,
                    x: isMobile ? 0 : 100,
                    scale: 0.9,
                    rotate: isMobile ? 0 : -8,
                },
                animate: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    rotate: 0,
                },
                exit: {
                    opacity: 0,
                    x: isMobile ? 0 : 100,
                    y: isMobile ? 100 : 0,
                    scale: 0.9,
                    rotate: isMobile ? 0 : 5,
                },
                transition: {
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                },
                sx: {
                    width: isMobile ? '100%' : 360,
                    height: isMobile ? '60vh' : '50vh',
                    borderTopLeftRadius: isMobile ? 16 : 0,
                    borderTopRightRadius: isMobile ? 16 : 0,
                    pt: 2,
                    px: 2,
                    backgroundColor: '#fff',
                    overflowY: 'auto',
                },
            }}
        >
            <AnimatePresence>
                {burst && (
                    <motion.div
                        key={burst}
                        initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
                        animate={{ opacity: 1, scale: 1.4, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.4, rotate: 20 }}
                        transition={{ duration: 0.6, ease: 'backOut' }}
                        style={{
                            position: 'absolute',
                            top: '10%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: '#2196f3',
                            color: '#fff',
                            fontFamily: 'Impact, sans-serif',
                            fontSize: '1.5rem',
                            padding: '8px 20px',
                            borderRadius: '8px',
                            boxShadow: '3px 3px 0 #000',
                            zIndex: 1000,
                            pointerEvents: 'none'
                        }}
                    >
                        WHOOSH! 💨
                   
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.div
                initial={
                    isMobile
                        ? { opacity: 0, y: 80, scale: 0.95, rotate: -5 }
                        : { opacity: 0, x: 60, scale: 0.85, rotate: -8, skewX: -10 }
                }
                animate={{ opacity: 1, y: 0, x: 0, scale: 1, rotate: 0, skewX: 0 }}
                exit={
                    isMobile
                        ? { opacity: 0, y: 60, scale: 0.9, rotate: 5 }
                        : { opacity: 0, x: 60, scale: 0.85, rotate: 8, skewX: 10 }
                }
                transition={{ type: 'spring', stiffness: 300, damping: 20, duration: 0.45 }}
                style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h6" sx={{ fontFamily: 'Impact, sans-serif' }}>Your Cart</Typography>
                    <IconButton onClick={onClose}><CloseIcon /></IconButton>
                </Box>

                {cartItems.length === 0 ? (
                    <Typography
                        variant="body2"
                        sx={{
                            fontFamily: 'Impact, sans-serif',
                            fontSize: '0.95rem',
                            backgroundColor: labelColors[0],
                            display: 'inline-block',
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 1,
                            boxShadow: '2px 2px 0px #000',
                            color: '#111',
                            transform: `rotate(${Math.random() * 6 - 3}deg) skewX(${Math.random() * 6 - 3}deg)`,
                            mb: 1,
                        }}
                    >
                        Your cart flopped, save her!
                    </Typography>
                ) : (
                    <List>
                        {cartItems.map((item, index) => (
                            <ListItem
                                key={index}
                                secondaryAction={
                                    <IconButton
                                        edge="end"
                                        onClick={() => {
                                            setBurst('whoosh');
                                            setTimeout(() => setBurst(null), 700);
                                            removeFromCart(item.id);
                                        }}
                                    >
                                        <DeleteForever />
                                    </IconButton>
                                }
                            >
                                <ListItemAvatar>
                                    <Avatar
                                        variant="square"
                                        src={item.images[0]}
                                        alt={item.name}
                                        sx={{ width: 56, height: 56, borderRadius: 2 }}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={item.name}
                                    secondary={`$${item.price || 40}`}
                                    primaryTypographyProps={{ fontWeight: 'bold' }}
                                    sx={{
                                        fontFamily: 'Impact, sans-serif',
                                        fontSize: '0.95rem',
                                        backgroundColor: labelColors[index % labelColors.length],
                                        display: 'inline-block',
                                        px: 1.5,
                                        py: 0.5,
                                        borderRadius: 1,
                                        boxShadow: '2px 2px 0px #000',
                                        color: '#111',
                                        mb: 1,
                                    }}
                                />
                            </ListItem>
                        ))}
                    </List>
                )}
                <DialogActions>
                    <Button
                        variant='contained'
                        color='primary'
                        fullWidth
                        onClick={handleCheckout}
                        sx={{ fontFamily: 'Impact, sans-serif', py: 1.2 }}
                    >
                        Go To Checkout
                    </Button>
                </DialogActions>
            </motion.div>
        </Drawer >
    )
}

export default CartDrawer;