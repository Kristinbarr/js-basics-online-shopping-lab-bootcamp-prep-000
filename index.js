var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart = [ 
    {
      itemName: item,
      itemPrice: Math.round(Math.random() * (100 - 1) + 1)
    }
  ]
  return `${item} has been added to your cart.`
}

function viewCart() {
  let cartMessage = `In your cart, you have `;
  
  for (let i = 0; i < cart.length; i++) {
    
    let itemMessage = `${cart[i].itemName} at \$${cart[i].itemPrice}`

    if (cart.length === 1) {
      cartMessage += itemMessage
    } else if (i === cart.length-1) {
      cartMessage += `and ${itemMessage}.`
    } else {
      cartMessage += `${itemMessage}, `
    }
  }
  return cartMessage;
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
