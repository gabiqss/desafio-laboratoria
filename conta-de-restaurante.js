module.exports = function restaurantBill(bill) {

    var tax = bill*0.10;

    var total = (bill+tax)/5;

    return "$"+total;
};
