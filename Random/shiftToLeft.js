function shiftToLeft(arg1,arg2){
 if(arg2 == 0){
  return arg1;
 }else if(arg2 == 1){
  return arg1 * 2;
 }else{
  return shiftToLeft(arg1,arg2 - 1) * 2;
 }
}

console.log(shiftToLeft(-32,2))