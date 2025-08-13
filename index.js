document.addEventListener('DOMContentLoaded', function () {
	const billAmount = document.getElementById('billAmount');
    const tipPercentage = document.getElementById('tipPercentage');
    const submitButton = document.querySelector('button[type="submit"]');
    const errorMsg = document.getElementById('error');
    const result = document.getElementById('result');
    resetButton = document.getElementById('resetButton');


	billAmount.addEventListener('input', function () {
        if (billAmount.value < 0 | billAmount.value === '') {
            errorMsg.textContent = 'Please enter a valid bill amount.';
            submitButton.disabled = true;
        } else {
            billAmount.style.borderColor = 'green';
            errorMsg.textContent = '';
            submitButton.disabled = false;
        }
    });

    tipPercentage.addEventListener('input', function () {
        if (tipPercentage.value < 10 | tipPercentage.value === '') {
            errorMsg.textContent = 'Please enter a valid tip percentage.';
            submitButton.disabled = true;
        } else {
            tipPercentage.style.borderColor = 'green';
            errorMsg.textContent = '';
            submitButton.disabled = false;
        }
    });

    submitButton.addEventListener('click', function (e){
        e.preventDefault();
        const bill = parseFloat(billAmount.value);
        const tip = parseFloat(tipPercentage.value);
        const totalTip = (bill * tip / 100).toFixed(2);
        const totalAmount = (bill + parseFloat(totalTip)).toFixed(2);

        result.innerHTML = `<p>Total Tip: $${totalTip}</p><p>Total Amount: $${totalAmount}</p>`;
        result.style.display = 'block';
        billAmount.value = '';
        tipPercentage.value = '';
        billAmount.style.borderColor = '';
        tipPercentage.style.borderColor = '';
        submitButton.disabled = true;
        resetButton.style.display = 'block';
        resetButton.disabled = true;
        errorMsg.textContent = '';

    });

});


