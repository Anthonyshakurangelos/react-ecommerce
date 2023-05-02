import React, {useState} from 'react';
import { Card, CardContent, CardMedia, Grid, Typography, Button, Box, IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import SideBar from './SideBar';
// import {Link} from 'react-router-dom';
import CheckOut from './CheckOut';


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
  {
    id: 4,
    name: 'Red Velvet Dress',
    image: 'https://source.unsplash.com/ItfjwKz7Pfo/600x400',
    price: 39.99,
  },
  {
    id: 5,
    name: 'Pentagram Earrings',
    image: 'https://source.unsplash.com/1r8_HLH0bPQ/400x300',
    price: 9.99,
  },
  {
    id: 6,
    name: 'Biker Boots',
    image: 'https://source.unsplash.com/V-CmP7Q2x4o/400x300',
    price: 79.99,
  },
  {
    id: 7,
    name: 'Skull Print Shirt',
    image: 'https://source.unsplash.com/WEQbevZ0sPY/400x300',
    price: 24.99,
  },
  {
    id: 8,
    name: 'Leather Backpack',
    image: 'https://source.unsplash.com/fqE1bKjwWf0/400x300',
    price: 49.99,
  },
  {
    id: 9,
    name: 'Gothic Lace Top',
    image: 'https://source.unsplash.com/-IoO5hHRJ5c/400x300',
    price: 19.99,
  },
  {
    id: 10,
    name: 'Spiked Choker Necklace',
    image: 'https://source.unsplash.com/ATofo0DYmIM/400x300',
    price: 14.99,
  },
];

function Products() {

    const [showCheckout, setShowCheckout] = useState(false);

  if (showCheckout) {
    return <CheckOut />;
  }

  return (
      <Grid container spacing={2}>
      {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" image={product.image} alt={product.name} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.price}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <IconButton aria-label="add to cart">
                  <AddShoppingCartIcon />
                </IconButton>
                <Button variant="contained" onClick={() => setShowCheckout(true)}>
                  Buy Now
                </Button>
              </Box>
            </CardContent>
          </Card>
          {/* <SideBar/> */}
        </Grid>
      ))}
       {/* {renderPage()} */}
    </Grid>
  );
}

export default Products;
