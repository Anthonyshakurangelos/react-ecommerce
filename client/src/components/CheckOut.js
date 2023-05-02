import * as React from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';

function Checkout() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h1" gutterBottom>
          Checkout
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="h2" gutterBottom>
          Shipping Information
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField label="First Name" fullWidth required />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField label="Last Name" fullWidth required />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Address" fullWidth required />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField label="City" fullWidth required />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField label="Zip Code" fullWidth required />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="h2" gutterBottom>
          Payment Information
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField label="Name on Card" fullWidth required />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Credit Card Number" fullWidth required />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField label="Expiration Date" fullWidth required />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField label="CVV" fullWidth required />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary">
          Place Order
        </Button>
      </Grid>
    </Grid>
  );
}

export default Checkout;
