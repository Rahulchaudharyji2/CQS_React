 const Url='https://fakestoreapi.com/products/1';

 const pwandeep=async ()=>{
    try {
        const response= await fetch(Url);
        const data=await response.json();
        console.log(data)
        
    } catch (error) {
        console.log(error)
    }
   console.log("I am function")
 }
 pwandeep();
            
