document.getElementById("toggleDropdownAfrica").addEventListener("click", function() {
    var dropdown_africa = document.getElementById("dropdownContentAfrica");
    dropdown_africa.style.display = (dropdown_africa.style.display === "none" || dropdown_africa.style.display === "") ? "block" : "none";
});