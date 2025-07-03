import React from 'react'

function Footer() {
  return (
   <>
   <div style={{border:"2px solid red"}}>
  <div class="section" style={{backgroundColor: "rgb(177, 151, 151)", color: "white",  width: "100%",
            height: '300px;'}}>
        <h2>Section 1 </h2>
    </div>
    <div class="section"style={{backgroundColor: "rgb(177, 151, 151)", color: "white",  width: "100%",
            height: '300px;'}} >
        <h2>Section 2</h2>
    </div>
    <div style={{ position: "sticky",
            padding:" 5px",
            bottom: "0",
            width: "100%",
            height: '50px',
            background: "rgb(55, 61, 55)",
            color: 'white',
            fontSize: '30px'}}>
        Fixed Footer
    </div>
   </div>
   
   </>
  )
}

export default Footer