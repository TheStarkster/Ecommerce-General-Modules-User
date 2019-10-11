const Razorpay = require('razorpay')

module.exports = {
    OrderHandler: (req, res) => {
        var OrderID;
        var instance = new Razorpay({
            key_id: 'rzp_test_hcBEyLK2rKpWkS',
            key_secret: 'AilD2hmREnc2HEDIuIBYzu6O'
        })

        var options = {
            amount: 50000,
            currency: "INR",
            receipt: "order_rcptid_11",
            payment_capture: '0'
        }
        instance.orders.create(options, function (err, order) {
            console.log(order);
            OrderID = order.id
        })
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<form action="http://localhost:2024/payment/" method="POST"><script src = "https://checkout.razorpay.com/v1/checkout.js" data-key="rzp_test_hcBEyLK2rKpWkS" data-amount="50000" data-currency="INR" data-order_id="'+ OrderID +'" data-buttontext="Pay with Razorpay" data-name="Acme Corp" data-description="A Wild Sheep Chase is the third novel by Japanese author Haruki Murakami" data-image="" data-prefill.name="Gaurav Kumar" data-prefill.email="gaurav.kumar@example.com" data-prefill.contact="9999999999" data-theme.color="#F37254"></script><input type="hidden" custom="Hidden Element" name="hidden"></form>');
        res.end();
    }
}