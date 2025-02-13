// this file is made for testing the product & Service closer buttons. It won't be added to production just yet.
const beta = true;

setTimeout(() => {
 const statusDropdown = document.querySelector('#new_product_status');
 const installedStatusOption = document.createElement('option');
 installedStatusOption.value = "installed";
 installedStatusOption.dataMoveReasonId = "5"
 installedStatusOption.dataWithRemark="false"
 installedStatusOption.dataRequireRemark="false"
 statusDropdown.appendChild(installedStatusOption)
},1000)

console.log("materialbtns.js loaded");

//select correct div for injection
const productServicesCloser = document.querySelector("#productCloserViewWrappers");
const portletBody = productServicesCloser.querySelector(".portlet-body");

console.log(portletBody);

const buttonDiv = document.createElement("div");
buttonDiv.className = "buttonDiv";

const betaDiv = document.createElement("div");
betaDiv.textContent = 'Buttons are in testing phase!!! Known issue: first item added doesn\'t have a status! add something, remove it and then you can add anything you like without issues. :)'

//modems
const modemDiv = document.createElement("div");
modemDiv.className = "buttonGroup"

const modemLegendDiv = document.createElement("div");
modemLegendDiv.className = "buttonGroupLegend"
modemLegendDiv.innerText = "Modems";

const modemButtonDiv = document.createElement("div");
modemButtonDiv.className = "buttonGroupButtons";

modemDiv.appendChild(modemLegendDiv)
modemDiv.appendChild(modemButtonDiv)

const buttonFast = document.createElement("button");
buttonFast.className = "btn btn-sm";
buttonFast.innerText = "MV2+";
buttonFast.type = "button";
buttonFast.id = "modemFast";


const buttonMerc = document.createElement("button");
buttonMerc.innerText = "MV1";
buttonMerc.className = "btn btn-sm";
buttonMerc.type = "button";
buttonMerc.id = "modemMerc";

const buttonMv2 = document.createElement("button");
buttonMv2.innerText = "MV2";
buttonMv2.className = "btn btn-sm";
buttonMv2.type = "button";
buttonMv2.id = "modemMv2";

const buttonMarakele = document.createElement("button");
buttonMarakele.className = "btn btn-sm";
buttonMarakele.innerText = "Marakele";
buttonMarakele.type = "button";
buttonMarakele.id = "modemMarakele";

modemButtonDiv.appendChild(buttonMarakele);
modemButtonDiv.appendChild(buttonFast);
modemButtonDiv.appendChild(buttonMv2);
modemButtonDiv.appendChild(buttonMerc);

//NIUs
const niuDiv = document.createElement("div");
niuDiv.className = "buttonGroup";

const niuLegendDiv = document.createElement("div");
niuLegendDiv.className = "buttonGroupLegend";
niuLegendDiv.innerText = "NIUs";


const niuButtonDiv = document.createElement("div");
niuButtonDiv.className = "buttonGroupButtons";

niuDiv.appendChild(niuLegendDiv);
niuDiv.appendChild(niuButtonDiv);

const mamp2cm85 = document.createElement("button");
mamp2cm85.className = "btn btn-sm"
mamp2cm85.innerText = "2CM 85MHz"
mamp2cm85.type = "button";
mamp2cm85.id = "2CM85";

const WO85 = document.createElement("button");
WO85.innerText = "WO 85MHz";
WO85.className = "btn btn-sm";
WO85.type = "button";
WO85.id = "WO85";

const cm4Mhz85 = document.createElement("button");
cm4Mhz85.innerText = "4CM 85MHz";
cm4Mhz85.className = "btn btn-sm";
cm4Mhz85.type = "button";
cm4Mhz85.id = "4CM85";

const cm4Mhz65 = document.createElement("button");
cm4Mhz65.className = "btn btn-sm";
cm4Mhz65.innerText = "4CM 65MHz";
cm4Mhz65.type = "button";
cm4Mhz65.id = "4CM65";

const micronode = document.createElement("button");
micronode.className = "btn btn-sm";
micronode.innerText = "Micronode";
micronode.type = "button";
micronode.id = "micronode";

const mamp1d85 = document.createElement("button");
mamp1d85.className = "btn btn-sm";
mamp1d85.innerText = "Mampaey 85MHz";
mamp1d85.type = "button";
mamp1d85.id = "mamp1cm85";

const teleste85 = document.createElement("button");
teleste85.className = "btn btn-sm";
teleste85.innerText = "Teleste 85MHz";
teleste85.type = "button";
teleste85.id = "teleste85";

chrome.storage.sync.get("businesstech", (data) => {
 if (data.businesstech) {
  niuButtonDiv.appendChild(mamp2cm85);
  niuButtonDiv.appendChild(WO85);
  niuButtonDiv.appendChild(micronode);
  niuButtonDiv.appendChild(cm4Mhz85);
  niuButtonDiv.appendChild(cm4Mhz65);
 } else {
  niuButtonDiv.appendChild(mamp1d85);
  niuButtonDiv.appendChild(teleste85);
  niuButtonDiv.appendChild(WO85);
  niuButtonDiv.appendChild(mamp2cm85);
  niuButtonDiv.appendChild(micronode);
 }
})

//STBs
const stbDiv = document.createElement("div");
stbDiv.className = "buttonGroup";

const stbLegendDiv = document.createElement("div");
stbLegendDiv.className = "buttonGroupLegend";

stbLegendDiv.innerText = "STBs";

const stbButtonDiv = document.createElement("div");
stbButtonDiv.className = "buttonGroupButtons";

stbDiv.appendChild(stbLegendDiv);
stbDiv.appendChild(stbButtonDiv);

