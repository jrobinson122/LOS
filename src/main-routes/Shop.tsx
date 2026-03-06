import { useState, useEffect } from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import pigHat from '../images/pigHat.png';
import losHat1 from '../images/losHat1.png';
import losHat2 from '../images/losHat2.png';
import troutHat from '../images/troutHat.png';
import pigHat2 from '../images/pigHat2.png';
import troutHat2 from '../images/troutHat2.png';
import losCamoHat from '../images/losCamoHat.png';
import losCamoHat2 from '../images/losCamoHat2.png';
import Grid from '@mui/material/Grid';
import ProductModal from "../components/ProductModal";
import { useCart } from "../Contexts/CartContext";
import { getTheme, ThemeConfig } from "../themes/themes";

type Product = {
    id: number;
    name: string;
    bgColor?: string;
    description: string;
    price?: number;
    images: string[];
};

const products: Product[] = [
    {
        id: 1,
        name: "PIG HAT",
        bgColor: "#f7f1f2ff",
        description: "Pink embroidered pig on structured foam cap.",
        images: [pigHat, pigHat2]
    },
    {
        id: 2,
        name: "LOS TRUCKER HAT",
        description: "Love. Obsessed. Scared. classic black mesh cap.",
        images: [losHat1]
    },
    {
        id: 3,
        name: "LOS TRUCKER HAT",
        description: "Variant colorway of the LOS classic foam trucker.",
        images: [losHat2]
    },
    {
        id: 4,
        name: "TROUT TRUCKER HAT",
        description: "Comic-style 'TROUT!' print on high-profile trucker.",
        images: [troutHat, troutHat2]
    },
    {
        id: 5,
        name: "LOS TRUCKER HAT",
        description: "Love. Obsessed. Scared. camo mesh cap.",
        images: [losCamoHat, losCamoHat2]
    },
];

