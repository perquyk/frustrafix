var sfx = "webclient.unit-t.eu";
const dev = true;
if(document.location.host == sfx || dev === true){
    //wait N sec, and remove shells buttons from top navbar
    for(let i = 0; i < 5; i++){
        setTimeout(() => {removeShells()},1500)
    }
    function removeShells(){
        const shAntsButton = document.getElementById("sh_btn_header_ants")
        const shSpotButton = document.getElementById("sh_btn_header_spot")
        let shWhiteDiv;
        if(shSpotButton){shWhiteDiv = shSpotButton.parentNode.previousSibling;}
        const shTimer = document.querySelectorAll("#timer");
        console.log(shWhiteDiv)
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

    //vars on load
    let page = document.title;
    let tech = document.querySelector(".username").textContent.trim();
    //Used images
    let antsLogo = "https://png.pngtree.com/png-vector/20220517/ourmid/pngtree-cute-little-red-ant-cartoon-png-image_4663553.png";
    let spotLogo = "https://upload.wikimedia.org/wikipedia/commons/b/b9/Telenet-wiki-transparent.png";
    
    //used URLs
    let antsURL = "http://ants.inet.telenet.be/tools/modems/modemtest#modem=";
    let spotURL = "https://spot.prd.apps.telenet.be/care/customer/";
    let nodeURL = "https://spot.prd.apps.telenet.be/care/network/";
    let streetURL = "http://ants.inet.telenet.be/tools/nodes/livenodeping#node-input=";
    let SalesforceURL = "https://telenet.lightning.force.com/lightning/o/TB_WO_WorkOrderLineItem__c/list?filterName=00B2p000009tCxPEAU";
    let gmapsURL = "https://www.google.com/maps/place/";

    //Specific vars
    //let node = getNode();
    let klantnr = getKlantnr();
    let address = getAddress();
    
    //pageswitcherma b
    pageswitcher();

    //functions
    function selectSFURL(){
        switch(tech){
            case "Kenny Perquy (RO)":
                return("https://telenet.lightning.force.com/lightning/o/TB_WO_WorkOrderLineItem__c/list?filterName=00B2p00000BTGUsEAP");
            case "Jurriaan Talens (RO)":
                return("https://telenet.lightning.force.com/lightning/o/TB_WO_WorkOrderLineItem__c/list?filterName=00B2p00000BBRsnEAH");
            }
            //console(tech + " Salesforce URL");
    }
    function selStockURL(){
        var stockURL;
        switch(tech){
            case "Kenny Perquy (RO)":
            var stockURL = "https://docs.google.com/spreadsheets/d/1ZOF3STwtwXJWuuK5sCFGz0xW7SPVs3249SAtr-YWAsA/edit#gid=0";
            break;
            case "Jurriaan Talens (RO)":
            var stockURL = "https://docs.google.com/spreadsheets/d/1ye6sewTIikfMR_e6nOqcw9m9gZJwfLMn9o0TxffSM2E/edit#gid=0";
            break;
        }
        return stockURL
    }
    function getNode(){
        var node;
        var nodeSelect;
        var testmode = true;
        switch(page){
            case "WC: Index":
                var node = "";
                break;
            case "WC: Perform":
                //while(node == null){
                var nodeSelect;
                if(testmode){
                    while(nodeSelect == null){
                        var nodeSelect = document.querySelector("#node");
                    }    
                    if(nodeSelect !== null){
                    var node = document.querySelector("#node").textContent;  
                    }
                    console.log("waiting for node");
                    } else if (testmode == false){
                        node = "";
                    }
                break;
        }
        //console.log("node: " + node);
        return(node);
    }
    function getKlantnr(){
        var klantnr;
        switch(page){
            case "WC: Index":
                var ticketname = document.querySelector(".ticket-name-data").querySelector("span").innerHTML;
                var klantnr = ticketname.substring(0, ticketname.indexOf(' '));
                break;
            case "WC: Perform":
                var klantnr = document.getElementById("telenet-cust-details-cont").querySelector(".cust-details-portlet-body").querySelector(".row").querySelector(".col-sm-12").querySelector("div").querySelector(".table.table-striped").querySelector("tbody").querySelector("tr").querySelector("td").innerText;
                break;
        }
        //console.log("klantnr: " + klantnr);
        return(klantnr);
    }
    function getHFC(){
        var HFC = document.querySelector(".sh_prov_data").querySelector("tr").querySelectorAll("td")[1];
        if(HFC !== null){
            if(HFC.innerText.length == 17){
                console.log(HFC.innerText);
                return(HFC.innerText);
            }else{
                console.log("HFC NOT FOUND");
                return(null);
            }
        }else{return(null)}

        
    }
    function getAddress(){
        var address;
        switch(page){
            case "WC: Index":
            var address =  document.querySelector(".task_address").textContent + ", " + document.querySelector(".task_town").textContent;
            case "WC: Perform":
            var address = "";
            break;
        }
        return(address);
    }
    function pageswitcher(){
        switch (page) {
            case "WC: Index":
                navbarButtonsL();
                taskbuttons();
                navMaps();
                //removestuff();
                captionReplace();
                break;
            case "WC: Perform":
                navbarPerform();

                break;
            default:
                break;
        }
    }
    function navbarButtonsL(){
        let navbar = document.querySelector(".nav.navbar-nav");
        
        //spot
        let spotnav = document.createElement("li");
        spotnav.innerHTML = "<a href='#' id='spotnav'><i class='fas fa-band-aid' style='color: #ffc800;'></i> <strong> SPOT </strong> </a>"
        
        //modemtest
        let antsnav = document.createElement("li");
        antsnav.innerHTML = "<a href='#' id='antsnav'><i class='fa fa-signal' style='color: #e46262;'></i><strong>  Modem Test  </strong></a>";

        //mobile planning
        let planbtn = document.createElement("li");
        planbtn.innerHTML = "<a href='#' id='planbtn'style='color: #e46262;'><strong>Full Planning</strong></a>";

        //eventlisteners
        spotnav.addEventListener("click", navbarLSPOT);
        antsnav.addEventListener("click", navbarLANTS);
        planbtn.addEventListener("click", navbarLPLAN);


        function navbarLSPOT(){
            window.open(spotURL + klantnr, "_blank");
        }
        function navbarLANTS(){
            window.open(antsURL + klantnr, "_blank");
        }
        function navbarLPLAN(){
            window.open("https://webclient.unit-t.eu/workorders/index/mobile", "_blank");
        }


    }
    function navbarButtonsR(){
        //WIP
    }
    function taskbuttons(){ 
        let tasknav = document.body.querySelector(".task_nav");

        //spot
        let spot = document.createElement("div");
        spot.className = "nav_btn";
        spot.innerHTML = "<img src='"+ spotLogo +"'>";
        
        //ants
        let ants = document.createElement("div");
        ants.className = "nav_btn";
        ants.innerHTML = "<img src='"+ antsLogo +"'>";
        
        //appends
        tasknav.appendChild(spot);
        tasknav.appendChild(ants);
        
        //eventlisteneners
        spot.addEventListener("click",spotnav);
        ants.addEventListener("click",antsnav);
        
        //functions
        function spotnav(){
            window.open(spotURL + klantnr, "_blank");
        }
        function antsnav(){
            window.open(antsURL + klantnr, "_blank");
        }

    }
    function navMaps(){
        let address =  document.querySelector(".task_address").textContent + ", " + document.querySelector(".task_town").textContent;
        let qrdiv = document.querySelector("#link_gmaps");
        let div = qrdiv.parentNode;
        div.id = "gmaps"
        qrdiv.remove();
        div.addEventListener("click", gmaps)
        function gmaps(){
            window.open("https://www.google.com/maps/place/" + address, "_blank");
        }       
    }
    function navbarPerform(){
        //shorten existing buttons
        document.getElementById("save-in-between").innerHTML = "<i class='fa fa-save'></i>";
        document.getElementById("go-to-probleemmelder").innerText = "PM";
        document.getElementById("go-to-probleemmelder").className = "btn red";
        document.getElementById("go-to-mijntelenet").innerText = "Impersonate";
        
        //location location location
        let navbar = document.querySelector(".nav.navbar-nav");

        //klantnr
        let customer = document.createElement("div");
        customer.style.float = "left";
        customer.style.marginLeft = "25px";
        customer.innerHTML = "<button class='btn dark' id='stock' style='border: 0px;padding: 11px 14px;'>Customer: " + klantnr + " </button>"
        
        //modemtest
        let ants = document.createElement("div");
        ants.style.float = "left";
        ants.style.marginLeft = "10px";
        ants.innerHTML = "<button class='btn dark' id='stock' style='background-color: #36454F; border: 0px;padding: 11px 14px;'>Modem Test</button>"
        //spot
        let spot = document.createElement("div");
        spot.style.float = "left";
        spot.style.marginLeft = "10px";
        spot.innerHTML = "<button class='btn dark' id='stock' style='background-color: #36454F; border: 0px;padding: 11px 14px;'>SPOT</button>"
        //nodeSel
        let selnode = document.createElement("div");
        selnode.style.float = "left";
        selnode.style.marginLeft = "25px";
        selnode.innerHTML = "<button class='btn dark' id='stock' style='border: 0px;padding: 11px 14px;'>Copy Node</button>"
        //streetping
        let street = document.createElement("div");
        street.style.float = "left";
        street.style.marginLeft = "10px";
        street.innerHTML = "<button class='btn dark' id='stock' style='background-color: #36454F; border: 0px;padding: 11px 14px;'>Street Ping</button>"
        //nodecare
        let nodecare = document.createElement("div");
        nodecare.style.float = "left";
        nodecare.style.marginLeft = "10px";
        nodecare.innerHTML = "<button class='btn dark' id='stock' style='background-color: #36454F; border: 0px;padding: 11px 14px;'>Node Care</button>"
        //sapid
        let sap = document.createElement("div");
        sap.style.float = "left";
        sap.style.marginLeft = "10px"
        sap.innerHTML = "<button class='btn dark' id='stock' style='border: 0px;padding: 11px 14px;'>Check SAP-ID</button>";


        //appends

        navbar.appendChild(customer);
        navbar.appendChild(ants);
        navbar.appendChild(spot);
        navbar.appendChild(selnode);
        navbar.appendChild(street);
        navbar.appendChild(nodecare);
        navbar.appendChild(sap);

        //eventlistenener

        customer.addEventListener("click", customerbtn);
        ants.addEventListener("click", antsbtn);
        spot.addEventListener("click", spotbtn);
        selnode.addEventListener("click", nodebtn);
        street.addEventListener("click", streetbtn);
        nodecare.addEventListener("click", nodecarebtn);
        sap.addEventListener("click", getSap);
        //functions
        function stockbtn(){
            window.open(StockURL, "_blank");
        }
        function customerbtn(){
            navigator.clipboard.writeText(klantnr);
        }
        function antsbtn(){

            //dien deze nog te fixen :(
            /*var HFC = getHFC();
            
            if(HFC !== null){
                window.open(antsURL + HFC, "_blank");
            }
            else{*/
                window.open(antsURL + klantnr, "_blank");
            //}
        }
        function spotbtn(){
            window.open(spotURL + klantnr, "_blank");
        }
        function nodebtn(){
            let node = getNode();
            navigator.clipboard.writeText(node);
            selnode.innerHTML = "<button class='btn dark' id='stock' style='border: 0px;padding: 11px 14px;'>Node: "+ node+ "</button>"
        }
        function streetbtn(){
            let node = getNode();
            window.open(streetURL + node, "_blank");
        }
        function nodecarebtn(){
            let node = getNode();
            window.open(nodeURL + node, "_blank");
        }
        function getSap(){
            let sapid = document.querySelector("#sapid").textContent;
            sap.innerHTML = "<button class='btn dark' id='stock' style='border: 0px;padding: 11px 14px;'>SAP: "+ sapid +"</button>";
        }

    }
    function removestuff(){
        document.getElementById("spare-parts-list-trigger").remove();
        document.getElementById("unavailability-current").remove();
        document.getElementById("unavailability-future-task").remove();
    }
    function captionReplace(){
        var captionNode = "(Not yet implemented)";
        var captionklantnr = klantnr;
        document.querySelector(".caption").innerHTML = "<strong>Today's Meetings</strong>   -   Current Customer Number: " + captionklantnr;
        

    }
    
}