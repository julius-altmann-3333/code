// Country-City Mapping already imported from cityData.js

// Populate Country Dropdown
const countrySelect = document.getElementById("countrySelect");
const citySelect = document.getElementById("citySelect");

// Populate countries dynamically
Object.keys(cityData).forEach(country => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
});

// Populate Cities based on selected Country
countrySelect.addEventListener("change", () => {
    const country = countrySelect.value;
    citySelect.disabled = !country; // Disable citySelect if no country is selected

    if (country) {
        const cities = cityData[country] || [];
        citySelect.innerHTML = "<option value=''>Select City</option>";  // Reset city options
        cities.forEach(city => {
            const option = document.createElement("option");
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    } else {
        citySelect.innerHTML = "<option value=''>Select City</option>"; // Reset city options
        citySelect.disabled = true; // Disable city dropdown if no country selected
    }
});

// Function to handle the display of the filtered results
function displayFilteredResults(filteredData) {
    const resultContainer = document.getElementById("resultItems");
    resultContainer.innerHTML = ""; // Clear previous results

    if (filteredData.length === 0) {
        resultContainer.innerHTML = "<p>No properties match your selection.</p>";
    } else {
        filteredData.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');

            // Property Image
            const img = document.createElement('img');
            img.src = result.imgUrl;
            img.alt = result.title;

            // Text container
            const textContainer = document.createElement('div');

            // Title
            const title = document.createElement('strong');
            title.textContent = result.title;

            // Price
            const price = document.createElement('p');
            price.textContent = `Price: ${result.price}`;

            // Description
            const description = document.createElement('p');
            description.textContent = result.description;

            // Additional Details (Optional)
            const address = document.createElement('p');
            address.textContent = `Address: ${result.address}`;

            const bedroomDetails = document.createElement('p');
            bedroomDetails.textContent = `Bedrooms: ${result.bedrooms} | Bathrooms: ${result.bathrooms}`;

            const sizeDetails = document.createElement('p');
            sizeDetails.textContent = `Size: ${result.squareFeet} sq ft | Year Built: ${result.yearBuilt}`;

            // Display selected filters
            const filterContainer = document.createElement('div');
            filterContainer.classList.add('filter-container');
            
            const filterTags = [];

            // Display selected filters as tags
            if (selectedAttributes.propertyType) {
                const propertyTypeTag = document.createElement('button');
                propertyTypeTag.textContent = `Type: ${selectedAttributes.propertyType}`;
                filterTags.push(propertyTypeTag);
            }
            if (selectedAttributes.bedrooms) {
                const bedroomTag = document.createElement('button');
                bedroomTag.textContent = `Bedrooms: ${selectedAttributes.bedrooms}`;
                filterTags.push(bedroomTag);
            }
            if (selectedAttributes.bathrooms) {
                const bathroomTag = document.createElement('button');
                bathroomTag.textContent = `Bathrooms: ${selectedAttributes.bathrooms}`;
                filterTags.push(bathroomTag);
            }
            if (selectedAttributes.priceRange) {
                const priceTag = document.createElement('button');
                priceTag.textContent = `Price: ${selectedAttributes.priceRange}`;
                filterTags.push(priceTag);
            }
            if (selectedAttributes.squareFeetRange) {
                const sizeTag = document.createElement('button');
                sizeTag.textContent = `Size: ${selectedAttributes.squareFeetRange}`;
                filterTags.push(sizeTag);
            }
            if (selectedAttributes.yearBuilt) {
                const yearBuiltTag = document.createElement('button');
                yearBuiltTag.textContent = `Year Built: ${selectedAttributes.yearBuilt}`;
                filterTags.push(yearBuiltTag);
            }
            if (selectedAttributes.parking) {
                const parkingTag = document.createElement('button');
                parkingTag.textContent = `Parking: ${selectedAttributes.parking}`;
                filterTags.push(parkingTag);
            }
            if (selectedAttributes.garden) {
                const gardenTag = document.createElement('button');
                gardenTag.textContent = `Garden: ${selectedAttributes.garden}`;
                filterTags.push(gardenTag);
            }
            if (selectedAttributes.flooring) {
                const flooringTag = document.createElement('button');
                flooringTag.textContent = `Flooring: ${selectedAttributes.flooring}`;
                filterTags.push(flooringTag);
            }
            if (selectedAttributes.publicTransport) {
                const publicTransportTag = document.createElement('button');
                publicTransportTag.textContent = `Public Transport: ${selectedAttributes.publicTransport}`;
                filterTags.push(publicTransportTag);
            }
            if (selectedAttributes.elevator) {
                const elevatorTag = document.createElement('button');
                elevatorTag.textContent = `Elevator: ${selectedAttributes.elevator}`;
                filterTags.push(elevatorTag);
            }
            if (selectedAttributes.furnishing) {
                const furnishingTag = document.createElement('button');
                furnishingTag.textContent = `Furnishing: ${selectedAttributes.furnishing}`;
                filterTags.push(furnishingTag);
            }
            if (selectedAttributes.view) {
                const viewTag = document.createElement('button');
                viewTag.textContent = `View: ${selectedAttributes.view}`;
                filterTags.push(viewTag);
            }
            if (selectedAttributes.airConditioning) {
                const airConditioningTag = document.createElement('button');
                airConditioningTag.textContent = `Air Conditioning: ${selectedAttributes.airConditioning}`;
                filterTags.push(airConditioningTag);
            }
            if (selectedAttributes.heating) {
                const heatingTag = document.createElement('button');
                heatingTag.textContent = `Heating: ${selectedAttributes.heating}`;
                filterTags.push(heatingTag);
            }
            if (selectedAttributes.pool) {
                const poolTag = document.createElement('button');
                poolTag.textContent = `Pool: ${selectedAttributes.pool}`;
                filterTags.push(poolTag);
            }
            if (selectedAttributes.balcony) {
                const balconyTag = document.createElement('button');
                balconyTag.textContent = `Balcony: ${selectedAttributes.balcony}`;
                filterTags.push(balconyTag);
            }
            if (selectedAttributes.roof) {
                const roofTag = document.createElement('button');
                roofTag.textContent = `Roof: ${selectedAttributes.roof}`;
                filterTags.push(roofTag);
            }
            if (selectedAttributes.security) {
                const securityTag = document.createElement('button');
                securityTag.textContent = `Security: ${selectedAttributes.security}`;
                filterTags.push(securityTag);
            }
            if (selectedAttributes.schools) {
                const schoolsTag = document.createElement('button');
                schoolsTag.textContent = `Schools: ${selectedAttributes.schools}`;
                filterTags.push(schoolsTag);
            }
            if (selectedAttributes.internet) {
                const internetTag = document.createElement('button');
                internetTag.textContent = `Internet: ${selectedAttributes.internet}`;
                filterTags.push(internetTag);
            }
            if (selectedAttributes.gym) {
                const gymTag = document.createElement('button');
                gymTag.textContent = `Gym: ${selectedAttributes.gym}`;
                filterTags.push(gymTag);
            }
            if (selectedAttributes.storage) {
                const storageTag = document.createElement('button');
                storageTag.textContent = `Storage: ${selectedAttributes.storage}`;
                filterTags.push(storageTag);
            }
            if (selectedAttributes.shopping) {
                const shoppingTag = document.createElement('button');
                shoppingTag.textContent = `Shopping: ${selectedAttributes.shopping}`;
                filterTags.push(shoppingTag);
            }
            if (selectedAttributes.hospital) {
                const hospitalTag = document.createElement('button');
                hospitalTag.textContent = `Hospital: ${selectedAttributes.hospital}`;
                filterTags.push(hospitalTag);
            }
            if (selectedAttributes.park) {
                const parkTag = document.createElement('button');
                parkTag.textContent = `Park: ${selectedAttributes.park}`;
                filterTags.push(parkTag);
            }
            if (selectedAttributes.beach) {
                const beachTag = document.createElement('button');
                beachTag.textContent = `Beach: ${selectedAttributes.beach}`;
                filterTags.push(beachTag);
            }

            // Append filter tags to the filter container
            filterTags.forEach(tag => filterContainer.appendChild(tag));

            // Appending the text details, filter tags, and image to the result item
            resultItem.appendChild(img);
            resultItem.appendChild(textContainer);
            resultItem.appendChild(filterContainer);

            // Add result item to the container
            resultContainer.appendChild(resultItem);
        });
    }
}

