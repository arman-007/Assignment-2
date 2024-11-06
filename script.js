// JavaScript to control the modal behavior

// Get the modal, open button, and close button
const modal = document.getElementById("regionModal");
const openModalBtn = document.querySelector(".nav a[href='#']"); // Assuming the nav link is used to open the modal
const closeModalBtn = document.querySelector(".close-btn");
const saveBtn = document.querySelector(".save-btn");
const regionSelect = document.getElementById("region");
const currencyInput = document.getElementById("currency");
const regionLink = document.getElementById("regionLink"); // Get the region link in the nav bar

// Load region from localStorage (if it exists)
document.addEventListener("DOMContentLoaded", () => {
  const savedRegion = localStorage.getItem("selectedRegion");
  if (savedRegion) {
    regionLink.innerHTML = `<i class="fa-solid fa-globe"></i> ${savedRegion}`;
    // Optionally, set the value in the dropdown to match the saved region
    regionSelect.value = getRegionCode(savedRegion);
    updateCurrencyField(regionSelect.value);
  }
});

// Open modal when "United States" link is clicked
openModalBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default action
  modal.style.display = "block";
});

// Close modal when close button is clicked
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when user clicks outside of the modal content
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// Update currency based on region selection
regionSelect.addEventListener("change", () => {
  const region = regionSelect.value;
  updateCurrencyField(region);
});

// Save button event listener to update the region link, localStorage, and close modal
saveBtn.addEventListener("click", () => {
  const selectedRegion = regionSelect.options[regionSelect.selectedIndex].text; // Get selected region name (e.g., 'Portugal')
  
  // Update the navigation link with the selected region
  regionLink.innerHTML = `<i class="fa-solid fa-globe"></i> ${selectedRegion}`;
  
  // Save the selected region to localStorage
  localStorage.setItem("selectedRegion", selectedRegion);

  // Close the modal
  modal.style.display = "none";

  // Optional: Alert the user (for debugging purposes)
  console.log("Region updated to:", selectedRegion);
});

// Function to update the currency field based on region selection
function updateCurrencyField(region) {
  let currency = "";

  switch (region) {
    case "US":
      currency = "USD";
      break;
    case "PT":
      currency = "EUR";
      break;
    case "UK":
      currency = "GBP";
      break;
    case "CA":
      currency = "CAD";
      break;
    default:
      currency = "";
  }

  currencyInput.value = currency; // Update the input field
}

// Helper function to get region code from region name
function getRegionCode(regionName) {
  switch (regionName) {
    case "United States":
      return "US";
    case "Portugal":
      return "PT";
    case "United Kingdom":
      return "UK";
    case "Canada":
      return "CA";
    default:
      return "US"; // Default to United States
  }
}
