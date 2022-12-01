import * as React from 'react';
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import {
    TextField,
    Typography,
    Switch,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    FormControlLabel,
    DialogContentText,
    Alert,
    AlertTitle,
    DialogActions,
} from "@mui/material";
import { Link } from 'react-router-dom';
export default function Add() {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const baseURL = `https://6367b6a0f5f549f052daaa74.mockapi.io/data`;
    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            content: "",
            img: "",
            status: false,
            views: 1,
            atractive: false,
        },

        onSubmit: (values) => {
            fetch(baseURL, {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "same-origin",
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data) => setOpen(true))
                .catch((error) => console.log(error.message));
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .required("Required.")
                .min(2, "Must be 2 characters or more"),
            description: Yup.string()
                .required("Required.")
                .min(2, "Must be 2 characters or more"),
            content: Yup.string()
                .required("Required.")
                .min(2, "Must be 2 characters or more"),
            img: Yup.string()
                .required("Required.")
                .min(2, "Must be 2 characters or more"),

            views: Yup.number().integer()
                .required("Required.")
                .typeError("Please type a number."),

        }),
    });

    return (
        <div className='Add_main'>
            <h1 style={{ color: 'green' }}>Add Data</h1>
            <form onSubmit={formik.handleSubmit} className='Add_info'>
                <TextField
                    autoFocus
                    margin="dense"
                    name="title"
                    label="Titile"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                />
                {formik.errors.title && (
                    <Typography variant="caption" color="red">
                        {formik.errors.title}
                    </Typography>
                )}
                <TextField
                    margin="dense"
                    name="description"
                    label="Description"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                />
                {formik.errors.description && (
                    <Typography variant="caption" color="red">
                        {formik.errors.description}
                    </Typography>
                )}
                <TextField
                    margin="dense"
                    name="content"
                    label="Content"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={formik.values.content}
                    onChange={formik.handleChange}
                />
                {formik.errors.content && (
                    <Typography variant="caption" color="red">
                        {formik.errors.content}
                    </Typography>
                )}
                <TextField
                    margin="dense"
                    name="img"
                    label="URL of image"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={formik.values.img}
                    onChange={formik.handleChange}
                />
                {formik.errors.img && (
                    <Typography variant="caption" color="red">
                        {formik.errors.img}
                    </Typography>
                )}
                <TextField
                    margin="dense"
                    name="views"
                    label="Views"
                    type="number"
                    fullWidth
                    variant="standard"
                    value={formik.values.views}
                    onChange={formik.handleChange}
                />
                {formik.errors.views && (
                    <Typography variant="caption" color="red">
                        {formik.errors.views}
                    </Typography>
                )}
                
                
                <FormControlLabel
                    control={<Switch />}
                    label="Status"
                    name="status"
                    value={formik.values.status}
                    onChange={formik.handleChange}
                />
                <FormControlLabel
                    control={<Switch />}
                    label="Atractive"
                    name="atractive"
                    value={formik.values.atractive}
                    onChange={formik.handleChange}
                />
                <br />
                <Button variant="contained" size="medium" type="submit" sx={{ backgroundColor: 'green', width: '100%' }}>
                    Add
                </Button>

                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Congraturation"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <Alert severity="success">
                                <AlertTitle>Adding successful!</AlertTitle>
                            </Alert>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button>
                            <Typography textAlign="center">
                                <Link to='/dashboard' style={{ textDecoration: "none" }}>Dashboard</Link>
                            </Typography>
                        </Button>
                        <Button autoFocus onClick={handleClose}>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </form>
        </div>
    );
}