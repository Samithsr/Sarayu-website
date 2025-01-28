// Products.jsx
import React from 'react';
import './Products.css'; // Create this CSS file

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Product 1",
      description: "This is a longer card with supporting text below as a natural lead-in to additional content.",
      image: "product1.jpg"
    },
    {
      id: 2,
      title: "Product 2",
      description: "This is a longer card with supporting text below as a natural lead-in to additional content.",
      image: "product2.jpg"
    },
    {
      id: 3,
      title: "Product 3",
      description: "This is a longer card with supporting text below as a natural lead-in to additional content.",
      image: "product3.jpg"
    },
    {
      id: 4,
      title: "Product 4",
      description: "This is a longer card with supporting text below as a natural lead-in to additional content.",
      image: "product4.jpg"
    }
  ];

  return (
    <div className="products-grid">
      {products.map((product) => (
        <div className="product-card-wrapper" key={product.id}>
          <div className="product-card">
            <img 
              src={product.image} 
              alt={product.title} 
              className="product-image"
            />
            <div className="product-content">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;