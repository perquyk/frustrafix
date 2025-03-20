setTimeout(() => {
  stockbtn();
  enititybtn();

  function stockbtn() {
    const target = $("#kt_header_menu .menu-nav");
    const stockBtn = $(
      '<li class="menu-item"><btn class="btn-primary btn">Warehouse Overview</btn></li>'
    );
    stockBtn.click(() => {
      window.open(
        "https://webclient.unit-t.eu/warehouses/overview/?sopReferrer=interventions&sopLang=en_US",
        "_blank"
      );
    });
    target.append(stockBtn);
  }
  function enititybtn() {
    const target = $("#kt_header_menu .menu-nav");
    const entityBtn = $(
      '<li class="menu-item"><btn class="btn-primary btn">Entity Viewer</btn></li>'
    );
    entityBtn.click(() => {
      window.open("https://smartfix.unit-t.eu/tasks?", "_blank");
    });
    target.append(entityBtn);
  }
}, 750);
