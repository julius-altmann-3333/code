// Add event listeners
document.querySelectorAll('#acquisitionCost input').forEach(input => {
    input.addEventListener('input', calculateSection1);
});
document.querySelectorAll('#renovationMain input').forEach(input => {
    input.addEventListener('input', calculateSection2);
});
document.querySelectorAll('#renovationInterior input').forEach(input => {
    input.addEventListener('input', calculateSection3);
});
document.getElementById('materialSelect').addEventListener('change', calculateMaterialPrice);
document.getElementById('materialMultiplier').addEventListener('input', calculateMaterialPrice);
document.querySelectorAll('.input-group input').forEach(input => {
    input.addEventListener('input', calculateValueCalculator);
});
