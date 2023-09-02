const restaurantBill = (bill) => {
    const tax = bill * 0.1;
    const total = bill + tax;
    return `$${(total / 5)}`;
};

const output1 = restaurantBill(50);
const output2 = restaurantBill(100);
const output3 = restaurantBill(85);

console.log(output1);
console.log(output2);
console.log(output3);