// Handle Search Button Click
document.getElementById("searchBtn").addEventListener("click", () => {
    const selectedAttributes = {
        country: countrySelect.value,
        city: citySelect.value,
        propertyType: document.getElementById("propertyTypeSelect").value,
        bedrooms: document.getElementById("bedroomsSelect").value,
        bathrooms: document.getElementById("bathroomsSelect").value,
        priceRange: document.getElementById("priceRangeSelect").value,
        squareFeetRange: document.getElementById("squareFeetSelect").value,
        yearBuilt: document.getElementById("yearBuiltSelect").value,
        parking: document.getElementById("parkingSelect").value,
        garden: document.getElementById("gardenSelect").value,
        flooring: document.getElementById("flooringSelect").value,
        publicTransport: document.getElementById("publicTransportSelect").value,
        elevator: document.getElementById("elevatorSelect").value,
        furnishing: document.getElementById("furnishingSelect").value,
        view: document.getElementById("viewSelect").value,
        airConditioning: document.getElementById("airConditioningSelect").value,
        heating: document.getElementById("heatingSelect").value,
        pool: document.getElementById("poolSelect").value,
        balcony: document.getElementById("balconySelect").value,
        roof: document.getElementById("roofSelect").value,
        security: document.getElementById("securitySelect").value,
        schools: document.getElementById("schoolsSelect").value,
        internet: document.getElementById("internetSelect").value,
        gym: document.getElementById("gymSelect").value,
        storage: document.getElementById("storageSelect").value,
        shopping: document.getElementById("shoppingSelect").value,
        hospital: document.getElementById("hospitalSelect").value,
        park: document.getElementById("parkSelect").value,
        beach: document.getElementById("beachSelect").value,
    };

    // Filter real estate data based on all selected attributes
    const filteredResults = realEstateData.filter(result => {
        const countryMatch = !selectedAttributes.country || result.address.includes(selectedAttributes.country);
        const cityMatch = !selectedAttributes.city || result.address.includes(selectedAttributes.city);
        const propertyTypeMatch = !selectedAttributes.propertyType || result.propertyType === selectedAttributes.propertyType;
        const bedroomsMatch = !selectedAttributes.bedrooms || result.bedrooms == selectedAttributes.bedrooms;
        const bathroomsMatch = !selectedAttributes.bathrooms || result.bathrooms == selectedAttributes.bathrooms;
        const priceRangeMatch = !selectedAttributes.priceRange || result.price <= selectedAttributes.priceRange;
        const squareFeetRangeMatch = !selectedAttributes.squareFeetRange || result.squareFeet <= selectedAttributes.squareFeetRange;
        const yearBuiltMatch = !selectedAttributes.yearBuilt || result.yearBuilt == selectedAttributes.yearBuilt;
        const parkingMatch = !selectedAttributes.parking || result.parking === selectedAttributes.parking;
        const gardenMatch = !selectedAttributes.garden || result.garden === selectedAttributes.garden;
        const flooringMatch = !selectedAttributes.flooring || result.flooring === selectedAttributes.flooring;
        const publicTransportMatch = !selectedAttributes.publicTransport || result.publicTransport === selectedAttributes.publicTransport;
        const elevatorMatch = !selectedAttributes.elevator || result.elevator === selectedAttributes.elevator;
        const furnishingMatch = !selectedAttributes.furnishing || result.furnishing === selectedAttributes.furnishing;
        const viewMatch = !selectedAttributes.view || result.view === selectedAttributes.view;
        const airConditioningMatch = !selectedAttributes.airConditioning || result.airConditioning === selectedAttributes.airConditioning;
        const heatingMatch = !selectedAttributes.heating || result.heating === selectedAttributes.heating;
        const poolMatch = !selectedAttributes.pool || result.pool === selectedAttributes.pool;
        const balconyMatch = !selectedAttributes.balcony || result.balcony === selectedAttributes.balcony;
        const roofMatch = !selectedAttributes.roof || result.roof === selectedAttributes.roof;
        const securityMatch = !selectedAttributes.security || result.security === selectedAttributes.security;
        const schoolsMatch = !selectedAttributes.schools || result.schools === selectedAttributes.schools;
        const internetMatch = !selectedAttributes.internet || result.internet === selectedAttributes.internet;
        const gymMatch = !selectedAttributes.gym || result.gym === selectedAttributes.gym;
        const storageMatch = !selectedAttributes.storage || result.storage === selectedAttributes.storage;
        const shoppingMatch = !selectedAttributes.shopping || result.shopping === selectedAttributes.shopping;
        const hospitalMatch = !selectedAttributes.hospital || result.hospital === selectedAttributes.hospital;
        const parkMatch = !selectedAttributes.park || result.park === selectedAttributes.park;
        const beachMatch = !selectedAttributes.beach || result.beach === selectedAttributes.beach;

        // Combine all match conditions
        return countryMatch && cityMatch && propertyTypeMatch && bedroomsMatch && bathroomsMatch &&
            priceRangeMatch && squareFeetRangeMatch && yearBuiltMatch && parkingMatch && gardenMatch &&
            flooringMatch && publicTransportMatch && elevatorMatch && furnishingMatch && viewMatch &&
            airConditioningMatch && heatingMatch && poolMatch && balconyMatch && roofMatch && securityMatch &&
            schoolsMatch && internetMatch && gymMatch && storageMatch && shoppingMatch && hospitalMatch &&
            parkMatch && beachMatch;
    });

    // Display the filtered results
    displayFilteredResults(filteredResults);
});

// Helper function to check if the price is within the selected range
function isPriceInRange(price, range) {
    const [minPrice, maxPrice] = range.split('-').map(Number);
    return price >= minPrice && price <= maxPrice;
}

// Helper function to check if the square feet is within the selected range
function isSquareFeetInRange(squareFeet, range) {
    if (range === '5000+') return squareFeet > 5000;
    const [minSqFt, maxSqFt] = range.split('-').map(Number);
    return squareFeet >= minSqFt && squareFeet <= maxSqFt;
}

// Reset Button Event
document.getElementById("reset").addEventListener("click", () => {
    const selects = document.querySelectorAll('select');
    selects.forEach(select => select.selectedIndex = 0);  // Reset the dropdowns

    citySelect.innerHTML = "<option value=''>Select City</option>"; // Reset city dropdown
    citySelect.disabled = true; // Disable city dropdown

    // Clear the displayed results
    const resultContainer = document.getElementById("resultItems");
    resultContainer.innerHTML = "";
});