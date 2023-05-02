import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setCartItems(items);
    const price = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(price);
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleRemoveItem = (item) => {
    const updatedCartItems = cartItems.filter((i) => i.id !== item.id);
    setCartItems(updatedCartItems);
    const price = updatedCartItems.reduce((acc, i) => acc + i.price * i.quantity, 0);
    setTotalPrice(price);
  };

  const handleCheckout = () => {
    // Handle checkout logic here
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <div key={item.id}>
              <p>{item.name} x {item.quantity} - ${item.price * item.quantity}</p>
              <Button variant="contained" onClick={() => handleRemoveItem(item)}>Remove Item</Button>
            </div>
          ))}
          <h3>Total Price: ${totalPrice}</h3>
          <Button variant="contained" onClick={handleCheckout}>Proceed to Checkout</Button>
        </>
      ) : (
        <p>Your cart is currently empty.</p>
      )}
    </div>
  );
}

export default Cart;
