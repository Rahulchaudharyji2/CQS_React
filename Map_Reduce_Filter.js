 
// Array(map, filter, reduce)
const arr = [10, 20, 30, 40, 50];
//console.log(arr);
//arr.push("orange");
//console.log(arr);


 //console.log(arr.length);
//console.log(arr[0]);
// console.log(arr[1]);

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }


// map

 

console.log(arr);

//const modify= arr.map((i)=>i+5);
    

    

//console.log(modify)




// const product = [
//     {
//         price:1200,
//         name:"IPhone"
//     },
//     {
//         price:1400,
//         name:"hp"
//     },
//     {
//         price:100,
//         name:"lenova"
//     },
// ];

// product.map((element)=>{
//     console.log(element.name, element.price);
// })

 // filter

 const arr1 = [10,20,30,40,50]; // 30>=30
//const filterArray=arr.filter((pnter)=>pnter>30 )
//console.log(filterArray)

// const res = arr1.filter((element)=>{
//     return element >=30; // [30,40,50]
// });
// console.log(res);

// // reduce

 //console.log(sumOfElement(arr1));
 const ans= arr1.reduce((sum,element)=> sum+element)
// const ans = arr1.reduce((accumulator,element)=>{
//     return accumulator + element;
// },0) // 0+10, 10+20,30+30, 60+40, 100+50, 150
console.log(ans);  
  