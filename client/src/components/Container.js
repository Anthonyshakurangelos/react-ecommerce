import React, { useState } from "react";
import Home from "./pages/Home";
// import Header from "./pages/Header";
import Navigation from "./Navigation";
import Products from './Products';
import Cart from "./Cart";
import CheckOut from "./CheckOut";

export default function Container() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Cart") {
      return <Cart />;
    }
    if (currentPage === "Products") {
      return <Products />;
    }
    if (currentPage === "CheckOut") {
      return <CheckOut />;
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      {/* <Header handlePageChange={handlePageChange} currentPage={currentPage} /> */}
      <Navigation
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
      {renderPage()}
    </div>
  );
}
