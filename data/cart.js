// This file will hold the cart items, which will be added to when the user clicks "Add to Cart" on a product. It will be an array of objects, where each object represents a product that has been added to the cart. Each object will have the following properties: id, name, price, quantity, and image.
//export is used to make the cart variable available to other files, such as amazon.js, so that we can manipulate the cart from there.
export const cart = [
    
];
export function addToCart(productId){
 let matchingItem;
        cart.forEach((cartItem) =>{
          if(productId === cartItem.productId){
            matchingItem = cartItem;
          }
        });
        if(matchingItem){
          matchingItem.quantity += 1;
        }else{
           cart.push({
            productId: productId,
            quantity:1
        });
        }
}