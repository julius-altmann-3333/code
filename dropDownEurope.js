document.getElementById("toggleDropdownEurope").addEventListener("click", function() {
    var dropdown_europe = document.getElementById("dropdownContentEurope");
    dropdown_europe.style.display = (dropdown_europe.style.display === "none" || dropdown_europe.style.display === "") ? "block" : "none";
});