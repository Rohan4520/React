import React from "react";
import "./SingleLaptopInfo.css";

function SingleLaptopInfo({ product,handleProductSingle }) {
  console.log(product)
  return (
    <div className="laptop-container">
      <div className="laptop-image">
        <img src={product.productImage} alt={product.productName} />
      </div>
      <div className="laptop-details">
        <h2 className="laptop-title">{product.productName}</h2>
        <p className="laptop-description">{product.productDescription}</p>

        <div className="rating-price">
          <span className="rating">⭐ {product.productRating}</span>
          {/* <span className="price">₹{product.price.toLocaleString()}</span> */}
        </div>

        <div className="button-group">
          <button className="btn cart">Add to Cart</button>
          <button className="btn wishlist">Add to Wishlist</button>
          <button className="btn buy">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default SingleLaptopInfo;
