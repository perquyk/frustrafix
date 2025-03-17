document.addEventListener("DOMContentLoaded", () => {
  // Load stored settings
  chrome.storage.sync.get(
    [
      "antscopy",
      "autostartants",
      "antsShortcut",
      "antscheckbox",
      "favicon",
      "businesstech",
      "navbuttons",
      "dayplanningbtns",
      "performNavBar",
      "matbtn",
      "todo",
    ],
    (data) => {
      if (chrome.runtime.lastError) {
        console.error("Error retrieving settings:", chrome.runtime.lastError);
      } else {
        console.log("Loaded settings:", data); // Debugging line
        document.getElementById("antscopy").checked = data.antscopy;
        document.getElementById("autostartants").checked = data.autostartants;
        document.getElementById("antsShortcut").checked = data.antsShortcut;
        document.getElementById("antscheckbox").checked = data.antscheckbox;
        document.getElementById("favicon").checked = data.favicon;
        document.getElementById("businesstech").checked = data.businesstech;
        document.getElementById("navbuttons").checked = data.navbuttons;
        document.getElementById("dayplanningbtns").checked =
          data.dayplanningbtns;
        document.getElementById("performNavBar").checked = data.performNavBar;
        document.getElementById("matbtn").checked = data.matbtn;
        document.getElementById("todo").checked = data.todo;
      }
    }
  );

  // Save new settings when user clicks 'Save'
  document.getElementById("save").addEventListener("click", () => {
    const antscopy = document.getElementById("antscopy").checked;
    const autostartants = document.getElementById("autostartants").checked;
    const antsShortcut = document.getElementById("antsShortcut").checked;
    const antscheckbox = document.getElementById("antscheckbox").checked;
    const favicon = document.getElementById("favicon").checked;
    const businesstech = document.getElementById("businesstech").checked;
    const navbuttons = document.getElementById("navbuttons").checked;
    const dayplanningbtns = document.getElementById("dayplanningbtns").checked;
    const performNavBar = document.getElementById("performNavBar").checked;
    const matbtn = document.getElementById("matbtn").checked;
    const todo = document.getElementById("todo").checked;

    chrome.storage.sync.set(
      {
        antscopy,
        autostartants,
        antsShortcut,
        antscheckbox,
        favicon,
        businesstech,
        navbuttons,
        dayplanningbtns,
        performNavBar,
        matbtn,
        todo,
      },
      () => {
        if (chrome.runtime.lastError) {
          console.error("Error saving settings:", chrome.runtime.lastError);
        } else {
          console.log("Settings saved:", {
            antscopy,
            autostartants,
            antsShortcut,
            antscheckbox,
            favicon,
            businesstech,
            navbuttons,
            dayplanningbtns,
            performNavBar,
            matbtn,
          }); // Debugging line
        }
      }
    );
    window.alert("Settings Saved!");
  });
});
