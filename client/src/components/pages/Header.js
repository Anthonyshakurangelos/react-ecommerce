import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
// import Cart from "../Cart";
// import Products from "../Products";
// import Home from "./Home";

function Header(currentPage, handlePageChange) {
  

  return (
    <div>
      <AppBar position="static" sx={{ bgcolor: "#4B0082" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Spooky Goth eCommerce
          </Typography>
          <Button color="inherit"
           onClick={() => handlePageChange("Home")}
          >
            Home
          </Button>
          <Button color="inherit" 
          onClick={() => handlePageChange("Products")}
          >
            Products
          </Button>
          <Button color="inherit" 
          onClick={() => handlePageChange("Cart")}
          >
            Cart
          </Button>
        </Toolbar>
      </AppBar>
      {/* {renderPage()} */}
    </div>
  );
}

export default Header;
