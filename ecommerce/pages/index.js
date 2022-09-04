import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components";
const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {["Prduct 1", "Prduct 2", "Prduct 3"].map((product) => product)}
      </div>
      <FooterBanner />
    </>
  );
};

export default Home;
