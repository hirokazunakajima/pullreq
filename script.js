window.onload = function () {
    changeVal();
}

function changeVal(){

    var t = document.querySelector('#bill');
    t.addEventListener('change', function () {

        var options = {
            'GST': true,
            'Sask': true
        };

        document.querySelector('#total').value =  calculateTax(this.value, options);

    }, false);
}

function calculateTax(bill, options) {
    var tax = .07, // default is PST at 7%
        total;

    if (options && options.GST === false && options.Sask === true) {
        tax = .05;
    } else if (options && options.GST === true && options.Sask === true) {
        tax = .1;
    } else if (options && options.GST === true) {
        tax = .12;
    }

    bill = parseFloat(bill);

    total = (bill * tax) + bill;

    total = total.toFixed(2); // money format

    return total;
};
