// Function to save options to chrome.storage
function saveOptions() {
    var googleDocOption = document.getElementById('googleDocOption').checked;
    chrome.storage.sync.set({
     googleDocOption: googleDocOption
    }, function() {
     // Update status to let user know options were saved
     var status = document.getElementById('status');
     status.textContent = 'Options saved.';
     setTimeout(function() {
     status.textContent = '';
     }, 750);
    });
  }
  // Function to restore options from chrome.storage
  function restoreOptions() {
    // Use default value googleDocOption = true
    chrome.storage.sync.get({
     googleDocOption: true
    }, function(items) {
     document.getElementById('googleDocOption').checked = items.googleDocOption;
    });
  }
  document.addEventListener('DOMContentLoaded', restoreOptions);
  document.getElementById('save').addEventListener('click', saveOptions);