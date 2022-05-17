const arr = [1, 2,1, 2, NaN];
for(let i=0; i<arr.length; i++)
{
    if(isNaN(arr[i]))
    {
        console.log(i);
    }
}