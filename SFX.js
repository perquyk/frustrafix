//Script with functions used inside task.
//check if page loaded is a opened taks. if so, execute, else do nothing
if(document.title === "WC: Perform"){
    //start with removing unneeded shells buttons and stuff, small loop in case of slower loading.
    for(let i = 0; i < 5; i++){
        setTimeout(() => {removeShells()},1500)
    }
    //edit existing buttons to make them take less space
    editStdButtons();
    //add Custom buttons to navbar top
    addCustomButtons();
}

    function removeShells(){
        const shAntsButton = document.getElementById("sh_btn_header_ants")
        const shSpotButton = document.getElementById("sh_btn_header_spot")
        let shWhiteDiv;
        if(shSpotButton){shWhiteDiv = shSpotButton.parentNode.previousSibling;}
        const shTimer = document.querySelectorAll("#timer");
        if (shWhiteDiv){
            shWhiteDiv.remove();
        }
        if (shAntsButton){
            shAntsButton.parentNode.remove()
        }
        if (shSpotButton){
            shSpotButton.parentNode.remove()}
        if(shTimer){
            shTimer.forEach((item) => {item.remove()})
        }
    }
    function editStdButtons() {
        const saveBtn = document.getElementById("save-in-between");
        const pmBtn = document.getElementById("go-to-probleemmelder");
        const impersonateBtn = document.getElementById("go-to-mijntelenet");
        saveBtn.innerHTML = "<i class='fa fa-save'/>";
        pmBtn.className = "btn btn-danger";
        pmBtn.textContent = "PM";
        impersonateBtn.textContent = "MyTLN";
        impersonateBtn.className = "btn btn-warning"
    }
    function addCustomButtons(){
        const antsURL = "http://ants.inet.telenet.be/tools/modems/modemtest#modem=";
        const spotURL = "https://spot.prd.apps.telenet.be/care/customer/";
        const nodeURL = "https://spot.prd.apps.telenet.be/care/network/";
        const streetURL = "http://ants.inet.telenet.be/tools/nodes/livenodeping#node-input=";
        //define injection target of buttons
        const injectTarget = document.querySelector(".nav.navbar-nav");

        //div for all customer buttons to live in, is flexbox
        const buttonDiv = document.createElement("div");
        buttonDiv.className = "navbarButtonDiv";

        //button group that uses customer number as a variable for functionality
        //div where all these will reside, is flexbox
        const customerButtonDiv = document.createElement("div");
        customerButtonDiv.className = "navbarButtonGroup";

        //div for node-related buttons
        const nodeButtonDiv = document.createElement("div");
        nodeButtonDiv.className = "navbarButtonGroup";

        //Customer number related buttons
        customerButtonDiv.appendChild(navbarPrimaryButton("customerNumber", "Customer: " + getCustomerNumber()));
        customerButtonDiv.appendChild(navBarSecondaryButton("modemtest", "Modem Test"));
        customerButtonDiv.appendChild(navBarSecondaryButton("spot-cust", "SPOT"));

        //node related buttons
        nodeButtonDiv.appendChild(navbarPrimaryButton("nodeBtn", "Check Node"));
        nodeButtonDiv.appendChild(navBarSecondaryButton("streetping", "Streetping"));
        nodeButtonDiv.appendChild(navBarSecondaryButton("spot-node", "Node Care"));
        //inject buttonGroups inside buttonDiv
        buttonDiv.appendChild(customerButtonDiv);
        buttonDiv.appendChild(nodeButtonDiv);

        //inject buttonDiv to navbar
        injectTarget.appendChild(buttonDiv);

        //add event listeners to all buttons via ID
        document.getElementById("customerNumber").addEventListener("click", copyCx);
        document.getElementById("modemtest").addEventListener("click", openAnts);
        document.getElementById("spot-cust").addEventListener("click", openSpot);
        document.getElementById("nodeBtn").addEventListener("click", copyNode);
        document.getElementById("streetping").addEventListener("click", openStreetping);
        document.getElementById("spot-node").addEventListener("click", openNodeCare);

        //event functions
        function copyCx(){
            navigator.clipboard.writeText(getCustomerNumber());
            return null
        }
        function openAnts(){
            window.open(antsURL + getCustomerNumber(), "_blank");
            return null
        }
        function openSpot(){
            window.open(spotURL + getCustomerNumber(), "_blank");
            return null
        }
        function copyNode(){
            if(getNode() === ""){
                document.getElementById("nodeBtn").textContent = "Node not found"
            } else {
                navigator.clipboard.writeText(getNode());
                document.getElementById("nodeBtn").textContent = getNode();
            }
            return null
        }
        function openStreetping(){
            window.open(streetURL + getNode(), "_blank");
            return null
        }
        function openNodeCare(){
            window.open(nodeURL + getNode(), "_blank");
            return null
        }

        //functions to get task info for buttons
        function getCustomerNumber(){
            const portlet = document.querySelector(".portlet-body.clearfix.cust-details-portlet-body");
            const portletRows = portlet.querySelectorAll("tr");
            return portletRows[0].querySelector("td").textContent.trim()
        }
        function getNode() {
            let node = document.querySelector("#node");
            if(node === null ) {
                return "";
            } else {
                return node.textContent;
            }

        }
        //functions for adding buttons in a standardized look
        function navbarPrimaryButton(btnName, label) {
            const buttonDiv = document.createElement("div");
            buttonDiv.style.float = "left";
            const btn = document.createElement("button");
            btn.id = btnName;
            buttonDiv.appendChild(btn);
            btn.type = "button";
            btn.className = "btn dark navbarButton";
            btn.textContent = label
            return buttonDiv;
        }
        function navBarSecondaryButton(btnName, label) {
        const buttonDiv = document.createElement("div");
        buttonDiv.style.float = "left";
        const btn = document.createElement("button");
        btn.id = btnName;
        buttonDiv.appendChild(btn);
        btn.type = "button";
        btn.className = "btn dark navbarButton secondary";
        btn.textContent = label
        return buttonDiv;
    }
}
