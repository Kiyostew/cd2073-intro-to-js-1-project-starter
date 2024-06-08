/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [];
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
const product1 = {
  name: "Cherry",
  price: 5,
  quantity: 0,
  productId: 1122,
  image: "./images/cherry.jpg",
};

const product2 = {
  name: "Orange",
  price: 5,
  quantity: 0,
  productId: 2233,
  image: "./images/orange.jpg",
};

const product3 = {
  name: "Strawberry",
  price: 5,
  quantity: 0,
  productId: 3344,
  image: "./images/strawberry.jpg",
};

products.push(product1);
products.push(product2);
products.push(product3);

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId) {
  //get product by productId
  const getProduct = products.find(function (product, index, products) {
    return product.productId === productId;
  });

  //check if item is in cart
  if (getProduct) {
    const cartItem = cart.find(function (product, index, array) {
      return product.productId === productId;
    });

    // add product to cart and increase quantity
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cart.push(getProduct);
    }
  }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId) {
  //get product by productId
  const getProduct = products.find(function (product, index, products) {
    return product.productId === productId;
  });

  //increase product's quantity
  if (getProduct) {
    getProduct.quantity += 1;
  }
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  //get product by productId
  const getProduct = products.find(function (product, index, products) {
    return product.productId === productId;
  });

  //decrease the quantity of product
  if (getProduct) {
    getProduct.quantity -= 1;
  }

  //remove product from cart if quantity under 0

  if (getProduct === 0) {
    cart.splice(0, 1);
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {
  //get index of product by productId to remove from cart
  const findProduct = cart.findIndex(function (product, index, products) {
    return product.productId === productId;
  });

  //check if product is in cart
  if (findProduct !== -1) {
    //update quanity to 0
    cart[findProduct].quantity = 0;

    //remove product from cart
    cart.splice(findProduct, 1);
  }
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/
function cartTotal() {
  let getTotal = 0;

  //interate through cart to get total cost of all products

  for (let i = 0; i < cart.length; i++) {
    //multiply quanitity and price for total
    getTotal += cart[i].price * cart[i].quantity;
  }
  return getTotal;
}

/* Create a function called emptyCart that empties the products from the cart */

function emptyCart() {
  cart.splice(0, cart.length);
}

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/

function pay(amount) {
  const fullTotal = cartTotal();
  const checkBalance = amount - fullTotal;
  return checkBalance;
}
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
};
