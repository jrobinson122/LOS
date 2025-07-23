import { Box, Typography, Grid, Button, Card, CardMedia, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import pigHat from '../images/pigHat.png';
import losHat1 from '../images/losHat1.png';
import losHat2 from '../images/losHat2.png'
import troutHat from '../images/troutHat.png'



const products = [
    {
        id: 1,
        name: "PIG HAT",
        image: pigHat,
    },
    {
        id: 2,
        name: "LOS TRUCKER HAT",
        image: losHat1,
    },
    {
        id: 3,
        name: "LOS TRUCKER HAT",
        image: losHat2,
    },
    {
        id: 4,
        name: "TROUT TRUCKER HAT",
        image: troutHat,
    },
];

export default function Shop() {
    return (
        <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}


        >
            <Box sx={{ mt: 10, px: 4, pb: 6, color: "white" }}>
                
                <Typography
                    variant="h3"
                    gutterBottom
                    sx={{ fontFamily: "Impact, sans-serif", mb: 4 }}
                >
                    SHOP.
                </Typography>

                <Grid container spacing={4}>
                    {products.map((product) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.id}>                            <Card
                            sx={{
                                backgroundColor: "white",
                                borderRadius: 3,
                                overflow: "hidden",
                                boxShadow: "6px 6px 0 black",
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="250"
                                image={product.image}
                                alt={product.name}
                                sx={{
                                    objectFit: "contain",
                                    backgroundColor: "#f0f0f0"
                                }}
                            />
                            <CardContent>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontFamily: "Impact, sans-serif",
                                        fontWeight: "bold",
                                        mb: 2,
                                        textAlign: "center",
                                    }}
                                >
                                    {product.name}
                                </Typography>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        fontFamily: "Impact, sans-serif",
                                        backgroundColor: "#111",
                                        color: "white",
                                        "&:hover": {
                                            backgroundColor: "#333",
                                        },
                                    }}
                                >
                                    ADD TO CART
                                </Button>
                            </CardContent>
                        </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

        </motion.div>
    );
}
