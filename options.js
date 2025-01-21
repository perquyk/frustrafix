document.addEventListener('DOMContentLoaded', () => {
    // Load stored settings
    chrome.storage.sync.get(['antscopy', 'favicon', 'feature2'], (data) => {
      if (chrome.runtime.lastError) {
        console.error("Error retrieving settings:", chrome.runtime.lastError);
      } else {
        console.log("Loaded settings:", data);  // Debugging line
        document.getElementById('antscopy').checked = data.antscopy || false;
        document.getElementById('favicon').checked = data.favicon || false;
        document.getElementById('feature2').checked = data.feature2 || false;
      }
    });
  
    // Save new settings when user clicks 'Save'
    document.getElementById('save').addEventListener('click', () => {
      const antscopy = document.getElementById('antscopy').checked;
      const favicon = document.getElementById('favicon').checked;
      const feature2 = document.getElementById('feature2').checked;
  
      chrome.storage.sync.set({ antscopy, favicon, feature2 }, () => {
        if (chrome.runtime.lastError) {
          console.error("Error saving settings:", chrome.runtime.lastError);
        } else {
          console.log("Settings saved:", { antscopy, favicon, feature2 });  // Debugging line

        }
      });
    });
  });
  