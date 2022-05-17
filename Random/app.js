const arr_1 = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
];

function ifMine(a)
{
	if (a == 9)
	{
		
	}
}

function shiftClockwise(arr)
{
	for (let row = 0; row < arr.length; row++)
	{
		for (let column = 0; column < arr[row].length; column++)
		{
		  if (row == 0) {
		    arr[row][column]= arr[row+1][column] + arr[row][column-1] + arr[row][column+1] + arr[row+1][column+1] + arr[row+1][column-1];
		  } else if (column == 0) {
        arr[row][column]= arr[row-1][column] + arr[row+1][column] + arr[row][column+1] + arr[row+1][column+1] + arr[row-1][column+1];
      } else if (row == 0 && column == 0) {
        arr[row][column]= arr[row+1][column] + arr[row][column+1] + arr[row+1][column+1];
      } else {
        arr[row][column] = (arr[row-1][column] + arr[row+1][column] + arr[row][column-1] + arr[row][column+1] + 
				arr[row-1][column-1]+arr[row+1][column+1] + arr[row-1][column+1] + arr[row+1][column-1]);
      }
		}
	}
	for (let row = 0; row < arr.length; row++)
	{
		for (let column = 0; column < arr[row].length; column++)
		{
			if (arr[row][column] == 1)
			{
				arr[row][column] = 9;
			}
		}
  }
	return arr;
}

console.log(shiftClockwise(arr_1));