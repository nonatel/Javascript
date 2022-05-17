let products = {
  "Computer": 600,
  "TV": 800,
  "Radio": 50
}
function compareNumeric(a, b) {
  if (a[1] > b[1]) return -1;
  if (a[1] == b[1]) return 0;
  if (a[1] < b[1]) return 1;
}
let asd = Object.entries(products).filter(item => {
  if (item[1] > 500) {
    return item
  }
})
const dsa = asd.sort(compareNumeric)
let filteredArr = Object.fromEntries(asd);
console.log(asd)