export default function Shop() {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [open, setOpen] = useState(false);
    const { addToCart } = useCart();
    const [showPow, setShowPow] = useState(false);
    const [theme, setTheme] = useState<ThemeConfig>(getTheme("pop"));

    useEffect(() => {
        // Load saved theme
        const savedTheme = localStorage.getItem("clothingStoreTheme");
        if (savedTheme) {
            setTheme(getTheme(savedTheme));
        }

        // Listen for theme changes
        const handleThemeChange = () => {
            const currentTheme = localStorage.getItem("clothingStoreTheme");
            if (currentTheme) {
                setTheme(getTheme(currentTheme));
            }
        };

        window.addEventListener('themeChange', handleThemeChange);
        window.addEventListener('storage', handleThemeChange);

        return () => {
            window.removeEventListener('themeChange', handleThemeChange);
            window.removeEventListener('storage', handleThemeChange);
        };
    }, []);

    const handleOpen = (product: typeof products[0]) => {
        setSelectedProduct(product);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedProduct(null);
    };

    const triggerPow = () => {
        setShowPow(true);
        setTimeout(() => setShowPow(false), 700);
    };

    return (
        <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
            {showPow && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
                    animate={{ opacity: 1, scale: 1.4, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.4, rotate: 20 }}
                    transition={{ duration: 0.6, ease: "backOut" }}
                    style={{
                        position: 'fixed',
                        top: 15,
                        right: 90,
                        transform: 'translateX(-50%)',
                        backgroundColor: theme.colors.accent,
                        color: theme.colors.primary,
                        fontFamily: theme.typography.fontFamily,
                        fontSize: '1.5rem',
                        padding: '8px 20px',
                        borderRadius: '8px',
                        boxShadow: `3px 3px 0 ${theme.colors.secondary}`,
                        zIndex: 1000,
                        pointerEvents: 'none'
                    }}
                >
                    POW! 💥
                </motion.div>
            )}
            
            <Box 
                sx={{ 
                    mt: 10, 
                    px: 4, 
                    pb: 6, 
                    minHeight: '100vh',
                    background: theme.effects.gradient,
                    transition: 'background 0.5s ease',
                }}
            >
                {/* Background Effects */}
                {theme.effects.halftone && (
                    <Box
                        component={motion.div}
                        animate={{
                            backgroundPosition: ["0 0", "100px 100px"],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        sx={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundImage: "radial-gradient(circle, #000 2px, transparent 2px)",
                            backgroundSize: "20px 20px",
                            opacity: 0.2,
                            pointerEvents: "none",
                            zIndex: 0,
                        }}
                    />
                )}

                {theme.effects.scanlines && (
                    <Box
                        sx={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: `repeating-linear-gradient(
                                0deg,
                                rgba(255, 255, 255, 0.03) 0px,
                                transparent 2px,
                                transparent 4px
                            )`,
                            pointerEvents: "none",
                            zIndex: 0,
                        }}
                    />
                )}

                <Typography
                    variant="h3"
                    gutterBottom
                    sx={{ 
                        fontFamily: theme.typography.fontFamily,
                        color: theme.colors.text,
                        textShadow: theme.typography.textShadow,
                        letterSpacing: theme.typography.letterSpacing,
                        mb: 4,
                        position: 'relative',
                        zIndex: 1,
                    }}
                >
                    SHOP.
                </Typography>

                <Grid container spacing={4} sx={{ position: 'relative', zIndex: 1 }}>
                    {products.map((product) => (
                        <Grid item xs={12} sm={6} md={4} key={product.id}>
                            <motion.div 
                                whileHover={{ scale: 1.05 }} 
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Card
                                    sx={{
                                        backgroundColor: theme.id === 'neon' ? '#1a1a1a' : "white",
                                        color: theme.id === 'neon' ? '#ffffff' : '#000',
                                        borderRadius: 3,
                                        overflow: "hidden",
                                        border: theme.id === 'neon' ? `2px solid ${theme.colors.accent}` : 'none',
                                        boxShadow: theme.id === 'neon' 
                                            ? `0 0 20px ${theme.colors.accent}88, 6px 6px 0 ${theme.colors.accent}` 
                                            : `6px 6px 0 ${theme.colors.secondary}`,
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={product.images[0]}
                                        alt={product.name}
                                        onClick={() => handleOpen(product)}
                                        sx={{
                                            objectFit: "contain",
                                            backgroundColor: product.bgColor || "#f0f0f0",
                                            cursor: 'pointer',
                                            transition: 'transform 0.3s ease',
                                            '&:hover': {
                                                transform: 'scale(1.05)',
                                            },
                                        }}
                                    />
                                    <CardContent>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontFamily: theme.typography.fontFamily,
                                                fontWeight: "bold",
                                                mb: 2,
                                                textAlign: "center",
                                                color: theme.id === 'neon' ? theme.colors.text : 'inherit',
                                                ...(theme.id === 'neon' && {
                                                    textShadow: `0 0 10px ${theme.colors.accent}`,
                                                }),
                                            }}
                                        >
                                            {product.name}
                                        </Typography>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            onClick={() => {
                                                addToCart(product);
                                                triggerPow();
                                            }}
                                            sx={{
                                                fontFamily: theme.typography.fontFamily,
                                                backgroundColor: theme.colors.secondary,
                                                color: theme.colors.text,
                                                border: theme.id === 'neon' ? `2px solid ${theme.colors.accent}` : 'none',
                                                boxShadow: theme.id === 'neon' 
                                                    ? `0 0 10px ${theme.colors.accent}` 
                                                    : 'none',
                                                transition: 'all 0.3s ease',
                                                "&:hover": {
                                                    backgroundColor: theme.colors.accent,
                                                    color: theme.colors.primary,
                                                    transform: 'scale(1.05)',
                                                    ...(theme.id === 'neon' && {
                                                        boxShadow: `0 0 20px ${theme.colors.accent}`,
                                                    }),
                                                },
                                            }}
                                        >
                                            ADD TO CART
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            
            <AnimatePresence>
                {selectedProduct && (
                    <ProductModal
                        open={open}
                        onClose={handleClose}
                        product={selectedProduct}
                        onAddToCartBurst={triggerPow}
                    />
                )}
            </AnimatePresence>
        </motion.div>
    );
}