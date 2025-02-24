initMatBut();
// determine NIUs via chrome.storage

//product arrays
const modems = [
    {label: "Marakele", id: "2075", isKit: false, isMulti: false},
    {label: "F@st", id: "4418", isKit: false, isMulti: false},
    {label: "MV2", id: "2368", isKit: false, isMulti: false},
    {label: "MV1", id: "1596", isKit: false, isMulti: false},
]
const NIUs = [
    {label: "2CM 85MHz", id: "123", isKit: false, isMulti: false},
    {label: "WO 85MHz", id: "123", isKit: false, isMulti: false},
    {label: "4CM 85MHz", id: "123", isKit: false, isMulti: false},
    {label: "4CM 65MHz", id: "123", isKit: false, isMulti: false},
]
const STBs = [
    {label: "Apollo Kit", id: ["159", "1596", "123488"], isKit: true, isMulti: true},
    {label: "EOSv2 Kit", id: ["8522", "254645", "68451"], isKit: true, isMulti: true},
    {label: "HDDC", id: "123123", isKit: false, isMulti: true, inhome: true},
    {label: "HDDB", id: "321213", isKit: false, isMulti: true, inhome: true},
]
const extras = [
    {label: "360 POD", id: "5340", isKit: false, isMulti: true, inhome: true},
    {label: "ZTE Modem", id: "5181", isKit: false, isMulti: true, inhome: true},
]
//injection target
const productServicesCloser = document.querySelector('#productCloserViewWrappers');
const productServicesCloserPortletBody = productServicesCloser.querySelector(".portlet-body");

//div where all buttonGroups live, styled by class in frustrafix.css
const buttonDiv = document.createElement("div");
buttonDiv.className = "buttonDiv";

//append all groups to buttonDiv
buttonDiv.appendChild(makeGroup("Modems", modems));
buttonDiv.appendChild(makeGroup("NIUs", NIUs));
buttonDiv.appendChild(makeGroup("STBs", STBs));
buttonDiv.appendChild(makeGroup("extras", extras));

//append buttonDiv to injection target
productServicesCloserPortletBody.prepend(buttonDiv);

//function that runs when materialbuttons has loaded
function initMatBut() {
    //initialize installed to status to fix "first item" bug
    setTimeout(() => {
        const statusDropdown = document.querySelector('#new_product_status');
        const installedStatusOption = document.createElement('option');
        installedStatusOption.value = "installed";
        installedStatusOption.dataMoveReasonId = "5";
        installedStatusOption.dataWithRemark = "false";
        installedStatusOption.dataRequireRemark = "false";
        statusDropdown.appendChild(installedStatusOption);
    }, 1000);
}
//function to create button
function addButton(label, id, kit, multi){
    const button = document.createElement("button");
    button.className = "btn btn-sm"
    button.type = "button";
    button.id = id;
    button.innerText = label;
    button.setAttribute("kit", kit);
    button.setAttribute("multi", multi)
    button.addEventListener("click", chooseProduct)
    return button
}
//function that creates the button groups
function addGroup(label){
    const wrapper = document.createElement("div");
    wrapper.className = "buttonGroup"
    const legend = document.createElement("div");
    legend.className = "buttonGroupLegend"
    legend.innerText = label;
    const buttons = document.createElement("div");
    buttons.className = "buttonGroupButtons"
    wrapper.appendChild(legend);
    wrapper.appendChild(buttons);
    return wrapper;
}
//function that created the group and populates it
function makeGroup(label, array){
    const group = addGroup(label);
    array.forEach(item => {
        group.querySelector(".buttonGroupButtons").appendChild(addButton(item.label, item.id, item.isKit, item.isMulti));
    })
    return group;
}
//event handler to determine what needs to be filled in
function chooseProduct(event){
    const status = "installed"
    let qtyChosen;
    //checks if multi to determine qty, if not multi always 1!
    if(event.target.getAttribute("multi") === "true"){
        qtyChosen = parseInt(window.prompt("Please enter desired quantity:", 1));
    } else {
        qtyChosen = 1;
    }
    //checks if kit, if kit, loop the amount of id's, if not kit, don't loop
    if(event.target.getAttribute("kit") === "true"){
        const idArray = event.target.id.split(",");
        idArray.forEach(id => {
            addProduct(qtyChosen, status, id);
        })
    }else{
        addProduct(qtyChosen, status, event.target.id);
    }

//function that add the product when called on
function addProduct(qty, status, product){
    const productSelect = document.querySelector("#new_product_type");
    const qtySelect = document.querySelector("#new_product_quantity");
    const statusSelect = document.querySelector("#new_product_status");
    const addButton = document.querySelector("#add_product_link");
    productSelect.value = product;
    qtySelect.value = qty;
    statusSelect.value = status;
    addButton.dispatchEvent(new Event("click", {bubbles: true}));
    console.log("added: " + qty + "x - " + product + " - " + status);
}
}
