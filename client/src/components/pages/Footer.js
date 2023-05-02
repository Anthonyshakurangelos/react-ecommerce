import * as React from 'react';
import { Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'© '}{new Date().getFullYear()}{' Spooky Goth eCommerce '}
      <Link color="inherit" href="/">
        Privacy Policy
      </Link>{' '}
      <Link color="inherit" href="/">
        Terms of Use
      </Link>
    </Typography>
  );
}

export default Footer;
