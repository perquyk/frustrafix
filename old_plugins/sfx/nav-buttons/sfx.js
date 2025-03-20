chrome.storage.sync.get("navbuttons", (data) => {
  if (data.navbuttons) {
    navbuttons();
  }
});

function navbuttons() {
  const dagplanningUrl = "https://smartfix.unit-t.eu/interventions?";
  const entityViewerUrl = "https://smartfix.unit-t.eu/tasks";
  const stockUrl = "https://webclient.unit-t.eu/warehouses/overview";
  setTimeout(() => {
    //select target and remove unneeded elements.
    if (
      window.location.href.substring(
        0,
        "https://webclient.unit-t.eu/service".length
      ) !== "https://webclient.unit-t.eu/service"
    ) {
      const target = document.querySelector(
        "div.jumbotron.jumbotron-fluid.bg-info.text-white"
      );
      target.classList.add("bg-light");
      const containerDiv = target.querySelector("div.container");
      containerDiv.remove();

      const buttonFlex = document.createElement("div");
      buttonFlex.style.display = "flex";
      buttonFlex.style.gap = "8px";
      buttonFlex.style.marginTop = "8px";
      buttonFlex.style.martinBottom = "8px";

      const dagplanning = document.createElement("button");
      const dagplanningIcon = document.createElement("i");
      dagplanning.appendChild(dagplanningIcon);
      dagplanning.textContent = " Dayplanning";
      dagplanning.classList.add("btn");
      dagplanning.classList.add("btn-primary");
      dagplanning.classList.add("btn-lg");
      dagplanning.style.flexGrow = "1";
      dagplanning.id = "dagplanningBtn";
      dagplanning.prepend(dagplanningIcon);

      //dagplanning icon
      dagplanningIcon.classList.add("fa");
      dagplanningIcon.classList.add("fa-calendar");

      chrome.storage.sync.get("businesstech", (data) => {
        if (data.businesstech) {
          entviewerOne();
        }
      });
      function entviewerOne() {
        const entviewer = document.createElement("button");
        const entviewerIcon = document.createElement("i");
        entviewer.classList.add("btn-primary");
        entviewer.classList.add("btn-lg");
        entviewer.classList.add("btn");
        entviewer.innerText = " Entity Viewer";
        entviewer.style.flexGrow = "1";
        entviewer.id = "entityViewerBtn";
        entviewer.prepend(entviewerIcon);
        buttonFlex.appendChild(entviewer);
        //entity viewer icon
        entviewerIcon.classList.add("fa");
        entviewerIcon.classList.add("fa-list-ul");
        document
          .getElementById("entityViewerBtn")
          .addEventListener("click", entityViewerBtn);

        function entityViewerBtn() {
          window.open(entityViewerUrl, "_self");
        }
      }

      //stock button
      const stock = document.createElement("button");
      const stockIcon = document.createElement("i");
      stock.appendChild(stockIcon);
      stock.textContent = " Stock";
      stock.classList.add("btn-primary");
      stock.classList.add("btn-lg");
      stock.classList.add("btn");
      stock.style.flexGrow = "1";
      stock.id = "stockBtn";
      stock.prepend(stockIcon);

      //stock icon
      stockIcon.classList.add("fa");
      stockIcon.classList.add("fa-truck");

      buttonFlex.appendChild(dagplanning);

      buttonFlex.appendChild(stock);
      target.prepend(buttonFlex);

      //add eventListeners
      document
        .getElementById("dagplanningBtn")
        .addEventListener("click", dagplanningBtn);

      document.getElementById("stockBtn").addEventListener("click", stockBtn);

      //button functions
      function dagplanningBtn() {
        window.open(dagplanningUrl, "_self");
      }

      function stockBtn() {
        window.open(stockUrl, "_self");
      }
    }
  }, 1000);
}
