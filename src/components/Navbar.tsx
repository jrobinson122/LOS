// import { useState } from "react";
// import { Box, IconButton, Typography, Badge } from "@mui/material";
// import { Link, useLocation } from "react-router-dom";
// import { ShoppingBag } from "@mui/icons-material";
// import { AnimatePresence } from "framer-motion";

// import logo from "../images/logo.png";
// import CartDrawer from "../main-routes/Cart";
// import { useCart } from "../Contexts/CartContext";
// import { useAppTheme } from "../Contexts/ThemeContext";

// const navItems = [
//   { label: "HOME", path: "/" },
//   { label: "SHOP", path: "/shop" },
//   { label: "ABOUT", path: "/about" },
//   { label: "CONTACT", path: "/contact" },
// ];

// const NavBar = () => {
//   const location = useLocation();
//   const [cartOpen, setCartOpen] = useState(false);
//   const { cartItems } = useCart();
//   const theme = useAppTheme();

//   return (
//     <Box
//       component="header"
//       sx={{
//         position: "fixed",
//         top: 18,
//         left: "50%",
//         transform: "translateX(-50%)",
//         width: "min(1180px, calc(100% - px))",
//         height: 72,
//         px: { xs: 2, md: 3 },
//         zIndex: 1100,

//         display: "grid",
//         gridTemplateColumns: "auto 1fr auto",
//         alignItems: "center",
//         gap: 2,

//         background:
//           "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.025))",
//         border: "1px solid rgba(255,255,255,0.14)",
//         borderRadius: "999px",
//         backdropFilter: "blur(22px) saturate(160%)",
//         WebkitBackdropFilter: "blur(22px) saturate(160%)",
//         boxShadow: `
//           0 24px 80px rgba(0,0,0,0.42),
//           inset 0 1px 0 rgba(255,255,255,0.16)
//         `,
//       }}
//     >
//       <Link to="/" style={{ display: "inline-flex" }}>
//         <Box
//           component="img"
//           src={logo}
//           alt="LOS Logo"
//           sx={{
//             height: 42,
//             width: 42,
//             borderRadius: "50%",
//             objectFit: "cover",
//             filter: `drop-shadow(0 0 14px ${theme.colors.accent}77)`,
//           }}
//         />
//       </Link>

//       <Box
//         component="nav"
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           gap: { xs: 1.5, md: 4 },
//         }}
//       >
//         {navItems.map(({ label, path }) => {
//           const isActive = location.pathname === path;

//           return (
//             <Link key={path} to={path} style={{ textDecoration: "none" }}>
//               <Typography
//                 sx={{
//                   position: "relative",
//                   fontFamily:
//                     '"Space Grotesk", "Inter", "Helvetica Neue", Arial, sans-serif',
//                   fontSize: { xs: "0.72rem", sm: "0.82rem", md: "0.9rem" },
//                   fontWeight: 800,
//                   letterSpacing: "0.18em",
//                   lineHeight: 1,
//                   color: isActive ? theme.colors.accent : "rgba(255,255,255,0.78)",
//                   textTransform: "uppercase",
//                   transition: "all 0.25s ease",

//                   "&::after": {
//                     content: '""',
//                     position: "absolute",
//                     left: "50%",
//                     bottom: -10,
//                     width: isActive ? "100%" : "0%",
//                     height: "1px",
//                     transform: "translateX(-50%)",
//                     background: theme.colors.accent,
//                     boxShadow: `0 0 12px ${theme.colors.accent}`,
//                     transition: "width 0.25s ease",
//                   },

//                   "&:hover": {
//                     color: theme.colors.accent,
//                     filter: `drop-shadow(0 0 10px ${theme.colors.accent}99)`,

//                     "&::after": {
//                       width: "100%",
//                     },
//                   },
//                 }}
//               >
//                 {label}
//               </Typography>
//             </Link>
//           );
//         })}
//       </Box>

//       <IconButton
//         onClick={() => setCartOpen(true)}
//         sx={{
//           color: "rgba(255,255,255,0.84)",
//           width: 44,
//           height: 44,
//           border: "1px solid rgba(255,255,255,0.12)",
//           background: "rgba(255,255,255,0.06)",
//           transition: "all 0.25s ease",

//           "&:hover": {
//             color: theme.colors.accent,
//             background: "rgba(255,255,255,0.1)",
//             boxShadow: `0 0 22px ${theme.colors.accent}55`,
//           },
//         }}
//       >
//         <Badge
//           badgeContent={cartItems.length}
//           sx={{
//             "& .MuiBadge-badge": {
//               backgroundColor: theme.colors.accent,
//               color: "#050506",
//               fontWeight: 900,
//               boxShadow: `0 0 12px ${theme.colors.accent}`,
//             },
//           }}
//           showZero
//         >
//           <ShoppingBag sx={{ fontSize: 24 }} />
//         </Badge>
//       </IconButton>

//       <AnimatePresence>
//         {cartOpen && (
//           <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
//         )}
//       </AnimatePresence>
//     </Box>
//   );
// };

// export default NavBar;