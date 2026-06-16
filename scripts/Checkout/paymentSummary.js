import {cart} from '../../data/cart.js';
import {GetProduct} from '../../data/products.js';
import {GetDeliveryOption} from '../../data/deliveryOptions.js';
import {formatCurrency} from '../utils/money.js';
//Render the payment summary on the checkout page
export function renderPaymentSummary() {
    //Calculate the total price of the products in the cart
        let productpriceCents =  0;
        let shippingPriceCents = 0;

//Loop over the cart items and calculate the total price by multiplying the product price by the cart item's quantity and adding it to the total price
    cart.forEach((cartItem) => {
        const product = GetProduct(cartItem.productId);
        productpriceCents += product.priceCents * cartItem.quantity;
        //Calculate the total shipping price by looping over the cart items and getting the delivery option for each cart item and adding the delivery option price to the total shipping price


        const deliveryOption = GetDeliveryOption(cartItem.deliveryOptionId);
        shippingPriceCents += deliveryOption.priceCents;
     
    });
    const totalBeforeTaxCents = productpriceCents + shippingPriceCents;
      const taxCents = Math.round(totalBeforeTaxCents * 0.1);
      const totalcents = totalBeforeTaxCents + taxCents;
    console.log(productpriceCents);
    console.log(shippingPriceCents);

    const paymentSummaryHTML = `
      <div class="payment-summary-title">
          Order Summary
        </div>

        <div class="payment-summary-row">
          <div>Items (3):</div>
          <div class="payment-summary-money">
          $${formatCurrency(productpriceCents)}
          </div>
        </div>

        <div class="payment-summary-row">
          <div>Shipping &amp; handling:</div>
          <div class="payment-summary-money">$
          ${formatCurrency(shippingPriceCents)}
          </div>
        </div>

        <div class="payment-summary-row subtotal-row">
          <div>Total before tax:</div>
          <div class="payment-summary-money">
          $${formatCurrency(totalBeforeTaxCents)}
          </div>
        </div>

        <div class="payment-summary-row">
          <div>Estimated tax (10%):</div>
          <div class="payment-summary-money">
          $${formatCurrency(taxCents)}
          </div>
        </div>

        <div class="payment-summary-row total-row">
          <div>Order total:</div>
          <div class="payment-summary-money">
          $${formatCurrency(totalcents)}
          </div>
        </div>

        <button class="place-order-button button-primary">
          Place your order
        </button>
        `;
        document.querySelector(".js-payment-summary").innerHTML = paymentSummaryHTML;
}
