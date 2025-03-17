
chrome.storage.sync.get(["autostartants", "antscheckbox"], (data) => {
  if (data.antscheckbox) {
    setTimeout(() => {
      checkboxes();
    }, 500);
  if (data.autostartants) {
    setTimeout(() => {
      modemtest();
    }, 1000);
  }
});

function checkboxes() {
  //check all checkboxes
  const checkboxes = document.querySelectorAll(
    '#options input[type="checkbox"]'
  );
  const checkboxlabels = document.querySelectorAll("#options label");
  //foreach to check all boxes and adjust labels for visual change
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked === false) {
      checkbox.checked = true;
    }
  });
  checkboxlabels.forEach((label) => {
    label.className =
      "toggle-button toggle-check ui-button ui-widget ui-state-default ui-button-text-only ui-state-active";
  });
}

function modemtest() {
  try {
    //check if hfc input is empty
    const input = document.querySelector("#modem").value.trim();
    //if empty, log error in console and return
    if (!input) {
      console.log("input empty, exiting");
      return;
    }
    //start button stuff
    const startBtn = document.querySelector("#start-test");
    if (startBtn) {
      const clickEvent = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
      });
      startBtn.dispatchEvent(clickEvent);
      console.log("Started test");
    } else {
      console.log("no start button found");
    }
  } catch (e) {
    console.log("Error in antscopy:", e);
    return;
  }
}
