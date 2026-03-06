import { Box, IconButton, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.png';
import { ShoppingBag } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import CartDrawer from '../main-routes/Cart';
import { AnimatePresence } from 'framer-motion';
import { useCart } from '../Contexts/CartContext';
import { Badge } from '@mui/material';
import { getTheme, ThemeConfig } from '../themes/themes';

const navItems = [
    { label: "SHOP", path: "/shop" },
    { label: "ABOUT", path: "/about" },
    { label: "CONTACT", path: "/contact" },
];

const NavBar = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const [cartOpen, setCartOpen] = useState(false);
    const { cartItems } = useCart();
    
    // Get current theme from localStorage
    const [theme, setTheme] = useState<ThemeConfig>(getTheme("pop"));

    useEffect(() => {
        // Load saved theme
        const savedTheme = localStorage.getItem("clothingStoreTheme");
        if (savedTheme) {
            setTheme(getTheme(savedTheme));
        }

        // Listen for theme changes
        const handleStorageChange = () => {
            const currentTheme = localStorage.getItem("clothingStoreTheme");
            if (currentTheme) {
                setTheme(getTheme(currentTheme));
            }
        };

        // Custom event listener for immediate updates within same page
        window.addEventListener('themeChange', handleStorageChange);
        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('themeChange', handleStorageChange);
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <Box
            sx={{
                position: "fixed",
                top: 0,
                width: "100%",
                background: 'transparent',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                py: 2,
                zIndex: 10,
                transition: 'all 0.5s ease',
            }}
        >
            {!isHome && (
                <Box
                    sx={{
                        position: "absolute",
                        left: 20,
                        top: "50%",
                        transform: "translateY(-50%)",
                    }}
                >
                    <Link to="/">
                        <Box
                            component="img"
                            src={logo}
                            alt="LOS Logo"
                            sx={{
                                height: 48,
                                width: 48,
                                cursor: "pointer",
                                filter: theme.id === 'neon' 
                                    ? `drop-shadow(0 0 10px ${theme.colors.accent})`
                                    : 'none',
                                transition: 'filter 0.3s ease',
                                '&:hover': {
                                    filter: `drop-shadow(0 0 15px ${theme.colors.accent})`,
                                },
                            }}
                        />
                    </Link>
                </Box>
            )}
            <Box
                sx={{
                    display: 'flex',
                    gap: 4,
                }}
            >
                {navItems.map(({ label, path }) => {
                    const isActive = location.pathname === path;
                    return (
                        <Link to={path} key={path} style={{ textDecoration: 'none' }}>
                            <Typography
                                sx={{
                                    fontFamily: theme.typography.fontFamily,
                                    fontSize: "1.2rem",
                                    fontWeight: "bold",
                                    color: isActive ? theme.colors.accent : theme.colors.text,
                                    textTransform: "uppercase",
                                    letterSpacing: theme.typography.letterSpacing,
                                    textShadow: theme.typography.textShadow,
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                    ...(theme.id === 'neon' && {
                                        textShadow: isActive 
                                            ? `0 0 10px ${theme.colors.accent}, 0 0 20px ${theme.colors.accent}`
                                            : `0 0 5px ${theme.colors.text}`,
                                    }),
                                    "&:hover": {
                                        color: theme.colors.accent,
                                        transform: 'scale(1.1)',
                                        ...(theme.id === 'neon' && {
                                            textShadow: `0 0 15px ${theme.colors.accent}, 0 0 30px ${theme.colors.accent}`,
                                        }),
                                    },
                                }}
                            >
                                {label + (isActive ? "." : "")}
                            </Typography>
                        </Link>
                    );
                })}
            </Box>
            <Box 
                sx={{
                    position: 'absolute',
                    right: 20,
                    top: '50%',
                    transform: 'translateY(-50%)',
                }}
            >
                <IconButton 
                    onClick={() => setCartOpen(true)} 
                    sx={{ 
                        color: theme.colors.text,
                        transition: 'all 0.3s ease',
                        ...(theme.id === 'neon' && {
                            filter: `drop-shadow(0 0 5px ${theme.colors.text})`,
                        }),
                        '&:hover': {
                            color: theme.colors.accent,
                            transform: 'scale(1.1)',
                            ...(theme.id === 'neon' && {
                                filter: `drop-shadow(0 0 10px ${theme.colors.accent})`,
                            }),
                        },
                    }}
                >
                    <Badge 
                        badgeContent={cartItems.length} 
                        sx={{
                            '& .MuiBadge-badge': {
                                backgroundColor: theme.colors.accent,
                                color: theme.colors.primary,
                                fontWeight: 'bold',
                                ...(theme.id === 'neon' && {
                                    boxShadow: `0 0 10px ${theme.colors.accent}`,
                                }),
                            },
                        }}
                        showZero
                    >
                        <ShoppingBag sx={{ fontSize: 28 }} />
                    </Badge>
                </IconButton>
            </Box>
            <AnimatePresence>
                {cartOpen && (
                    <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
                )}
            </AnimatePresence>
        </Box>
    );
};

export default NavBar;