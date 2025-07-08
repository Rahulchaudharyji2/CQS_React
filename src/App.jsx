import { useState,useEffect } from "react";
import "./Ekansh.css";
import Navbar from "./Navbar";
import Product_Card from "./Product_Card";
import Pawan from "./component/Comp";
import recipes from "./lib/api";
import Carosel from "./component/Carousel/Carosel";
const sum = function(a, b) {
  console.log(a + b);
};
{
  /* 
  https://mui.com/material-ui/getting-started/installation/ */
}
 const Url='https://fakestoreapi.com/products/1';

 const pwandeep=async ()=>{
    try {
        const response= await fetch(Url);
        const data=await response.json();
        console.log(data)
        
    } catch (error) {
        console.log(error)
    }
   console.log("I am function");
 }

function App(props) {
  const [count ,pawandeep]=useState(0)
  const [food,setfood]=useState(recipes)
  { /*useEffect(pwandeep,[]) */}
       
  const topProduct=()=>{
    const topfood=food.filter((item)=>item.rating>4.5);
    console.log(topfood)
    setfood(topfood)
  }
const add=(()=>{
 pawandeep(count+1)
})
const sub=(()=>{
  pawandeep(count-1)
})

  
  const { image, title, price } = props;

  sum(3, 5);
  sum(5, 6);
  sum(4, 6);

  return (
    <>
      <Navbar />
      <Carosel/>
<button onClick={topProduct}>Top Rated Product</button>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {
          food.map((element,id)=>{
            return <Product_Card key={id} product={element}/>
          })
        }

       
      </div>
     <button onClick={add}>Add </button>
     {count}
     <button onClick={sub}>subtraction</button>
    </>
  );
}

export default App;
