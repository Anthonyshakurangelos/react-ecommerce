import React, {useState} from 'react';
import { Card, CardContent, CardMedia, Grid, Button, Typography } from '@mui/material';
import Products from "./Products";

function Advertise() {

    const products = [
        {
          id: 1,
          name: 'Black Velvet Dress',
          image: 'https://source.unsplash.com/-fTJzGiT0-U/600x400',
          price: 29.99,
        },
        {
          id: 2,
          name: 'Skeleton Hand Necklace',
          image: 'https://source.unsplash.com/XXpZIOEzRa0/400x300',
          price: 12.99,
        },
        {
          id: 3,
          name: 'Spiked Leather Jacket',
          image: 'https://source.unsplash.com/LZxS94PXCuw/400x300',
          price: 59.99,
        },
      ];

      const [showProducts, setShowProducts] = useState(false);

      if (showProducts) {
        return <Products />;
      }

  return (
    <Grid container spacing={2} sx={{ marginBottom: '2rem' }}>
      <Grid item xs={12} sm={6}>
        <Card sx={{ maxWidth: 600 }}>
          <CardMedia component="img" image="https://source.unsplash.com/-fTJzGiT0-U/600x400" alt="Advertise" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Shop the Latest Styles
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Discover our new collection of goth clothing and accessories.
            </Typography>
          </CardContent>
          <Button variant="contained"  sx={{ marginBottom: '1rem' }}  onClick={() => setShowProducts(true)} >Shop Now</Button>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid container spacing={2}>
          {products.slice(0, 2).map((product) => (
            <Grid key={product.id} item xs={12} sm={6}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia component="img" image={product.image} alt={product.name} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ${product.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={2}>
          {products.slice(2, 4).map((product) => (
            <Grid key={product.id} item xs={12} sm={3}>
              <Card sx={{ maxWidth: 130 }}>
                <CardMedia component="img" image={product.image} alt={product.name} />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ${product.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Advertise;
