chrome.runtime.onInstalled.addListener(() => {
  // Set default values if they don't already exist
  chrome.storage.sync.get(
    [
      "antscopy",
      "autostartants",
      "antsShortcut",
      "favicon",
      "businesstech",
      "navbuttons",
      "dayplanningbtns",
      "performNavBar",
      "matbtn",
      "todo",
    ],
    (data) => {
      console.log(data);
      //if undefined > set enabled
      console.log(data["antscopy"]);
      if (data.antscopy == undefined) {
        chrome.storage.sync.set({ antscopy: true });
      }
      if (data.autostartants == undefined) {
        chrome.storage.sync.set({ autostartants: true });
      }
      if (data.antsShortcut == undefined) {
        chrome.storage.sync.set({ antsShortcut: true });
      }
      if (data.favicon == undefined) {
        chrome.storage.sync.set({ favicon: true });
      }

      if (data.businesstech == undefined) {
        chrome.storage.sync.set({ businesstech: true });
      }
      if (data.navbuttons == undefined) {
        chrome.storage.sync.set({ navbuttons: true });
      }
      if (data.dayplanningbtns == undefined) {
        chrome.storage.sync.set({ dayplanningbtns: true });
      }
      if (data.performNavBar == undefined) {
        chrome.storage.sync.set({ performNavBar: true });
      }
      if (data.matbtn == undefined) {
        chrome.storage.sync.set({ matbtn: true });
      }
      if (data.todo == undefined) {
        chrome.storage.sync.set({ todo: true });
      }
      //set default disabled to disabled afterwards
      //  chrome.storage.sync.set({
      //set to true for default enable, set to false for default disable
      //antscopy: true,
      //businesstech: true,
      //favicon: true,
      //navbuttons: true,
      //dayplanningbtns: true,
      //performNavBar: true,
      //matbtn: true,
      //todo: true,
      //feature2: false  // Default to disabled
      //});
      //}
    }
  );
});
