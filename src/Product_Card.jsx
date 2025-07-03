import React from "react";

function Product_Card(props) {
  console.log(props)
 const { image, name, rating } = props.product|| {};

  return (
    <>
      <div
        style={{
          border: "2px solid black",
          padding: "12px",
          margin: "12px",
          width: "200px",
          borderRadius: "4px",
        }}
      >
        <div>
          <img
            src={image}
            alt=""
            srcset=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
        </div>
        <div style={{ textAlign: "center", fontSize: "larger" }}>
         {name}
        </div>
        <div
          style={{ textAlign: "center", fontFamily: "cursive", margin: "3px" }}
        >
          Rating :{rating}
        </div>
        <button 
          style={{
            textAlign: "center",
            height: "40px",
            width: "80px",
            borderRadius: "8px",
            marginLeft: "65px",
          }}
        >
          BUY NOW
        </button>
      </div>
    </>
  );
}

export default Product_Card;
