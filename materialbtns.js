// this file is made for testing the product & Service closer buttons. It won't be added to production just yet.
const beta = true;

console.log("materialbtns.js loaded");

//select correct div for injection
const productServicesCloser = document.querySelector("#productCloserViewWrappers");
const portletBody = productServicesCloser.querySelector(".portlet-body");

console.log(portletBody);

const buttonDiv = document.createElement("div");
buttonDiv.className = "buttonDiv";

const betaDiv = document.createElement("div");
betaDiv.textContent = "These buttons are still in testing phase and are not guaranteed to work! for more info why they are showing up: contact Kenny :)"

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
buttonFast.id = "modemFast";


const buttonMerc = document.createElement("button");
buttonMerc.innerText = "MV1";
buttonMerc.className = "btn btn-sm";
buttonMerc.id = "modemMerc";

const buttonMv2 = document.createElement("button");
buttonMv2.innerText = "MV2";
buttonMv2.className = "btn btn-sm";
buttonMv2.id = "modemMv2";

const buttonMarakele = document.createElement("button");
buttonMarakele.className = "btn btn-sm";
buttonMarakele.innerText = "Marakele";
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
mamp2cm85.id = "2CM85";

const WO85 = document.createElement("button");
WO85.innerText = "WO 85MHz";
WO85.className = "btn btn-sm";
WO85.id = "WO85";

const cm4Mhz85 = document.createElement("button");
cm4Mhz85.innerText = "4CM 85MHz";
cm4Mhz85.className = "btn btn-sm";
cm4Mhz85.id = "4CM85";

const cm4Mhz65 = document.createElement("button");
cm4Mhz65.className = "btn btn-sm";
cm4Mhz65.innerText = "4CM 65MHz";
cm4Mhz65.id = "4CM65";

const micronode = document.createElement("button");
micronode.className = "btn btn-sm";
micronode.innerText = "Micronode";
micronode.id = "micronode";

niuButtonDiv.appendChild(mamp2cm85);
niuButtonDiv.appendChild(WO85);
niuButtonDiv.appendChild(micronode);
niuButtonDiv.appendChild(cm4Mhz85);
niuButtonDiv.appendChild(cm4Mhz65);


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
HDDB.innerText = "HDDB";
HDDB.id = "HDDB";

const HDDC = document.createElement("button");
HDDC.className = "btn btn-sm";
HDDC.innerText = "HDDC";
HDDC.id = "HDDC";

const EOSv2 = document.createElement("button");
EOSv2.className = "btn btn-sm";
EOSv2.innerText = "EOSv2 Kit";
EOSv2.id = "EOSv2";

const Apollo = document.createElement("button");
Apollo.className = "btn btn-sm";
Apollo.innerText = "Apollo Kit";
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
zte.id = "zte";

const pod = document.createElement("button");
pod.className = "btn btn-sm";
pod.innerText = "360 POD";
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

function addItem(e){
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

 switch(e.currentTarget.id){
  case 'modemMarakele':
   productInput = "Compal Marakele CV8560E - 2063183"
   break;
  case 'modemFast':
   productInput = "MODEM - D3.1 MV2+ - FAST3896 LG TN - 2108285"
   break;
  case 'modemMv2':
   productInput = "MODEM - D3.1 HGW - CBN CH8568LG - 2063101"
   break;
  case 'modemMerc':
   productInput = "CBN 24 * 8 DOC 3 Wireless - 2037950"
   break;
  case '2CM85':
   productInput = "Mampaey-NIU-85/105-Versterker Garage 85MHz-2CM+lifeline-3300418"
   break;
  case 'WO85':
   productInput = "VERSTERKER -Teleste - NIU-85/105 Wall Outlet - 3300419"
   break;
  case '4CM85':
   productInput = "Teleste-NIU-85/105-Versterker-4CM-85MHz-3300420"
   break;
  case '4CM65':
   productInput = "VERSTERKER - 4 Datapoort NIU 2038506"
   break;
  case 'micronode':
   productInput = "Micronode - 2040397"
   break;
  case 'Apollo':
   multiLine = true;
   productInput = ["Apollo V1+ - Telenet TV Box - 2126879", "Apollo V1+ Cable Kit - 3300323", "Apollo V1 + - REMOTE - 3300198"]
   quantity = window.prompt("Please enter desired qty: ", "1")
   break;
  case 'EOSv2':
   multiLine = true;
   productInput = ["EOS Cablekit - 2038357", "Remote Telenet TV Box V2 - 2089380", "Telenet TV Box V2 - 2089381"]
   quantity = window.prompt("Please enter desired qty: ", "1")
   break;
  case 'HDDB':
   productInput = "B-Kit HD Digibox 1750 - AD220 - 2041233"
   quantity = window.prompt("Please enter desired qty: ", "1")
   break;
  case 'HDDC':
   productInput = "B-KIT HD Digicorder 5744 - AD2200 - 2041321"
   quantity = window.prompt("Please enter desired qty: ", "1")
   break;
  case 'pod':
   productInput = "SuperPod Wifi 6 - 2109180"
   quantity = window.prompt("Please enter desired qty: ", "1")
   break;
  case 'zte':
   productInput = "LTE Modem MF281-White - 2110080"
   break;
 }

 if(Array.isArray(productInput)){
  productInput.forEach((item) => {
   productSelect.value = item;
   statusSelect.value = item;
   qtySelect.value = item;
   addButton.click();

   console.log("Chosen product: " + item);
   console.log("Chosen Qty: " + quantity);
   console.log("Chosen Status: " + status);

  })
 }
 else{
  addProduct(productInput, quantity, status);
 }

 function addProduct(productInput, quantity, status){
  productSelect.value = productInput;
  qtySelect.value = quantity;
  statusSelect.value = status;
  addButton.click()

  console.log("Chosen product: " + productInput);
  console.log("Chosen Qty: " + quantity);
  console.log("Chosen Status: " + status);
 }


}

