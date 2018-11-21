var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push(
    {
      'itemName': item,
      'itemPrice': Math.round(Math.random() * (100 - 1) + 1)
    })
  return `${item} has been added to your cart.`
}

function viewCart() {
  let cartMessage = '';
  let itemMessage = '';
  
  if (cart.length === 0){
    cartMessage += `Your shopping cart is empty.`;
  } else {
    cartMessage += `In your cart, you have `;
  }
  cart.map((elem, i) => {
    itemMessage = `${elem.itemName} at $${elem.itemPrice}`
    if (cart.length === 1) {
      cartMessage += `${itemMessage}.`
    } else if (i === cart.length-1) {
      cartMessage += `and ${itemMessage}.`
    } else {
      cartMessage += `${itemMessage}, `
    }
  })
  return cartMessage;
}

function total() {
  return cart.reduce((acc, elem) => {
    return acc += elem.itemPrice;
  }, 0)
}

function removeFromCart(item) {
  // iterate through cartArr
    // if cart[i].item is true,
      // delete whole obj from arr
  if (cart.item) {
    
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
