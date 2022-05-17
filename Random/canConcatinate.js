let array1 = [[2, 1, 3], [5, 4, 7, 6, 7]]
let array2 = [1, 2, 3, 4, 5, 6, 7]

function concatinate(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr = arr.flat();
    if (arr.length == arr.flat().length) {
      break;
    }
  }
  console.log(arr)
  return arr
}

function canConcatinate(arrays, target) {
  let array = concatinate(arrays)
  if (array.length !== target.length) {
    return false;
  }

  for (let i = 0; i < array.length; i++) {
    if (!target.includes(array[i])) {
      return false
    }
  }
  return true;
}
console.log(canConcatinate(array1, array2))