const HDDB = document.createElement("button");
HDDB.className = "btn btn-sm";
HDDB.innerText = "HD Digibox";
HDDB.type = "button";
HDDB.id = "HDDB";

const HDDC = document.createElement("button");
HDDC.className = "btn btn-sm";
HDDC.innerText = "HD Digicorder";
HDDB.type = "button";
HDDC.id = "HDDC";

const EOSv2 = document.createElement("button");
EOSv2.className = "btn btn-sm";
EOSv2.innerText = "EOSv2 Kit";
EOSv2.type = "button";
EOSv2.id = "EOSv2";

const Apollo = document.createElement("button");
Apollo.className = "btn btn-sm";
Apollo.innerText = "Apollo Kit";
Apollo.type = "button";
Apollo.id = "Apollo";

stbButtonDiv.appendChild(Apollo);
stbButtonDiv.appendChild(EOSv2);
stbButtonDiv.appendChild(HDDC);
stbButtonDiv.appendChild(HDDB);

//extra's
const extraDiv = document.createElement("div");
extraDiv.className = "buttonGroup";

const extraLegendDiv = document.createElement("div");
extraLegendDiv.className = "buttonGroupLegend";
extraLegendDiv.innerText = "Extra's";


const extraButtonDiv = document.createElement("div");
extraButtonDiv.className = "buttonGroupButtons";

extraDiv.appendChild(extraLegendDiv)
extraDiv.appendChild(extraButtonDiv)

const zte = document.createElement("button");
zte.className = "btn btn-sm";
zte.innerText = "ZTE Modem";
zte.type = "button";
zte.id = "zte";

const pod = document.createElement("button");
pod.className = "btn btn-sm";
pod.innerText = "360 POD";
pod.type = "button";
pod.id = "pod";

extraButtonDiv.appendChild(pod);
extraButtonDiv.appendChild(zte);

//append all buttonDivs inside buttonDiv
buttonDiv.appendChild(modemDiv);
buttonDiv.appendChild(niuDiv);
buttonDiv.appendChild(stbDiv);
buttonDiv.appendChild(extraDiv);

//prepend all buttons
portletBody.prepend(buttonDiv);
if(beta){portletBody.prepend(betaDiv);}

//adding event listeners to all buttons
buttonFast.addEventListener("click", addItem, false);
buttonMerc.addEventListener("click", addItem, false);
buttonMv2.addEventListener("click", addItem, false);
buttonMarakele.addEventListener("click", addItem, false);

cm4Mhz65.addEventListener("click", addItem, false);
cm4Mhz85.addEventListener("click", addItem, false);
mamp2cm85.addEventListener("click", addItem, false);
WO85.addEventListener("click", addItem, false);
micronode.addEventListener("click", addItem, false);

HDDB.addEventListener("click", addItem, false);
HDDC.addEventListener("click", addItem, false);
EOSv2.addEventListener("click", addItem, false);
Apollo.addEventListener("click", addItem, false);

pod.addEventListener("click", addItem, false);
zte.addEventListener("click", addItem, false);

function addItem(e) {
 //form inputs on page
 const productSelect = document.querySelector("#new_product_type");
 const qtySelect = document.querySelector("#new_product_quantity");
 const statusSelect = document.querySelector("#new_product_status");
 const addButton = document.querySelector("#add_product_link");

 //input values
 let productInput = "";
 let quantity = "1";
 let status = "installed";
 let multiLine = false;

 switch (e.currentTarget.id) {
  case 'modemMarakele':
   productInput = "2075"
   break;
  case 'modemFast':
   productInput = "4418"
   break;
  case 'modemMv2':
   productInput = "2368"
   break;
  case 'modemMerc':
   productInput = "1596"
   break;
  case '2CM85':
   productInput = "6380"
   break;
  case 'WO85':
   productInput = "6147"
   break;
  case '4CM85':
   productInput = "6148"
   break;
  case '4CM65':
   productInput = "1764"
   break;
  case 'mamp1cm85':
   productInput = "0"
   break;
  case 'teleste85':
   productInput = "0"
   break;
  case 'micronode':
   productInput = "5049"
   break;
  case 'Apollo':
   multiLine = true;
   productInput = ["6381", "6382", "6383"]
   quantity = window.prompt("Please enter desired quantity: ", "1")
   break;
  case 'EOSv2':
   multiLine = true;
   productInput = ["3222", "3223", "1796"]
   quantity = window.prompt("Please enter desired quantity: ", "1")
   break;
  case 'HDDB':
   productInput = "2408"
   quantity = window.prompt("Please enter desired quantity: ", "1")
   break;
  case 'HDDC':
   productInput = "1607"
   quantity = window.prompt("Please enter desired quantity: ", "1")
   break;
  case 'pod':
   productInput = "5340"
   quantity = window.prompt("Please enter desired quantity: ", "1")
   break;
  case 'zte':
   productInput = "5181"
   break;
 }

 if (Array.isArray(productInput)) {
  productInput.forEach((item) => {
   productSelect.value = item;
   statusSelect.value = status;
   qtySelect.value = quantity;
   addButton.click();

   console.log("Chosen product: " + item);
   console.log("Chosen Qty: " + quantity);
   console.log("Chosen Status: " + status);

  })
 } else {
  addProduct(productInput, quantity, status);
 }

 function addProduct(productInput, quantity, status) {
  productSelect.value = productInput;
  qtySelect.value = quantity;
  statusSelect.value = status;
  addButton.dispatchEvent(new Event('click', {bubbles: true}));

  console.log("Chosen product: " + productInput);
  console.log("Chosen Qty: " + quantity);
  console.log("Chosen Status: " + status);
 }
}