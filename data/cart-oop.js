// This file will hold the cart items, which will be added to when the user clicks "Add to Cart" on a product. It will be an array of objects, where each object represents a product that has been added to the cart. Each object will have the following properties: id, name, price, quantity, and image.
//export is used to make the cart variable available to other files, such as amazon.js, so that we can manipulate the cart from there.

function Cart(localStorageKey) {
        const cart = {
        cartItems: undefined,

        loadFromStorage(){
            this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
            if (!this.cartItems) {
            this.cartItems = [
                {
                productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                quantity: 2,
                deliveryOptionId: "1",
                },
                {
                productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                quantity: 1,
                deliveryOptionId: "2",
                },
            ];
            }
        },


        saveToStorage() {
        localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
        },


        
        // add the productId and quantity for a product
        //the Id is
        addToCart(productId) {
        let matchingItem;
        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
            matchingItem = cartItem;
            }
        });
        if (matchingItem) {
            matchingItem.quantity += 1;
        } else {
            this.cartItems.push({
            productId: productId,
            quantity: 1,
            deliveryOptionId: "1",
            });
        }
        this.saveToStorage();
        },



        // Delete product from cart we get the id from the checkout.js
        removeFromCart(productId) {
        const newCart = [];
        this.cartItems.forEach((cartItem) => {
            if (cartItem.productId !== productId) {
            newCart.push(cartItem);
            }
        });
        this.cartItems = newCart;
        this.saveToStorage();
        },


        
    updateDeliveryOption(productId, deliveryOptionId){
        //get the cart item by the productId
        let matchingItem;
        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
            matchingItem = cartItem;
            }
        });
        matchingItem.deliveryOptionId = deliveryOptionId;
        this.saveToStorage();
        }
    };
    return cart;
}

const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');

 cart.loadFromStorage();


 businessCart.loadFromStorage();

console.log(cart);
console.log(businessCart);
