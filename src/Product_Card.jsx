import React from "react";

function Product_Card() {
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
            src="https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg"
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
          Maharaja BURGER
        </div>
        <div
          style={{ textAlign: "center", fontFamily: "cursive", margin: "3px" }}
        >
          Price :$200
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
