let cart_1 = ([{
    name: "Iphone 20x",
    quantity: 1,
    price: 1350
  },
  {
    name: "Samsung x30",
    quantity: 1,
    price: 1225
  },
  {
    name: "Nokia 9250",
    quantity: 1,
    price: 800
  },
  {
    name: "Tesla Model Y",
    quantity: 1,
    price: 72999
  }
])

let cart_2 = ([{
    name: "jogging pants",
    quantity: 1,
    price: 29.99
  },
  {
    name: "tennis socks",
    quantity: 2,
    price: 5.99
  },
  {
    name: "sweat shirt",
    quantity: 1,
    price: 59.99
  }
])
let prices = []
function mostExpensive(cart){
 let prices = []
 for(let i=0; i<cart.length; i++){
  prices.push(cart[i].price)
 }
 let maxValue =  Math.max(prices)
 let index = prices.indexOf(Math.max(prices))
 
 cart[index].price = ((maxValue * 75) / 100)
}


function totalPrice(cart){
 let totalSum = 0
 for(let i=0; i<mostExpensive(cart).length; i++){
  totalSum += (cart[i].price)
 }
 return totalSum
}
console.log(totalPrice(cart_1))