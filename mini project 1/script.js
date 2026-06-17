document.getElementById("tipForm").addEventListener("submit", function(event){

    event.preventDefault();

    let bill = parseFloat(document.getElementById("bill").value);
    let tip = parseFloat(document.getElementById("tip").value);
    let people = parseInt(document.getElementById("people").value);

    // Form Validation

    if(isNaN(bill) || bill <= 0){
        alert("Please enter a valid Bill Amount.");
        return;
    }

    if(isNaN(tip) || tip < 0){
        alert("Please enter a valid Tip Percentage.");
        return;
    }

    if(isNaN(people) || people <= 0){
        alert("Number of People must be greater than zero.");
        return;
    }

    // Mathematical Logic

    let tipAmount = (bill * tip) / 100;

    let totalBill = bill + tipAmount;

    let perPerson = totalBill / people;

    // Display Results

    document.getElementById("tipAmount").textContent = tipAmount.toFixed(2);

    document.getElementById("totalBill").textContent = totalBill.toFixed(2);

    document.getElementById("perPerson").textContent = perPerson.toFixed(2);

});