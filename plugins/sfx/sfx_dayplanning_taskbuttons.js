setTimeout(() => {
    taskBtns();
}, 2500)

function taskBtns() {
    //target is first task on dayplanning
    const target = $("ul.extra-info-tab-buttons.nav.nav-flushed:first");
    
    //determine tasktype
    const tasktype = $(".dayplanning-project-name.pr-4 span:first").text().trim();
    console.log(tasktype);

    //add buttons based on tasktype
    if(tasktype === "TB Repair Integration") {
        target.append([
            addBtn("C@fe", "https://cafe.prd.apps.telenet.be/afe/be.telenet.afe.login.CAFELogin", "coffee"),
            addBtn("SalesForce", "https://telenet.my.salesforce.com/home/home.jsp?sdtd=1", "cloud")
        ]);
    } else if(tasktype === "Telenet") {
        target.append([
            addBtn("SPOT", "https://spot.prd.apps.telenet.be/care/customer/" + getKlantnummer(), "user-tag"),
            addBtn("Modem Test", "http://ants.inet.telenet.be/tools/modems/modemtest#modem=" + getKlantnummer(), "broadcast-tower")
        ]);
    }
}

function addBtn(name, url, icon) {
    const li = $(`<li></li>`);
    li.addClass="nav-item";
    li.role="presentation";
    
    const btn1 = $(`<button></button>`);
    btn1.attr({
        "type":"button", 
        "id":"extra-info-tabs-tab-5", 
        "role":"tab", 
        "data-rr-ui-event-key":"5", 
        "aria-controls":"extra-info-tabs-tabpane-5", 
        "aria-selected":"true"});
    btn1.addClass("nav-link active");

    const btn2 = $(`<button></button>`);
    btn2.addClass("btn extra-info-active-tab d-flex align-items-center");
    btn2.attr("id", "intervention-tab");
    btn2.css("transition", "transform 0.25s ease 0s");
    
    const span = $(`<span></span>`);
    span.addClass("mx-2");
    span.text(name);

    const i = $(`<i></i>`);
    i.addClass("fas fa-" + icon);
    i.css("color", "white");

    span.prepend(i);
    btn2.append(span);
    btn1.append(btn2);
    li.append(btn1);
    
    li.click(() => {
        window.open(url, "_blank");
    });

    return li;

}

function getKlantnummer() {
    return $(".dayplanning-project-name.pr-4 span:first").text().split("_")[1];
}