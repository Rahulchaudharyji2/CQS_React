
import Home from "./pages/Home"
import Blog from "./pages/Blog";
import  NavBar from "./Navbar"
import AboutUs from "./pages/AboutUs";
import ProductDetails from "./pages/ProductDetails";
//Import Rotes and Route for routing
import { Routes, Route } from "react-router-dom";
import Parent from "./propsDrilling/Parent";
import Child from "./propsDrilling/Child";
import GrandChild from "./propsDrilling/GrandChild";
function App() {
  return (
    <>
    <NavBar/>
{
/*
<Parent/>
<Child/>
<GrandChild/>
*/
}

    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/blog" element={<Blog/>}/>
<Route path="/about" element={<AboutUs/>}/>
<Route path="/productDetails/:id" element={<ProductDetails/>}/>

    </Routes>
    
    {/*<Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/about" element={<AboutUs/>}/>
    </Routes> */
}
    
    </>
  );
}

export default App;
