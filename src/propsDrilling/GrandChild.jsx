import React from 'react'

function GrandChild(props) {
    const{data} = props
  return (
    <>
    <div>GrandChild</div>
    <h3>
        {data}
    </h3>
    </>
  )
}

export default GrandChild