
function getLength(arr){
 for(let i=0; i<arr.length; i++){
  arr = arr.flat();
  if(arr.length == arr.flat().length){
   break;
 }
}
let length = arr.length
 return length
}

let arr1 = [1, [2], 1, [2], 1];

console.log(getLength(arr1))