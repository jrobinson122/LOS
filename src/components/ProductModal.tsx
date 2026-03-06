import React from 'react';
import {
    Dialog, DialogTitle, DialogContent, ImageList, ImageListItem, IconButton, Typography, Button, Box, ToggleButtonGroup, ToggleButton
} from '@mui/material';
import { Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useCart } from '../Contexts/CartContext';
import { motion } from "framer-motion";

interface ProductModalProps {
    open: boolean;
    onClose: () => void;
    product: {
        id: number;
        name: string;
        price?: number;
        description: string;
        images: string[];
    };
    onAddToCartBurst: () => void;
}

const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
};


function ProductModal({ open, onClose, product, onAddToCartBurst }: ProductModalProps) {
    const [size, setSize] = React.useState<string | null>(null);
    const [selectedImage, setSelectedImage] = React.useState(product.images[0]);
    const { addToCart } = useCart();

    React.useEffect(() => {
        setSelectedImage(product.images[0]);
    }, [product]);

    return (
        <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.25 }}
        >
            <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
                <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {product.name}
                    <IconButton onClick={onClose}><CloseIcon /></IconButton>
                </DialogTitle>

                <DialogContent dividers>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6} component="div">
                            <Box
                                component="img"
                                src={selectedImage}
                                alt={product.name}
                                sx={{ width: '100%', borderRadius: 2 }}
                            />
                            {product.images.length > 1 && (
                                <ImageList cols={4} sx={{ mt: 2 }} rowHeight={60}>
                                    {product.images.map((img, i) => (
                                        <ImageListItem key={i}>
                                            <Box
                                                component="img"
                                                src={img}
                                                alt={`angle-${i}`}
                                                sx={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    border: selectedImage === img ? '2px solid black' : '1px solid #ccc',
                                                    borderRadius: 1,
                                                    cursor: 'pointer'
                                                }}
                                                onClick={() => setSelectedImage(img)}
                                            />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            )}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant='h6' gutterBottom>
                                ${product.price || 40}</Typography>

                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                {product.description || "This is a high-quality hat designed for maximum comfort and style."}
                            </Typography>
                            <Typography variant='subtitle2' gutterBottom>Size</Typography>
                            <ToggleButtonGroup
                                exclusive
                                value={size}
                                onChange={(e, newSize) => setSize(newSize)}
                                sx={{ mb: 2 }}
                            >
                                {['S', 'M', 'L', 'XL'].map(s => (
                                    <ToggleButton key={s} value={s}>{s}</ToggleButton>
                                ))}
                            </ToggleButtonGroup>
                            <Typography variant='body2' sx={{ mb: 2 }}>
                                Fabric: 100% Cotton<br />
                                Care: Machine wash cold<br />
                                Fit: One size fits most
                            </Typography>
                            <Button
                                variant='contained'
                                fullWidth
                                onClick={() => {
                                    addToCart(product);
                                    onAddToCartBurst(); 
                                }} sx={{ fontFamily: "Impact, sans-serif", py: 1.5 }}
                            >
                                ADD TO CART
                            </Button>
                        </Grid>
                    </Grid>
                </DialogContent>

            </Dialog >
        </motion.div>
    )
}

export default ProductModal;