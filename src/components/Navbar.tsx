import { Box, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.png'

const navItems = [
    { label: "SHOP", path: "/shop" },
    { label: "ABOUT", path: "/about" },
    { label: "CONTACT", path: "/contact" },
];
const NavBar = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <Box
            sx={{
                position: "fixed",
                top: 0,
                width: "100%",
                backgroundColor: "#e11f80",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                py: 2,
                zIndex: 10,
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
                                    fontSize: "1.2rem",
                                    fontWeight: "bold",
                                    color: location.pathname === path ? "#ffd700" : "#fff",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.05em",
                                    textShadow: "3px 3px 0 #000, 6px 6px 0 #333",
                                    cursor: "pointer",
                                    transition: "color 0.3s",
                                    "&:hover": {
                                        color: "#ffd700",
                                    },
                                }}
                            >
                                {label + (isActive ? "." : "")}
                            </Typography>
                        </Link>
                    )
                })}
            </Box>
        </Box>
    )
}

export default NavBar;