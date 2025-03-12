chrome.runtime.onInstalled.addListener(() => {
    // Set default values if they don't already exist
    chrome.storage.sync.get(['antscopy', 'favicon', 'businesstech', 'feature2'], (data) => {
      if (data.antscopy === undefined && data.feature2 === undefined) {
        chrome.storage.sync.set({
          antscopy: true,
          businesstech: true,
          favicon: true,
          navbuttons: true,
          dayplanningbtns: true,
          performNavBar: true,
          matbtn: true,
          todo: true,
          feature2: false  // Default to disabled
        });
      }
    });
  });
  