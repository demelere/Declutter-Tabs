// Function to fetch the categorized links and descriptions
function fetchCategorizedLinks() {
    // Code to fetch categorized links and descriptions from the background.js or content.js
    // ...
  }
  // Function to display the categorized links and descriptions in the popup
  function displayCategorizedLinks(categorizedLinks) {
    // Code to display the categorized links and descriptions in the popup.html
    // ...
  }
  // Event listener for when the popup is opened
  document.addEventListener('DOMContentLoaded', function() {
    // Fetch categorized links and descriptions
    const categorizedLinks = fetchCategorizedLinks();
    // Display the categorized links and descriptions in the popup
    displayCategorizedLinks(categorizedLinks);
  });