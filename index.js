// ARAAY FUCTIONS
// Maps= it creates new array

//how to add return in ir
let arr=[23,76,87];
let a=arr.map((value,index,array)=>{
    console.log(value,index,array)
    return value+ index
    
})
console.log(a);

//Now filter method
// it filters array that passes a tes and creates new one the values which
// give true real array doesnt change
let arr2=[0,3,5,7,8,12,45,87];
let a2=arr2.filter((value)=>{
    return value>10
})
console.log(a2)
let arr3=[87,88,2,6,8,9,98];
let a3=arr3.filter((h)=>{
    return h<10

})
console.log(a3)
//Reduce method in array
let arr4=[2,2,4,6,0,1];
let a4=arr4.reduce((u,i)=>{
    return u+i
})
console.log(a4)
