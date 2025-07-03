import React from "react";
import { useState } from "react";

function Navbar() {
  

  

  return (
    <>
      <div>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            justifyContent: "space-between",
            backgroundColor: "red",
            fontSize: "larger",
            border: "2px solid black",
            height: "45px",
            color:"white",
            paddingTop:"13px"
            
          }}
        >
          <li>Home</li>
          <li>About Us</li>
          <li> Contact Us</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
