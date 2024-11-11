chrome.runtime.onInstalled.addListener(() => {
    // Set default values if they don't already exist
    chrome.storage.sync.get(['antscopy', 'feature2'], (data) => {
      if (data.antscopy === undefined && data.feature2 === undefined) {
        chrome.storage.sync.set({
          antscopy: true,  // Default to enabled
          feature2: false  // Default to disabled
        });
      }
    });
  });
  