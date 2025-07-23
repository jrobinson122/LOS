import { Box, Typography, TextField, Button, Stack, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
    name: Yup.string().required("Name is required."),
    email: Yup.string().email("Invalid email").required("Email is required."),
    message: Yup.string().required("Message is required."),
})
export default function Contact() {
    return (
        <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
            <Box sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                px: 2,
                py: 6,
                backgroundColor: "#e11f80",

            }}
            >
                <Paper
                    elevation={10}
                    sx={{
                        borderRadius: 4,
                        p: 4,
                        maxWidth: 600,
                        width: "100%",
                        bgcolor: "white",
                    }}
                >
                    <Typography
                        variant="h4"
                        gutterBottom
                        sx={{
                            textAlign: "center",
                            fontWeight: "bold",
                            fontFamily: "Impact, sans-serif",
                            color: "#111",
                        }}
                    >
                        CONTACT
                    </Typography>
                    <Formik
                        initialValues={{ name: "", email: "", message: "" }}
                        validationSchema={ContactSchema}
                        onSubmit={(values, { resetForm }) => {
                            console.log("Form submitted:", values);
                            resetForm();
                            alert("Message sent!");
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <Stack spacing={3}>
                                    <Field
                                        as={TextField}
                                        name="name"
                                        label="Name"
                                        fullWidth
                                        error={!!errors.name && touched.name}
                                        helperText={touched.name && errors.name}
                                    />
                                    <Field
                                        as={TextField}
                                        name="email"
                                        label="Email"
                                        type="email"
                                        fullWidth
                                        error={!!errors.email && touched.email}
                                        helperText={touched.email && errors.email}
                                    />
                                    <Field
                                        as={TextField}
                                        name="message"
                                        label="Message"
                                        multiline
                                        minRows={4}
                                        fullWidth
                                        error={!!errors.message && touched.message}
                                        helperText={touched.message && errors.message}
                                    />
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        fullWidth
                                        sx={{
                                            fontFamily: "Impact, sans-serif",
                                            fontSize: "1.2rem",
                                            letterSpacing: "0.05em",
                                            backgroundColor: "#111",
                                            color: "white",
                                            "&:hover": {
                                                backgroundColor: "#333",
                                            },
                                        }}
                                    >
                                        SEND
                                    </Button>
                                </Stack>
                            </Form>
                        )}
                    </Formik>
                </Paper>
            </Box>
        </motion.div>
    );
}
