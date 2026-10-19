import React from "react";
import "./Product.css";
import { FiArrowRight } from "react-icons/fi";
import shop1 from './laptop1.png';
import shop2 from './laptop2.png';
import shop3 from './laptop3.png';
import shop4 from './laptop4.png';

const products = [
  {
    name: "MacBook Air M3",
    image: shop1 ,
    processor: "Apple M3",
    ram: "8GB RAM",
    storage: "512GB SSD",
    price: "₹1,14,900",
    oldPrice: "₹1,29,900",
    discount: "-11%",
  },
  {
    name: "ASUS ROG Zephyrus G14",
    image: shop2 ,
    processor: "AMD Ryzen 9",
    ram: "16GB RAM",
    storage: "1TB SSD",
    price: "₹1,39,990",
    oldPrice: "₹1,69,990",
    discount: "-18%",
  },
  {
    name: "Dell XPS 15",
    image:  shop3 ,
    processor: "Intel Core i7",
    ram: "16GB RAM",
    storage: "1TB SSD",
    price: "₹1,24,990",
    oldPrice: "₹1,49,990",
    discount: "-17%",
  },
  {
    name: "Lenovo ThinkPad X1 Carbon",
    image: shop4 ,
    processor: "Intel Core i7",
    ram: "16GB RAM",
    storage: "512GB SSD",
    price: "₹1,09,990",
    oldPrice: "₹1,29,990",
    discount: "-15%",
  },
];

function Product() {
  return (
    <section className="product-section" id="laptops">

      <div className="product-top">

        <div>
          <p className="product-label">OUR COLLECTION</p>

          <h2>Featured Laptops</h2>
        </div>

        <a href="#laptops" className="view-all">
          View All Laptops
          <FiArrowRight />
        </a>

      </div>

      <div className="product-grid">

        {products.map((product, index) => (
          <div
            className="product-card"
            key={product.name}
            style={{ "--delay": `${index * 0.12}s` }}
          >
          
            <div className="discount">
              {product.discount}
            </div>

            <div className="product-image">
              <img
                src={product.image}
                alt={product.name}
              />

            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="specs">
                {product.processor}
                <span>|</span>
                {product.ram}
                <span>|</span>
                {product.storage}
              </p>


              <div className="price-row">

                <span className="price">
                  {product.price}
                </span>

                <span className="old-price">
                  {product.oldPrice}
                </span>

                <span className="save">
                  {product.discount}
                </span>

              </div>


              <button className="details-btn">
                View Details
                <FiArrowRight />
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Product;