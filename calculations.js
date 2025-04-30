// Section 1 Calculation (Acquisition Cost)
function calculateSection1() {
    const inputs1 = document.querySelectorAll('#acquisitionCost input');
    let sum1 = 0;
    let product1 = 1;
    let validInputs1 = false;

    inputs1.forEach(input => {
        const value = parseFloat(input.value);
        if (!isNaN(value)) {
            sum1 += value;
            product1 *= value;
            validInputs1 = true;
        }
    });

    document.getElementById('sumResult1').textContent = validInputs1 ? sum1 : 0;
    document.getElementById('productResult1').textContent = validInputs1 ? product1 : 1;
}

// Section 2 Calculation (Renovation/Adjustments for Main Structure)
function calculateSection2() {
    const inputs2 = document.querySelectorAll('#renovationMain input');
    let sum2 = 0;
    let product2 = 1;
    let validInputs2 = false;

    inputs2.forEach(input => {
        const value = parseFloat(input.value);
        if (!isNaN(value)) {
            sum2 += value;
            product2 *= value;
            validInputs2 = true;
        }
    });

    document.getElementById('sumResult2').textContent = validInputs2 ? sum2 : 0;
    document.getElementById('productResult2').textContent = validInputs2 ? product2 : 1;
}

// Section 3 Calculation (Renovation/Adjustments for Interior)
function calculateSection3() {
    const inputs3 = document.querySelectorAll('#renovationInterior input');
    let sum3 = 0;
    let product3 = 1;
    let validInputs3 = false;

    inputs3.forEach(input => {
        const value = parseFloat(input.value);
        if (!isNaN(value)) {
            sum3 += value;
            product3 *= value;
            validInputs3 = true;
        }
    });

    document.getElementById('sumResult3').textContent = validInputs3 ? sum3 : 0;
    document.getElementById('productResult3').textContent = validInputs3 ? product3 : 1;
}

// Material Price Calculation (Multiplier and Material Prices)
function calculateMaterialPrice() {
    const materialPrices = {
        material1: 10,
        material2: 20,
        material3: 30
    };
    const selectedMaterial = document.getElementById('materialSelect').value;
    const multiplier = parseFloat(document.getElementById('materialMultiplier').value);
    const materialPrice = materialPrices[selectedMaterial] * (isNaN(multiplier) ? 1 : multiplier);

    document.getElementById('materialPriceOutput').textContent = materialPrice.toFixed(2);
}

// Value Calculator Calculation
function calculateValueCalculator() {
    const numApartments = parseFloat(document.getElementById('numApartments').value);
    const rentPerApartment = parseFloat(document.getElementById('rentPerApartment').value);
    const multiplier = parseFloat(document.getElementById('multiplier').value);
    const acquisitionPrice = parseFloat(document.getElementById('acquisitionPrice').value);
    const loanPayment = parseFloat(document.getElementById('loanPayment').value);

    const totalYearlyRent = (numApartments * rentPerApartment * 12 * multiplier).toFixed(2);
    const totalAcquisitionPrice = acquisitionPrice.toFixed(2);
    const totalLoanPayment = loanPayment.toFixed(2);

    document.getElementById('totalYearlyRent').textContent = totalYearlyRent;
    document.getElementById('totalAcquisitionPrice').textContent = totalAcquisitionPrice;
    document.getElementById('totalLoanPayment').textContent = totalLoanPayment;
}
