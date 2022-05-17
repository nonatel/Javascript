const women = ["Elise", "Mary"];
const men = ["John", "Rick"];
let pair = [];
if(women.length == men.length)
{
    for(let i=0; i<men.length; i++)
    {
        pair.push([women[i],men[i]]);
    }
}
console.log(pair);