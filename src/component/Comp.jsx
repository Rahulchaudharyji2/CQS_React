import React from 'react'
import Abc from "./ABC"
function Comp() {
    const message ="I am A seller of this Company";
  return (
    <div>

        <div>

            <div>
                {message}
            </div>
        </div>
        <Abc/>
    </div>
  )
}

export default Comp