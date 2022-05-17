let str1 = "hApPy" //"APhpy"

let str2 = "moveMENT" //"MENTmove"

let str3 = "shOrtCAKE" //"OCAKEshrt"

let result = [];

function ifUppercase(str){
 for (let char of str){
  if(char.toUpperCase() === char){
   result.push(char)
  }
  for (let char of str){
  if(!result.includes(char)){
    result.push(char)
  }
 }
}
return result
}
console.log(ifUppercase(str1))
