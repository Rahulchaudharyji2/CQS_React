import './Ekansh.css'
import Abc from "./Ekansh"
import Navbar from "./Navbar"
import Product_Card from './Product_Card'
function App() {
  

  return (
    <>
   <Navbar/>
   <div style={{ display:"flex"}}>

   <Product_Card/>
   <Product_Card/>
   <Product_Card/>
   <Product_Card/>
   <Product_Card/>
   <Product_Card/>
   </div>
    </>
  )
}

export default App
