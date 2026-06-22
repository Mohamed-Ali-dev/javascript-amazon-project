import {addToCart, cart, loadFromStorage} from '../../data/cart.js';
describe('test suite : addToCart', () => {
    it('adds an existing product to the cart', () =>{
        spyOn(localStorage, 'setItem');

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                quantity: 1,
                deliveryOptionId: '1'
            }]);
        });
        //load the cart from storage, which will use the mocked localStorage.getItem
        loadFromStorage();
            addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
        expect(cart.length).toEqual(1);
        //expect that localStorage.setItem was called once to save the cart after adding the product
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(2);
    });
    
    it('adds a new product to the cart', () =>{
        //spyOn(object to mock, 'method to mock')
        spyOn(localStorage, 'setItem');
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([]);
        });
        //load the cart from storage, which will use the mocked localStorage.getItem
        loadFromStorage();

        addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
        expect(cart.length).toEqual(1);
        //expect that localStorage.setItem was called once to save the cart after adding the product
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(1);
    });
});