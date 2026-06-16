export const deliveryOptions = [
  {
    id: "1",
    deliveryDays: 7,
    priceCents: 0,
  },
  {
    id: "2",
    deliveryDays: 3,
    priceCents: 499,
  },
  {
    id: "3",
    deliveryDays: 1,
    priceCents: 999,
  },
];
//get the delivery option by id
export function GetDeliveryOption(deliveryOptionId) {
  
    let deliveryOption;
    deliveryOptions.forEach((option) => {
      if (option.id === deliveryOptionId) {
        deliveryOption = option;
      }
    });
    //If the delivery option is not found, return the default delivery option (the first one in the array)
    return deliveryOption || deliveryOptions[0];
}