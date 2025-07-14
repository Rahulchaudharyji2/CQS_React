import React from "react";
import { Link } from "react-router-dom";

function Product_Card({ product, onBuyNow }) {
  const { image, name, rating, id } = product || {};

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "12px",
        margin: "12px",
        width: "200px",
        borderRadius: "8px",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      {/* Wrap image and name in Link */}
      <Link to={`/productDetails/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img
          src={image}
          alt={name || "Product image"}
          style={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
            borderRadius: "5px",
          }}
        />
        <div style={{ textAlign: "center", fontSize: "larger", marginTop: "8px" }}>
          {name}
        </div>
      </Link>

      <div
        style={{
          textAlign: "center",
          fontFamily: "cursive",
          marginTop: "5px",
        }}
      >
        Rating: {rating}
      </div>

      <button
        onClick={() => onBuyNow?.(product)}
        style={{
          display: "block",
          margin: "10px auto 0",
          height: "40px",
          width: "100px",
          borderRadius: "8px",
          backgroundColor: "#1976d2",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        BUY NOW
      </button>
    </div>
  );
}

export default Product_Card;
