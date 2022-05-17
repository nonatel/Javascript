let array1 = ["Jane", "is", "pretty", "ugly"]
let array2 = ["Jane", "is", "pretty"]

function missingElement(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return arr1[i]
      }
    }
}
console.log(missingElement(array1, array2))
