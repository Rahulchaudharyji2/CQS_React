import './Ekansh.css'
import Abc from "./Ekansh"
function App() {
  

  return (
    <>
     <div style={{background:"red",fontSize:"larger" ,border:"12px solid black "}} >
      I have A CAR
     </div>
     <div className="second">
      I have a second CAR
     </div>
     <Abc/>
     <div> SECOND type call</div>
     <Abc>

     </Abc>
    </>
  )
}

export default App
