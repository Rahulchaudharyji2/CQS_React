import React from 'react'
import GrandChild from './GrandChild'
function Child(props) {
    const {data}= props
  return (
    <>
    <h1>
        {data}
    </h1>
    <GrandChild data={data} />
    </>
  )
}

export default Child