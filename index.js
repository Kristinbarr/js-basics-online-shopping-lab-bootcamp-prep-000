var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let cart = [ 
    {
      itemName: item,
      itemPrice: Math.round(Math.random() * (100 - 1) + 1)
    }
  ]
  return `${item} has been added to your cart.`
}

function viewCart() {
  let cartMessage = `In your cart, you have `;
  for (let item in cart) {
    cartMessage += ${
  }
  return cartMessage
  // bananas at $17, pancake batter at $5, and eggs at $49.
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
