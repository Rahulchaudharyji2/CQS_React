import React ,{useState} from 'react'
import Child from './Child';
function Parent() {
    const [data, setData] = useState('Hello from Parent');
    console.log(data)
  return (

  
    <div>
      <h1>{data}</h1>
      
      <Child data={data} />
    </div>
  );
  
}

export default Parent