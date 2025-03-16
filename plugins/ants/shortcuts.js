chrome.storage.sync.get("antsShortcut", (data) => {
  if (data.antsShortcut) {
    setTimeout(() => {
      addShortcuts();
    }, 250);
  }
});

function addShortcuts() {
  const buttons = [
    {
      name: "Modem Test",
      url: "http://ants.inet.telenet.be/tools/modems/modemtest",
    },
    {
      name: "Street Ping",
      url: "http://ants.inet.telenet.be/tools/nodes/livenodeping",
    },
    { name: "Adres", url: "http://ants.inet.telenet.be/docs/nodes/address" },
    {
      name: "ZTE/5G",
      url: "http://ants.inet.telenet.be/tools/modems/lte-test",
    },
    {
      name: "Node Rel",
      url: "http://ants.inet.telenet.be/docs/nodes/relation",
    },
  ];

  const target = document.querySelector(
    ".menu-level-0.menu-1x.ui-menu.ui-widget.ui-widget-content.ui-corner-all"
  );

  buttons.forEach((button) => {
    const shortcutli = document.createElement("li");
    const shortcuta = document.createElement("a");
    shortcuta.textContent = button.name;
    shortcuta.href = button.url;
    shortcuta.target = "_blank";
    shortcutli.appendChild(shortcuta);
    target.appendChild(shortcutli);
    shortcutli.classList.add("ui-menu-item");
  });
}
