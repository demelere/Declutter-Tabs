// Function to extract semantic content from the current tab
function extractSemanticContent() {
    // Code to extract semantic content from the current tab
  }
  // Function to categorize the links by similar theme/topic or subtopics
  function categorizeLinksByTheme(links) {
    // Code to categorize the links by similar theme/topic or subtopics
  }
  // Function to generate a short description for each link
  function generateShortDescription(link) {
    // Code to generate a short description for each link
  }
  // Function to send the categorized links to the background script
  function sendCategorizedLinksToBackground(categorizedLinks) {
    // Code to send the categorized links to the background script
  }
  // Event listener to trigger the content extraction and categorization when the extension icon is clicked
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === "iconClicked") {
     extractSemanticContent();
    }
  });
  // Event listener to receive the extracted semantic content from the current tab
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === "semanticContentExtracted") {
     const categorizedLinks = categorizeLinksByTheme(request.semanticContent);
     sendCategorizedLinksToBackground(categorizedLinks);
    }
  });