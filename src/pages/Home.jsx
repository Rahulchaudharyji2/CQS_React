import React, { useState, useEffect } from 'react';
import Carosel from "../component/Carousel/Carosel";
import Product_Card from "../Product_Card";
import { Link } from 'react-router-dom';


const Url = 'https://dummyjson.com/recipes';

function Home() {
  const [count, setCount] = useState(0);
  
  const [food, setFood] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(Url);
        const data = await response.json();
        
        setFood(data.recipes);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const topProduct = () => {
    const topFood = food.filter((item) => item.rating > 4.5);
    console.log(topFood);
    setFood(topFood);
  };

  const add = () => setCount(count + 1);
  const sub = () => setCount(count - 1);

  return (
    <>
      <Carosel />
      <button onClick={topProduct}>Top Rated Product</button>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {food.map((element, id) => (
          
            <Product_Card product={element} />
      
        ))}
      </div>

      <button onClick={add}>Add</button>
      {count}
      <button onClick={sub}>Subtract</button>
    </>
  );
}

export default Home;
