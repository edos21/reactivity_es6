const { beReactive, setWatcher } = require('./reactive.js')

let product = {
  pizza: {
    price: 10,
    amount: 2
  }
}

const productReactive = beReactive(product)

let totalPrice = {}

setWatcher(() => {totalPrice.pizza = productReactive.pizza.amount * productReactive.pizza.price})

console.log(totalPrice)

productReactive.pizza.amount = 10

console.log(totalPrice)

productReactive.coke = {amount: 10, price: 5}

setWatcher(() => {totalPrice.coke = productReactive.coke.amount * productReactive.coke.price})

console.log(totalPrice)

productReactive.coke.amount = 100

console.log(totalPrice)