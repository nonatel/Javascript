let arr = [81, 72, 43, 72, 81, 99, 99, 100, 12, 54]
let dups = [];

function getDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        dups.push(arr[i])
      }
    }
  }
  dups.sort(function(a, b) {
    return a - b
  });
  return dups;
}

console.log(getDuplicates(arr))