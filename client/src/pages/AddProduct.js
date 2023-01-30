import React from 'react';
import { Grid, Container, TextField, FormControlLabel, Checkbox, Button } from '@mui/material';

function AddProduct() {
    return (
        <>
            <Container sx={{ mt:6}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="given-name"
                            name="firstName"
                            required
                            fullWidth
                            id="firstName"
                            label="Product Title"
                            placeholder="Rings"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="lastName"
                            label="Product Description"
                            name="lastName"
                            autoComplete="family-name"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            fullWidth
                            name="password"
                            label="Product Rating"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            fullWidth
                            name="password"
                            label="Product Price"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            label="Image URL"
                            name="email"
                            autoComplete="email"
                        />
                    </Grid>


                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ p: 1, mt: 2 }}
                >
                    Add Product
                </Button>
            </Container>
        </>
    )
}

export default AddProduct
