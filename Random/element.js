//1
const array = [1,2,5,2,7,7,1,9];
for (let i=0; i<array.length; i++)
{
	for(let j=i+1; j<array.length; j++)
	{
		if(array[i] == array[j])
		{
			delete array[i];
		}
	}
}
console.log(array);

//2
const arr_1 = [1,2,5,2,7,7,1,9];
let arr_2 = [];
for (let i=0; i<arr_1.length; i++)
{
	for(let j=i+1; j<arr_1.length; j++)
	{
		if(arr_1[i] != arr_1[j])
		{
			arr_2.push(arr_1[i]);
		}
	}
}
console.log(arr_2);