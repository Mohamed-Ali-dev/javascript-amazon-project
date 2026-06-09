import {cart} from '../../data/cart.js';
import {GetProduct} from '../../data/products.js';
export function renderPaymentSummary() {
        let productpriceCents =  0;

    cart.forEach((cartItem) => {
        const product = GetProduct(cartItem.productId);
        productpriceCents += product.priceCents * cartItem.quantity;

    });
    console.log(productpriceCents);
}