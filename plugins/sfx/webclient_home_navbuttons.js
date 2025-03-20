navbuttons();

function navbuttons() {
  setTimeout(() => {
    removeShells();
    addNavButtons();
  }, 500);
}

function removeShells() {
  if ($("h1")) {
    $("h1").remove();
  }
  if ($("h2")) {
    $("h2").remove();
  }
  if ($("div.note.note-success")) {
    $("div.note.note-success h4").remove();
    $("div.note.note-success").css(
      { "textAlign": "right",
        "margin":"0",
      }
    );
    $("div.note.note-success").removeClass();
  }
}

function addNavButtons() {
  const target = $("div.page-content.page-inner-wrapper>div");

  const buttonGroup = $("<div></div>");
  buttonGroup.attr("id", "ffx-buttonGroup");
  buttonGroup.css(
    { "display": "flex",
      "gap": "5px",
      "marginTop": "8px",
      "marginBottom": "8px",
    }
  );

  buttonGroup.append(
    [
      addButton(
        "Dayplanning",
        "https://smartfix.unit-t.eu/interventions?",
        "calendar"
      )
    ],
    [
      addButton(
        "Entity Viewer",
        "https://smartfix.unit-t.eu/tasks?",
        "list"
      )
    ],
    [ 
      addButton(
        "Stock Overview",
        "https://webclient.unit-t.eu/warehouses/overview",
        "warehouse"
      )
    ]
  );


  target.append(buttonGroup);
}

function addButton(name, url, icon) {
  const btn = $(`<button></button>`);
  btn.addClass("btn btn-primary btn-lg");
  btn.css(
    { 
      "flex-grow": "1",
      "cursor": "pointer",
      "display": "flex",
      "align-items": "center", 
      "justify-content": "center", 
      "gap": "7px"
    },
  );
  btn.attr("id", name);

  const span = $(`<span></span>`);
  span.text(name);

  btn.append(span);

  const i = $(`<i></i>`);
  i.addClass(`fa fa-${icon}`);

  btn.prepend(i);

  btn.click(() => {
    window.open(url, "_blank");
  });
  return btn;
}
